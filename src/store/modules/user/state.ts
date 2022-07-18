/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-28 11:26:33
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 13:34:08
 */
import { getCookie } from '@/utils/util'

// interface UserState{
//     token: string
//     userId: string 
//     userName: String
//     fullName: String 
//     roles: string[] 
// }

export const state  = {
  token: getCookie('token') || '',
  userId: '',
  userName: '',
  fullName: 'admin',  
  roles: []
}
