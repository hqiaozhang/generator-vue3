import { createStore, createLogger } from 'vuex'
import { store as user, UserStore, UserState } from '@/store/modules/user'

export interface RootState { 
  user: UserState  
}

export type Store = UserStore<Pick<RootState, 'user'>> 

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
  plugins,
  modules: { 
    user, 
  }
})

export function useStore(): Store {
  return store as Store
}