import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import DataList from "./views/DataList.vue";
// import AddData from "./views/AddData.vue";
import EditData from "./views/EditData.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import AddCheatsheet from "./views/AddCheatsheet.vue"
import AddCachedSearch from "./views/AddCachedSearch.vue"
import CachedSearchesList from "./views/CachedSearchesList.vue" 

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
      path: "/cached-searches-list",
      name: "cached-searches-list",
      component: CachedSearchesList,
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
    /* ,
    {
      path: "/add-database",
      name: "add-database",
      component: AddDatabase
    },
    {
      path: "/edit-database/:id",
      name: "editDatabase",
      component: EditDatabase
    },
    {
      path: "/edit-proxy",
      name: "editProxy",
      component: EditProxy
    },
    {
      path: "/manage-content-types",
      name: "ManageContentTypes",
      component: ManageContentTypes
    },
    {
      path: "/manage-topic-areas",
      name: "ManageTopicAreas",
      component: ManageTopicAreas
    },
    {
      path: "/visualize-database-content-types",
      name: "visualizeDatabaseContentTypes",
      component: VisualizeDatabaseContentTypes
    },
    {
      path: "/visualize-database-topic-areas",
      name: "visualizeDatabaseTopicAreas",
      component: VisualizeDatabaseTopicAreas
    },
    {
      path: "/add-featured-collection",
      name: "addFeaturedCollection",
      component: AddFeaturedCollection
    },
    {
      path: "/list-featured-collections",
      name: "listFeaturedCollections",
      component: ListFeaturedCollections
    },
    {
      path: "/edit-featured-collection/:id",
      name: "editFeaturedCollection",
      component: EditFeaturedCollection
    } */
  ]
});
