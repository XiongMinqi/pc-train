// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/', // 默认进入路由
    redirect: '/login' //重定向
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => (require(["../views/login/login.vue"], resolve))
    // component: () => import('../views/login/login.vue')
  },
  {
    path: '/testIng',
    name: 'testIng',
    component: resolve => (require(["../views/testIng/testIng.vue"], resolve))
    // component: () => import('../views/testIng/testIng.vue')
  },
  {
    path: "/index",
    component: Home,
    children: [{
      path: "",
      name: "index",
      component: resolve => (require(["../views/index/index.vue"], resolve))
      // component: () => import('../views/index/index.vue')
    }]
  },
  {
    path: "/score",
    component: Home,
    children: [{
      path: "",
      name: "score",
      component: resolve => (require(["../views/score/score.vue"], resolve))
      // component: () => import("../views/score/score.vue")
    }]
  },
  {
    path: "/onlineTest",
    component: Home,
    children: [{
      path: "",
      name: "onlineTest",
      component: resolve => (require(["../views/onlineTest/onlineTest.vue"], resolve))
      // component: () => import("../views/onlineTest/onlineTest.vue")
    }]
  },
  {
    path: "/independentTest",
    component: Home,
    children: [{
      path: "",
      name: "independentTest",
      component: resolve => (require(["../views/independentTest/independentTest.vue"], resolve))
      // component: () => import("../views/independentTest/independentTest.vue")
    }]
  },
  {
    path: "/onlineStudy",
    component: Home,
    children: [{
      path: "",
      name: "onlineStudy",
      component: resolve => (require(["../views/onlineStudy/onlineStudy.vue"], resolve)),
      // component: () => import("../views/onlineStudy/onlineStudy.vue"),
      redirect: "/courseware",
      children: [{
          path: "/courseware",
          name: "courseware",
          component: resolve => (require(["../views/study/courseware.vue"], resolve))
          // component: () => import("../views/study/courseware.vue")
        },
        {
          path: "/material",
          name: "material",
          component: resolve => (require(["../views/study/material.vue"], resolve))
          // component: () => import("../views/study/material.vue")
        },
        {
          path: "/online",
          name: "online",
          component: resolve => (require(["../views/study/online.vue"], resolve))
          // component: () => import("../views/study/online.vue")
        },
        {
          path: "/studyRecord",
          name: "studyRecord",
          component: resolve => (require(["../views/study/studyRecord.vue"], resolve))
          // component: () => import("../views/study/studyRecord.vue")
        },
        {
          path: "/practiseRecord",
          name: "studyRecord",
          component: resolve => (require(["../views/study/practiseRecord.vue"], resolve))
          // component: () => import("../views/study/practiseRecord.vue")
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
      component: resolve => (require(["../views/mistake/mistake.vue"], resolve))
      // component: () => import("../views/mistake/mistake.vue")
    }]
  },
  {
    path: "/testRecords",
    component: Home,
    children: [{
      path: "",
      name: "testRecords",
      component: resolve => (require(["../views/testRecords/testRecords.vue"], resolve))
      // component: () => import("../views/testRecords/testRecords.vue")
    }]
  },
  {
    path: "/grade",
    component: Home,
    children: [{
      path: "",
      name: "grade",
      component: resolve => (require(["../views/grade/grade.vue"], resolve))
      // component: () => import("../views/testRecords/grade.vue")
    }]
  },
  {
    path: "/user",
    component: Home,
    children: [{
      path: "",
      name: "user",
      component: resolve => (require(["../views/user/user.vue"], resolve))
      // component: () => import("../views/user/user.vue")
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
  if (to.path === "/login") {
    next();
  } else {
    user ? next() : next("/login");
  }
});
export default router