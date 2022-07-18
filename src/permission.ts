import {router} from '@/router'
// import { useStore } from './store'
import { useStore } from 'vuex'
router.beforeEach(() => {
  const store = useStore()
  console.log(store)
  const token = store.state 
  console.log('token', token)
})