<!--
/*
 * @Author: zhanghongqiao 
 * @Date: 2022-07-18 09:31:33 
 * @Email: 991034150@qq.com 
 * @Description: Description
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-07-21 10:57:44
 */
-->

 <template>
    <div class="login_container">
    <video
      poster="static/images/login/video-cover.jpeg"
      loop
      autoplay
      muted
    >
      <source src="static/images/login/night.mp4">
    </video> 

    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left" >
      <div class="title-container">
        <h3 class="title">
          系统登录
        </h3> 
      </div>

      <el-form-item prop="username">
         <i class="iconfont">&#xe661;</i>
        <el-input
          ref="userNameRef"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on" /> 
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual >
        <el-form-item prop="password">
          <i class="iconfont">&#xe777;</i>
          <el-input
            :key="passwordType"
            ref="passwordRef"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            autocomplete="on" 
          />
          <span class="show-pwd"  >
            <svg-icon :name="passwordType === 'password' ? 'eye-off' : 'eye-on'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%"
        @click.prevent="handleLogin">登录  </el-button>   
    </el-form> 
   </div>
 </template>
 
 
<script lang="ts">
import './index.scss'
import { defineComponent, reactive, ref, toRefs, nextTick } from 'vue'
import { useStore } from 'vuex'
import { UserActionTypes } from '@/store/modules/user/action-types'
import { useRoute, LocationQuery, useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const userNameRef = ref(null)
    const passwordRef = ref(null)
    const loginFormRef = ref(null)
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: 'blur', required: true, message: '请输入用户名' }],
        password: [{ validator: passwordRef, trigger: 'blur', required: true, message: '请输入密码' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: '',
      otherQuery: {}
    })

    const methods = reactive({
      showPwd: () => {
        if (state.passwordType === 'password') {
          state.passwordType = ''
        } else {
          state.passwordType = 'password'
        }
        nextTick(() => {
          (passwordRef.value as any).focus()
        })
      },
      handleLogin: () => {
       (loginFormRef.value as any).validate(async(valid: boolean) => {
         console.log('======')
         if (valid) { 
           await store.dispatch(UserActionTypes.ACTION_LOGIN, state.loginForm)
            router
              .push({
                path: state.redirect || '/',
                query: state.otherQuery
              })
         }
       })
      },
    })

    return {
       userNameRef,
      passwordRef,
      loginFormRef,
      ...toRefs(state),
      ...toRefs(methods)
    }
  }
})
</script>
 