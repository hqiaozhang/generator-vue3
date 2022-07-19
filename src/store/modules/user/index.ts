import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module
} from 'vuex'

import type { UserState } from './state'
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { RootState } from '@/store'

export { UserState }

export type UserStore<S = UserState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
 

export const store: Module<UserState, RootState> = {
  state,
  mutations,
  actions 
}