import { createStore, createLogger } from 'vuex'
import { store as user, UserStore, UserState } from '@/store/modules/user'

export interface RootState { 
  user: UserState  
}

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
  plugins,
  modules: {
    app,
    settings,
    permission,
    user,
    tagViews
  }
})

export function useStore(): Store {
  return store as Store
}