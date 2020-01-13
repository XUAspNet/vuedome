import Vue from 'vue'
import VueRouter from 'vue-router'//路由
import home from '../../components/home/home.vue'//首页
import live from '../../components/live/live.vue'//直播页
import user from '../../components/user/user.vue'//用户中心
import follow from '../../components/user/follow.vue'//关注

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/home', name: 'home', component: home },
    { path: '/live/:roomid', name: 'live', component: live },
    { path: '/user', name: 'user', component: user },
    { path: '/follow', name: 'follow', component: follow },
]

const router = new VueRouter({
    routes
})//初始化，可定义路由的各种属性

//全局守卫
router.beforeEach((to, from, next) => {
    // console.log(this);

    // $cookies.set('testkey', 'test1', 50);

    // console.log($cookies.get('testkey'));
    next();
});


export default router
