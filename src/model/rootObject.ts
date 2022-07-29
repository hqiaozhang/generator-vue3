/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-29 09:05:40
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-29 09:07:23
 */

// {
//     "code": 0,
//     "msg": "success",
//     "data": {
//         "accessToken": "admin-token"
//     }
// }
// <T> 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
export interface RootObject<T>{
  code: number
  msg: string
  data: T
}
