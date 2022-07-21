import { MutationTree } from 'vuex'
import { UserState } from './state'
import { UserMutationTypes } from './mutation-types'

export type Mutations<S = UserState> = {
  [UserMutationTypes.SET_TOKEN](state: S, token: string): void
  [UserMutationTypes.SET_USERNAME](state: S, name: string): void
  [UserMutationTypes.SET_FULLNAME](state: S, avatar: string): void 
  [UserMutationTypes.SET_ROLES](state: S, roles: string[]): void
  [UserMutationTypes.SET_USERID](state: S, email: string): void
}

export const mutations: MutationTree<UserState> & Mutations = {
  [UserMutationTypes.SET_TOKEN](state: UserState, token: string) {
    state.token = token
  },

  [UserMutationTypes.SET_USERNAME](state: UserState, userName: string) {
    state.userName = userName
  },

  [UserMutationTypes.SET_USERID](state: UserState, userId: string) {
    state.userId = userId
  },

  [UserMutationTypes.SET_FULLNAME](state: UserState, fullName: string) {
    state.fullName = fullName
  },

  [UserMutationTypes.SET_ROLES](state: UserState, roles: string[]) {
    state.roles = roles
  },  
}