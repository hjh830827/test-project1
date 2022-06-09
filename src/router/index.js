import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const Bar = { template: "<div>bar</div>" };
const Baz = { template: "<div>baz</div>" };
const Foo = { template: "<div>foo</div>" };
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/phoneNum",
    name: "PhoneNum",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PhoneNum.vue"),
  },
  {
    path: "/VtextfieldTest",
    name: "vtextfieldTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VtextfieldTest.vue"),
  },
  {
    path: "/slickTest",
    name: "slickTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/slickTest.vue"),
  },
  {
    path: "/snackbarTest",
    name: "snackbarTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/snackbarTest.vue"),
  },
  {
    path: "/radioClickTest",
    name: "radioClickTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RadioClickTest.vue"),
  },
  {
    path: "/radioTest",
    name: "radioTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RadioTest.vue"),
  },
  {
    path: "/tocuhTest",
    name: "tocuhTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tocuhTest.vue"),
  },
  {
    path: "/forTest",
    name: "forTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/forTest.vue"),
  },
  {
    path: "/test",
    name: "test",
    // component: Home
    components: {
      default: Foo,
      a: Bar,
      b: Baz,
    },
  },
  {
    path: "/excelTestBySheetJs",
    name: "ExcelTestBySheetJs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExcelTestBySheetJs.vue"),
  },
  {
    path: "/checkBoxAllSelect",
    name: "checkBoxAllSelect",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CheckBoxAllSelect.vue"),
  },
  {
    path: "/filterTest",
    name: "filterTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FilterTest.vue"),
  },
  {
    path: "/datepickerTest",
    name: "datepickerTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DatepickerTest.vue"),
  },
  {
    path: "/scrollTest",
    name: "scrollTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ScrollTest.vue"),
  },
  {
    path: "/dataValitionTest",
    name: "dataValitionTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataValitionTest.vue"),
  },
  {
    path: "/editorTest",
    name: "editorTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditorTest.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  base: process.env.BASE_URL,
  routes,
});

export default router;
