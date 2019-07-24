import Vue from 'vue';
import { NuxtAxiosInstance } from "@nuxtjs/axios";

declare module '*.vue' {
  export default Vue;
}

export interface Context {
  $axios: NuxtAxiosInstance
}