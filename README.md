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
        1.第一种方式，在父组件中<子组件名 @自定义事件名="回调函数名">
        2.第二种方式，在父组件种<子组件名 ref="demo">
            mounted(){
                this.$refs.demo.$on('自定义事件名',()=>{
                    //回调函数
                })
            }
    3.触发自定义事件： this.$emit('自定义事件名',数据)
    4.解绑自定义事件： this.$off('自定义事件名')
    5.组件上也可以用原生DOM事件，需要用native修饰

## 全局事件总线(GlobalEventBus)
    1.一种组件间通信方式，适用于任意组间通信
    2.安装全局事件总线：
        new Vue({
            ...
            beforeCreate(){
                Vue.prototype.$bus=this
            },
            ...
        })
    3.使用全局事件总线
        1.接收数据：
            A组件想接收数据，则在A组件中给$bus绑定自定义事件,事件的回调留在A本身
            mounted(){
                this.$bus.$on('自定义事件名',()=>{
                    //回调函数
                })
            }
        2.提供数据：
            this.$bus.$emit('自定义事件名',数据)
    4.建议在beforeDestory钩子中,用$off去解绑当前组件所用到的自定义事件

## 消息订阅与发布
    1.一种组件间通信方式，适用于任意组间通信
    2.引入：在订阅与发布消息的组件上，import pubsub from 'pubsub-js'
    3.接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A本身
        mounted(){
            this.pid=pubsub.subscribe('消息名',(消息名,数据)=>{
                //回调函数
            })
        },
    4.提供数据
        pubsub.publish('消息名',数据)
    5.建议在beforeDestory钩子中取消订阅
        beforeDestory(){
            pubsub.unsubscribe(this.pubId)
        }

## this.$nextTick(回调函数)
    作用： 在下一次DOM更新结束之后执行指定的回调
    使用场景：当数据改变后，要基于更新后的DOM进行某些操作

## 动画与过渡
    1.作用：在插入，更新或移除DOM元素时，在合适的时候给元素添加样式类名
    2.写法：
        1.使用动画
            （1）准备好keyframes
                @keyframes show {
                    from{
                        transform: translateX(-100px);
                    }
                    to{
                        transform: translateX(0px);
                    }
                }
            （2）使用transition标签包裹元素，并配置name属性
                <transition name="hello1" appear>
                    <h1 class="title" v-show="isShow">你好1</h1>
                </transition>
            （3）在style里实现动画效果
                <!-- 若未配置name，则hello1替换为v -->
                .hello1-enter-active{
                    animation: show 0.5s linear;
                }
                .hello1-leave-active{
                    animation: show 0.5s linear reverse;
                }
        2.使用过度效果
            （1）使用transition标签包裹元素，并配置name属性
            （2）在style中实现过度效果
                /* 进入的起点 ，离开的终点*/
                .v-enter,.v-leave-to{
                    transform: translateX(-100%);
                }
                /* 进入过程，离开过程 */
                .v-enter-active,.v-leave-active{
                    transition: 0.5s linear;
                }
                /* 进入的终点 ，离开的起点 */
                .v-enter-to,.v-leave{
                    transform: translateX(0);
                }
        3.使用第三方库animate
            （1）安装第三方库  
                    npm install animate.css
            （2）引入库
                    import 'animate.css'
            （3）在transition中配置 
                    name="animate__animated animate__bounce"
                    enter-active-class="想要的进入样式"
                    leave-active-class="想要的离开样式"

## vue脚手架配置代理
    方法一：
        在vue.config.js中添加如下配置文件：
            devServer:{
                proxy:'http://localhost:5000'
            }
        优点：配置简单，请求的资源直接发给前端(8080)
        缺点：不能配置多个代理，不能灵活地控制请求是否走代理，只有请求了
        工作方式：当请求了前端不存在的资源时，那么该请求会发给服务器
    方法二：
        在vue.config.js文件中添加如下配置文件
            devServer:{
                proxy:{
                    '/get-student':{                            //匹配所有以'/get-student'开头的请求路径
                        target:'http://localhost:5000',         //代理目标的基础路径
                        pathRewrite:{'^/get-student':''},       //将路径中的get-student替换为空字符，防止路径错误
                        ws:true,                                //用于支持websocket
                        changeOrigin:true,                      //是否伪装
                    },
                    '/get-car':{
                        target:'http://localhost:5001',
                        pathRewrite:{'^/get-car':''},
                        ws:true,//用于支持websocket
                        changeOrigin:true,//是否伪装
                    }
                }
            }
        优点：可以配置多个代理，且可以灵活的控制请求是否走代理
        缺点：配置略繁琐，请求资源时必须加前缀

##  插槽
    1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信方式，适用于父组件==>子组件
    2.分类：默认插槽，具名插槽，作用域插槽
    3.使用方式：
        1.默认插槽
            父组件中：
                <Category title="美食" :listData="foods">
                    <div>插入的html结构</div>
                </Category>
            子组件中：
                <slot>
                    插槽的默认结构，若父组件未使用插槽，则使用默认结构
                </slot>
        2.具名插槽：
            父组件中：
                <Category title="美食" :listData="foods">
                    <img slot="body" src="./assets/烧烤.jpg">
                    <a slot="footer" href="https://www.bilibili.com/v/food">点击发现更多美食</a>
                </Category>
            子组件中：
                <slot name="body">默认结构</slot>
                <slot name="footer">默认结构</slot>
        3.作用域插槽：
            1.理解：数据在组件本身，但根据数据生成的结构需要组件的使用者自己决定
            2.具体编码：
                父组件中：
                    <Category title="游戏" >
                    <!-- 父组件的template的scope属性接收子组件传来的数据，接收到的内容为一个对象 -->
                        <template scope="listData">
                        <!-- 生成的是ul列表 -->
                            <ul>
                                <li v-for="(item,index) in listData.games" :key="index">{{item}}</li>
                            </ul>
                        </template>
                    </Category>
                    <Category title="游戏" >
                        <template scope="listData">
                        <!-- 生成的是ol列表 -->
                            <ol>
                                <li v-for="(item,index) in listData.games" :key="index">{{item}}</li>
                            </ol>
                        </template>
                    </Category>
                子组件中：
                    <!-- 把子组件中的数据传给父组件 -->
                    <slot :games="games"></slot>

## Vuex
    1.概念：
        在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理，也是一种组件间通信方式，适用于任意组件间
    2.何时使用？
        多个组件共享数据时
    3.搭建Vue环境
        (1).创建文件 src/store/index.js
            // 引入Vue
            import Vue from 'vue'
            // 引入Vuex
            import Vuex from 'vuex'
            // 使用插件
            Vue.use(Vuex)

            // 准备actions——用于响应组件中的动作
            const actions = {}
            // 准备mutations——用于操作数据
            const mutations = {}
            // 准备state——用于存储数据
            const state = {}

            // 创建并暴露store
            export default new Vuex.Store({
                actions:actions,
                mutations:mutations,
                state:state
            })
        (2).在main.js中创建vm时传入store配置项
            // 引入store
            import store from './store/index'
            // 创建vm实例
            new Vue({
                ...
                store,
                ...
            )}
    4.getters
        (1)概念：当state中的数据需要经过加工后再使用时，用getter加工
        (2)在store/index.js中追加getter配置
            const getters = {
                bigSum(state) {
                    return state.sum * 10
                }
            }
            export default new Vuex.Store({
                ...
                getters
            })
        (3)在组件中读取数据：$store.getters.bigSum
    5.mapState和mapGetter
        1.帮助映射state和getter中的数据为计算属性
            computed:{
                // 借助mapState生成计算属性（对象写法）
                // ...mapState({sum:'sum',})

                // 借助mapState生成计算属性（数组写法）
                ...mapState(['sum']),

                // 借助mapGetters生成计算属性（对象写法）
                // ...mapGetters({bigSum:'bigSum',})

                // 借助mapGetters生成计算属性（数组写法）
                ...mapGetters(['bigSum'])
                // {{$store.getters.bigSum}} ==> {{bigSum}}
            },
    6.mapActions和mapMutations
        1.帮助生成与actions和mutations对话的方法，即生成$store.dispatch(xxx)和$store.commit(xxx)的方法
            methods:{
                // (对象写法) 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions
                // ...mapActions({生成的单击事件回调函数名:'actions中存在的函数名',incrementDelay:'incrementDelay'})

                // (数组写法) 
                ...mapActions(['incrementOdd','incrementDelay'])
                
                // (对象写法) 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
                ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'})

                // (数组写法)，注：单击事件回调函数也需改成大写
                ...mapMutations(['INCREMENT','DECREMENT']) 
            }
    7.模块化加命名空间
        1.目的：让代码更好维护，让数据分类更加明确
        2.修改store.js
            // 求和功能相关配置
            const countOptions={
                namespaced:true,
                actions:{  },
                mutations:{  },
                getters:{ },
                state:{},
            }

            // Student组件相关配置
            const personOptions={
                namespaced:true,
                actions:{ },
                mutations:{ },
                getters:{},
                state:{ },
            }

            // 创建并暴露store
            export default new Vuex.Store({
                modules:{
                    countOptions,
                    personOptions
                }
            })
        3.开启命名空间后，组件中读取state数据：
            方式一：自己直接读取
                this.$store.state.xxx
            方式二：借助mapState读取
                ...mapState('countOptions',['xxx','xxx'])

        4.开启命名空间后，组件中读取getters数据：
            方式一：自己直接读取
                this.$store.getters['countOptions/xxx']
            方式二：借助mapState读取
                ...mapGetters('countOptions',['xxx','xxx'])

        5.开启命名空间后，组件中调用dispatch：
            方式一：自己直接调用
                this.$store.dispatch('countOptions/xxx',要传的数据)
            方式二：借助mapState读取
                ...mapActions('countOptions',['actions中存在的方法'])

        3.开启命名空间后，组件中调用commit：
            方式一：自己直接调用
                this.$store.commit('countOptions/XXX',要传的数据)
            方式二：借助mapState读取
                ...mapMutations('countOptions',['mutations中存在的方法'])