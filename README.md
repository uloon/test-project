# 笔记

## 脚手架文件结构:

    node_modules
    public
        favicon.ico:页签图标
        index.html:主页面
    src
        assets:存放静态资源
            logo.png
        components:存放组件
        App.vue:汇总所有组件
        main.js入口文件
    .gitignore:git版本管制忽略的配置
    babel.config.js:babel的配置文件
    package-lock.json:包版本控制文件
    package.json:应用包配置文件
    README.md:应用描述文件

## 关于不同版本的Vue:

    -vue.js与vue.runtime.xxx.js的区别:
        (1)vue.js是完整版的Vue,包含核心功能+模板解析器
        (2)vue.runtime.xxx.js是运行版的Vue,只包含核心功能,没有模板解析器
    -因为vue.runtime.xxx.js没有模板解析器,所有不能使用template配置项,需要使用render函数接收到的createElement函数去指定内容

## vue.config.js配置文件

    使用vue inspect > output.js可以查看Vue脚手架的默认配置
    使用vue.config.js可以对脚手架进行个性化定制,详情见:https://cli.vuejs.org/zh

## ref属性

    1.被用来给元素或子组件注册引用信息(类似于id)
    2.应用在html标签获取的时真实DOM元素,应用在组件标签上获取的是实例对象(VueComponent)
    3.使用方式:
        打标识:<h1 ref="xxx">...</h1>
        获取:this.$refs.xxx
        
## 配置项props
    功能：让组件接收外部传来的数据
    (1)传递数据
        <Div name="xxx">
    (2)接收数据
        // 1.简单声明接收
            props:['name','age']

        // 2.接收的同时对数据进行类型监测
        /*props:{
            name:String,
            age:Number
        }*/

        // 3.接收的同时对数据进行类型监测+默认值的指定+限制必要性
        /*props:{
            name:{
                type:String,
                // 属性是否必要输入
                required:true
            },
            age:{
                type:Number,
                // 默认值99
                default:99
            }
        }*/

    备注：props是只读的，Vue底层会检测对props的修改，如果进行了修改，就会发出警告，
        若业务需求确实需要修改，那么需要复制props的内容到data中，然后去修改data的数据

## mixin（混入）
    功能：可以把多个组件共有的配置提取成一个混入对象
    使用方式：
        第一步定义混入，例如：
            export const mixinA={
                methods: {
                    showName(){
                        alert(this.name)
                    }  
                },
            }
        第二步使用混入，例如：
            首先导入混入所在的js文件 import {mixinA} from './xxx';
                1.全局混入：Vue.mixin(mixinA)
                2.局部混入：mixin:[mixinA]

## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数Vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.install = function (Vue,options){
            1.添加全局过滤器
            Vue.filter()

            2.添加全局指令
            Vue.directive()

            3.配置全局混入
            Vue.mixin()
            ......
        }
    使用插件：
        Vue.use(插件名)

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>

## 总结todoList案例
    1.组件化编码流程
        (1)实现静态组件：抽取组件，使用组件实现静态页面效果，注意命名不要和html元素冲突
        (2)展示动态数据
            (2).1数据的类型、名称是什么
            (2).2数据保存在哪个组件
                a.若一个组件在用：保存在自身
                b.若一些组件在用：保存在父组件上（状态提升）
        (3)交互——绑定事件监听
    2.props适用于：
        (1)父组件==>子组件
        (1)子组件==>父组件，要求父组件先给子组件一个函数
    3.不推荐在子组件中修改props传来的值

## WebStorage
    1.存储内容大小一般在5MB左右
    2.浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
    3.相关API
        1.xxxStorage.setItem('key','value');//把键值对添加到存储中，如果键名存在则更新对应的值
        2.xxxStorage.getItem('key');//函数返回对应的值
        3.xxxStorage.removeItem('key');//删除对应键名的存储
        4.xxxStorage.clear()//清除所有存储
    4.备注：
        1.SessionStorage存储中的内容会随浏览器窗口关闭而消失
        2.LocalStorage中存储的内容需要手动清除才会消失
        3.如果xxxStorage.getItem('key')如果找不到对应的值，则返回null
        4.JSON.parse(null)的结果依旧是null

## 组件的自定义事件
    1.组件间的通信方式，适用于子组件==>父组件
    2.绑定自定义事件：
        1.第一种方式，在父组件中<子组件名 @事件名="回调函数名">
        2.第二种方式，在父组件种<子组件名 ref="demo">
            mounted(){
                this.$refs.demo.$on('事件名',this.回调函数名)
            }
    3.触发自定义事件： this.$emit('事件名',数据)
    4.解绑自定义事件： this.$off('事件名')
    5.组件上也可以用原生DOM事件，需要用native修饰