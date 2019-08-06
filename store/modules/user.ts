import { VuexModule, Module, Action, Mutation, getModule,} from 'vuex-module-decorators';
import store from "@/store/store"
import axios from 'axios';

export interface User {
  name: string
}

interface UserState {
  users: Array<User>;
}

@Module({ dynamic: true, store, namespaced: true, name: 'user'})
class UserModule extends VuexModule implements UserState {

  users: Array<User> = [];

  get all(): Array<User> {
    return this.users;
  }

  @Mutation
  updateUser(users: Array<User>): void {
    this.users = users
  }

  @Action({})
  async save() {    
    const users = await axios.get<Array<User>>(process.env.apiBaseUrl + '/users')
    this.updateUser(users.data)
  }
}

export const userModule = getModule(UserModule)