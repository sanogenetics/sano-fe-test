// Study Model

import { Model } from "@vuex-orm/core";

export default class Study extends Model {
   static entity = "studies";

   static fields() {
      return {
         description: this.attr(null),
         id: this.attr(null),
         joined: this.attr(null),
         name: this.attr(null),
         researcher: this.attr(null),
      };
   }
}
