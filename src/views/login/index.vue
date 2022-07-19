<!--
/*
 * @Author: zhanghongqiao 
 * @Date: 2022-07-18 09:31:33 
 * @Email: 991034150@qq.com 
 * @Description: Description
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-07-19 17:57:05
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
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          系统登录
        </h3> 
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user" /> 
        </span>
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
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-lock" />
          </span>
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
        style="width:100%; margin-bottom:30px;" >登录  </el-button>   
    </el-form> 
   </div>
 </template>
 
 
<script lang="ts">
import './index.scss'
import { defineComponent, reactive, ref, toRefs, nextTick } from 'vue'


export default defineComponent({
  setup() {
    const userNameRef = ref(null)
    const passwordRef = ref(null)
    const loginFormRef = ref(null)
    
    const state = reactive({
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: 'blur' }],
        password: [{ validator: passwordRef, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: '',
      otherQuery: {}
    })

    const methods = {
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
    }

    return {
      ...toRefs(state),
      ...toRefs(methods)
    }
  }
})
</script>
 