import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { RootState } from '@/store/types';

interface UserState {
  users: Array<string>;
}

const state: UserState = {
    users: ['aaaaa', 'bbbbb']
}

const getters: GetterTree<UserState, RootState> = {
  all: (state: UserState) => {
    return state.users;
  }
}

const mutations: MutationTree<UserState> = {
  set_users: (state, users) => {
    state.users = users
  }
}

const actions: ActionTree<UserState, RootState> = {
  save: async (context) => {
    const users = await context.$axios.$get(process.env.apiBaseUrl + '/users')
    context.commit('set_users', users)
  }
};

export const Users: Module<UserState, RootState> = {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};