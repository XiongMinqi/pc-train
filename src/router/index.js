import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/', // 默认进入路由
    redirect: '/home'  //重定向
  },
  // {
  //   path:'/',
  //   name:'home'
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: "/index",
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: "",
        name: "index",
        component: Index
      }
    ]
  },
  {
    path: "/score",
    component: Home,
    children: [
      {
        path: "",
        name: "score",
        component: ()=>import("../views/score/score.vue")
      }
    ]
  },
  {
    path: "/onlineTest",
    component: Home,
    children: [
      {
        path: "",
        name: "onlineTest",
        component: ()=>import("../views/onlineTest/onlineTest.vue")
      }
    ]
  },
  {
    path: "/onlineStudy",
    component: Home,
    children: [
      {
        path: "",
        name: "onlineStudy",
        component: ()=>import("../views/onlineStudy/onlineStudy.vue")
      }
    ]
  },
  {
    path: "/mistake",
    component: Home,
    children: [
      {
        path: "",
        name: "mistake",
        component: ()=>import("../views/mistake/mistake.vue")
      }
    ]
  },
  {
    path: "/grade",
    component: Home,
    children: [
      {
        path: "",
        name: "grade",
        component: ()=>import("../views/grade/grade.vue")
      }
    ]
  },
  {
    path: "/user",
    component: Home,
    children: [
      {
        path: "",
        name: "user",
        component: ()=>import("../views/user/user.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
//路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  let user = localStorage.getItem("userInfo");
  if (to.path === "/login") {
    next();
  } else {
    user ? next() : next("/login");
  }
});
export default router
