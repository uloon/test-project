// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import DetailMessage from '../pages/DetailMessage'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detailmessage',
                            path: 'detail-message/:id/:title',//为params参数占位
                            component: DetailMessage,
                            meta: {
                                title: '消息详情'
                            },

                            // 第一种写法,props值为对象,该对象中所有的key-value的组合最终都会通过props传给DetailMessage组件
                            // props:{a:100}

                            // 第二种写法,props值为布尔值,布尔值为true,把路由收到的所有params参数通过props传给DetailMessage组件
                            // props:true
                            // props:['id','title']

                            // 第三种写法,props为函数,会通过props传给DetailMessage组件
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title,
                                }
                            }
                        }
                    ],
                    meta: {
                        isAuth: true,
                        title: '消息'
                    }
                },
                {
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    }
                }
            ],
            meta: {
                title: 'home'
            }
        }
    ]
})

// 全局前置路由守卫：初始化的时候被调用,每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // 功能要求：访问message或news时要判断缓存name是否为loon，是就可以访问，否则不能访问
    // if(to.path==='/home/news'|| to.path==='/home/message'){                        第一种方式，以路径判断是否要权限校验
    if (to.meta.isAuth) {  //第二种方式，绑定是否需要权限校验的属性
        if (localStorage.getItem('name') === 'loon') {
            next()
        } else {
            alert('用户名错误')
        }
    } else {
        next()
    }
})

// 全局后置路由守卫：初始化的时候被调用,每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || 'vue-test'
})

export default router