import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import DataList from "./views/DataList.vue";
import AddData from "./views/AddData.vue";
// import AddDatabase from "./views/AddDatabase.vue";
// import EditDatabase from "./views/EditDatabase.vue";
// import EditProxy from "./views/EditProxy.vue";
// import ManageContentTypes from "./views/ManageContentTypes";
// import ManageTopicAreas from "./views/ManageTopicAreas";
// import VisualizeDatabaseContentTypes from "./views/VisualizeDatabaseContentTypes.vue";
// import VisualizeDatabaseTopicAreas from "./views/VisualizeDatabaseTopicAreas.vue";
// import AddFeaturedCollection from "./views/AddFeaturedCollection.vue";
// import ListFeaturedCollections from "./views/ListFeaturedCollections.vue";
// import EditFeaturedCollection from "./views/EditFeaturedCollection.vue";

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
      component: DataList
    },
    {
      path: "/add-data",
      name: "add-data",
      component: AddData
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
