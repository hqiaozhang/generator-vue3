/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-28 11:26:33
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 13:34:08
 */
import { getCookie } from '@/utils/util'

export interface UserState{
    token: string
    userId: string 
    userName: String
    fullName: String 
    roles: string[] 
}

export const state: UserState = {
  token: getCookie('token') || '',
  userId: '',
  userName: '',
  fullName: 'admin',  
  roles: []
}
