// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/', // 默认进入路由
    redirect: '/index' //重定向
  },
  {
    path: '/login',
    name: 'login',
    // component: resolve => (require(["../views/login/login.vue"], resolve))
    component: () => import( /* webpackChunkName: 'login' */ '../views/login/login.vue')
  },
  {
    path: '/testIng',
    name: 'testIng',
    // component: resolve => (require(["../views/testIng/testIng.vue"], resolve))
    component: () => import( /* webpackChunkName: 'testIng' */ '../views/testIng/testIng.vue')
  },
  {
    path: "/index",
    component: Home,
    children: [{
      path: "",
      name: "index",
      // component: resolve => (require(["../views/index/index.vue"], resolve))
      component: () => import( /* webpackChunkName: 'index' */ '../views/index/index.vue')
    }]
  },
  {
    path: "/news",
    component: Home,
    children: [{
      path: "",
      name: "news",
      // component: resolve => (require(["../views/news/news.vue"], resolve))
      component: () => import( /* webpackChunkName: 'news' */ '../views/news/news.vue')
    }]
  },
  {
    path: "/comments",
    component: Home,
    children: [{
      path: "",
      name: "comments",
      component: () => import( /* webpackChunkName: 'comments' */ '../views/comments/comments.vue')
    }]
  },
  {
    path: "/allComments",
    component: Home,
    children: [{
      path: "",
      name: "allComments",
      component: () => import( /* webpackChunkName: 'allComments' */ '../views/comments/allComments.vue')
    }]
  },
  {
    path: "/score",
    component: Home,
    children: [{
      path: "",
      name: "score",
      // component: resolve => (require(["../views/score/score.vue"], resolve))
      component: () => import( /* webpackChunkName: 'score' */ "../views/score/score.vue")
    }]
  },
  {
    path: "/onlineTest",
    component: Home,
    children: [{
      path: "",
      name: "onlineTest",
      // component: resolve => (require(["../views/onlineTest/onlineTest.vue"], resolve))
      component: () => import( /* webpackChunkName: 'onlineTest' */ "../views/onlineTest/onlineTest.vue")
    }]
  },
  {
    path: "/independentTest",
    component: Home,
    children: [{
      path: "",
      name: "independentTest",
      // component: resolve => (require(["../views/independentTest/independentTest.vue"], resolve)),
      component: () => import( /* webpackChunkName: 'independentTest' */ "../views/independentTest/independentTest.vue"),
      redirect: "classList",
      children: [{
        path: "/classList",
        name: "classList",
        // component: resolve => (require(["../views/course/classList.vue"], resolve))
        component: () => import( /* webpackChunkName: 'classList' */ "../views/course/classList.vue")
      }]
    }]
  },
  {
    path: "/onlineStudy",
    component: Home,
    children: [{
      path: "",
      name: "onlineStudy",
      // component: resolve => (require(["../views/onlineStudy/onlineStudy.vue"], resolve)),
      component: () => import( /* webpackChunkName: 'onlineStudy' */ "../views/onlineStudy/onlineStudy.vue"),
      redirect: "/courseware",
      children: [{
          path: "/courseware",
          name: "courseware",
          // component: resolve => (require(["../views/study/courseware.vue"], resolve))
          component: () => import( /* webpackChunkName: 'courseware' */ "../views/study/courseware.vue")
        },
        {
          path: "/material",
          name: "material",
          // component: resolve => (require(["../views/study/material.vue"], resolve))
          component: () => import( /* webpackChunkName: 'login' */ "../views/study/material.vue")
        },
        {
          path: "/online",
          name: "online",
          // component: resolve => (require(["../views/study/online.vue"], resolve))
          component: () => import( /* webpackChunkName: 'online' */ "../views/study/online.vue")
        },
        {
          path: "/studyRecord",
          name: "studyRecord",
          // component: resolve => (require(["../views/study/studyRecord.vue"], resolve))
          component: () => import( /* webpackChunkName: 'studyRecord' */ "../views/study/studyRecord.vue")
        },
        {
          path: "/practiseRecord",
          name: "practiseRecord",
          // component: resolve => (require(["../views/study/practiseRecord.vue"], resolve))
          component: () => import( /* webpackChunkName: 'practiseRecord' */ "../views/study/practiseRecord.vue")
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
      // component: resolve => (require(["../views/mistake/mistake.vue"], resolve))
      component: () => import( /* webpackChunkName: 'mistake' */ "../views/mistake/mistake.vue")
    }]
  },
  {
    path: "/testRecords",
    component: Home,
    children: [{
      path: "",
      name: "testRecords",
      // component: resolve => (require(["../views/testRecords/testRecords.vue"], resolve))
      component: () => import( /* webpackChunkName: 'testRecords' */ "../views/testRecords/testRecords.vue")
    }]
  },
  {
    path: "/grade",
    component: Home,
    children: [{
      path: "",
      name: "grade",
      // component: resolve => (require(["../views/grade/grade.vue"], resolve))
      component: () => import( /* webpackChunkName: 'grade' */ "../views/grade/grade.vue")
    }]
  },
  {
    path: "/user",
    component: Home,
    children: [{
      path: "",
      name: "user",
      // component: resolve => (require(["../views/user/user.vue"], resolve))
      component: () => import( /* webpackChunkName: 'user' */ "../views/user/user.vue")
    }]
  }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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