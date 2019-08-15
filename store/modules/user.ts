import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from '@/store/store'

export interface UserState {
  users: string[]
}

@Module({ dynamic: true, store, namespaced: true, name: 'user' })
class UserModule extends VuexModule implements UserState {
  public users: string[] = []

  public get all(): string[] {
    return this.users
  }

  @Mutation
  private setUser(users: string[]): void {
    this.users = users
  }

  @Action({})
  public async save() {
    // window.console.log(value)
    // const users = await this.context.$axios.$get(process.env.apiBaseUrl + '/users')
    const users = ['aaaaaaaaa', 'bbbbbbbbbbb']
    this.setUser(users)
  }
}

export const userModule = getModule(UserModule)
