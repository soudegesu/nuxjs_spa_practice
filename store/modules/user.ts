import { VuexModule, Module, Action, Mutation, getModule,} from 'vuex-module-decorators';
import store from "@/store/store"

export interface UserState {
  users: Array<string>;
}

@Module({ dynamic: true, store, namespaced: true, name: 'user'})
class UserModule extends VuexModule implements UserState {

  users: Array<string> = [];

  public get all(): Array<string> {
    return this.users;
  }

  @Mutation
  public setUser(users: Array<string>): void {
    this.users = users
  }

  @Action({})
  async save() {
    // window.console.log(value)
    // const users = await this.context.$axios.$get(process.env.apiBaseUrl + '/users')
    const users = ['aaaaaaaaa', 'bbbbbbbbbbb']
    this.setUser(users)
  }
}

export const userModule = getModule(UserModule)