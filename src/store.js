import { createStore } from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import axios from "axios";
import { database } from "./models/models";

VuexORM.use(VuexORMAxios, { axios });

export default createStore({
   plugins: [VuexORM.install(database)],
   state: {},
   getters: {},
   mutations: {},
   actions: {},
});
