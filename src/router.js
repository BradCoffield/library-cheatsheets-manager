import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import DataList from "./views/DataList.vue";
// import AddData from "./views/AddData.vue";
import EditData from "./views/EditData.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import AddCheatsheet from "./views/AddCheatsheet.vue";
import AddCachedSearch from "./views/AddCachedSearch.vue";
import CachedSearchesList_Ebsco from "./views/CachedSearchesList_Ebsco.vue";
import CachedSearchesList_PrimoBooks from "./views/CachedSearchesList_PrimoBooks.vue";
import CachedSearchesList_PrimoArticles from "./views/CachedSearchesList_PrimoArticles.vue";
import WeblinksAddLinks from "./views/WeblinksAddLinks.vue";
import WeblinksViewList from "./views/WeblinksViewList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/data-list",
      name: "data-list",
      component: DataList,
      meta: {
        protected: true
      }
    },
    {
      path: "/add-cheatsheet",
      name: "add-cheatsheet",
      component: AddCheatsheet,
      meta: {
        protected: true
      }
    },
    {
      path: "/edit-data",
      name: "edit-data",
      component: EditData,
      meta: {
        protected: true
      }
    },
    {
      path: "/add-cached-search",
      name: "add-cached-search",
      component: AddCachedSearch,
      meta: {
        protected: true
      }
    },
    {
      path: "/cached-searches-list-ebsco",
      name: "cached-searches-list-ebsco",
      component: CachedSearchesList_Ebsco,
      meta: {
        protected: true
      }
    },
    {
      path: "/cached-searches-list-primo-books",
      name: "cached-searches-list-primo-books",
      component: CachedSearchesList_PrimoBooks,
      meta: {
        protected: true
      }
    },
    {
      path: "/cached-searches-list-primo-articles",
      name: "cached-searches-list-primo-articles",
      component: CachedSearchesList_PrimoArticles,
      meta: {
        protected: true
      }
    },
    {
      path: "/add-weblink",
      name: "add-weblink",
      component: WeblinksAddLinks,
      meta: {
        protected: true
      }
    },
    {
      path: "/manage-weblinks",
      name: "manage-weblinks",
      component: WeblinksViewList,
      meta: {
        protected: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    }
  ]
});
