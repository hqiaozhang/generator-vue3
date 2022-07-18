import {router} from '@/router'
// import { useStore } from './store'
import { useStore } from 'vuex'
router.beforeEach(() => {
  const store = useStore()
  const token = store.state.user.token
  console.log('token', token)
})