import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/', // 默认进入路由
    redirect: '/login' //重定向
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
    path: '/testIng',
    name: 'testIng',
    component: () => import('../views/testIng/testIng.vue')
  },
  {
    path: "/index",
    component: Home,
    children: [{
      path: "",
      name: "index",
      component: Index
    }]
  },
  {
    path: "/score",
    component: Home,
    children: [{
      path: "",
      name: "score",
      component: () => import("../views/score/score.vue")
    }]
  },
  {
    path: "/onlineTest",
    component: Home,
    children: [{
      path: "",
      name: "onlineTest",
      component: () => import("../views/onlineTest/onlineTest.vue")
    }]
  },
  {
    path: "/independentTest",
    component: Home,
    children: [{
      path: "",
      name: "independentTest",
      component: () => import("../views/independentTest/independentTest.vue")
    }]
  },
  {
    path: "/onlineStudy",
    component: Home,
    children: [{
      path: "",
      name: "onlineStudy",
      component: () => import("../views/onlineStudy/onlineStudy.vue"),
      redirect: "/courseware",
      children: [{
          path: "/courseware",
          name: "courseware",
          component: () => import("../views/study/courseware.vue")
        },
        {
          path: "/material",
          name: "material",
          component: () => import("../views/study/material.vue")
        },
        {
          path: "/online",
          name: "online",
          component: () => import("../views/study/online.vue")
        },
        {
          path: "/studyRecord",
          name: "studyRecord",
          component: () => import("../views/study/studyRecord.vue")
        },
      ]
    }]
  },
  {
    path: "/mistake",
    component: Home,
    children: [{
      path: "",
      name: "mistake",
      component: () => import("../views/mistake/mistake.vue")
    }]
  },
  {
    path: "/testRecords",
    component: Home,
    children: [{
      path: "",
      name: "testRecords",
      component: () => import("../views/testRecords/testRecords.vue")
    }]
  },
  {
    path: "/grade",
    component: Home,
    children: [{
      path: "",
      name: "grade",
      component: () => import("../views/grade/grade.vue")
    }]
  },
  {
    path: "/user",
    component: Home,
    children: [{
      path: "",
      name: "user",
      component: () => import("../views/user/user.vue")
    }]
  }
]

const router = new VueRouter({
  routes
})
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    window.location.reload();
    // router.replace(router.history.pending.fullPath);
  } else {
    console.log(error)
  }
});
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("userInfo");
  // let user = this.$cookies.get("JSESSIONID")
  // let user = getCookie("JSESSIONID")

  if (to.path === "/login") {
    next();
  } else {
    user ? next() : next("/login");
  }
});
export default router