/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-08 08:50:30
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 18:13:40
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
 