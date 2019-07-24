import Vue from "vue"
import { NuxtAxiosInstance } from "@nuxtjs/axios";

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     layout?: string
//     middleware?: string | String[]
//   }
// }