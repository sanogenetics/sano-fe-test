import VuexORM from "@vuex-orm/core";
const { Database } = VuexORM;

import Study from "./Study";

const database = new Database();
database.register(Study);

export { database, Study };
