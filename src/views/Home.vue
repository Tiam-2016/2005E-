<template>
  <div class="home">
    <my-header class="home_header">
      <span>用户登录</span>
      <span class="change_theme" @click="changeColor" >切换主题</span>
    </my-header>
    <form>
      <div>
        <label>手机号码</label>:<my-input class="my_input" v-model="tel"></my-input><i class="iconfont" :class="iconTel"></i>
      </div>
      
      <div>
        <label>密码</label>:<my-input class="my_input" v-model="pwd"></my-input><i class="iconfont" :class="iconPwd"></i>
      </div>
    </form>
    
    <button :disabled="disabled" v-back="$store.state.backColor" class="btn" @click="login">登录</button>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader/myHeader'
import myInput from '@/components/myInput/myInput'
import { mapState, mapMutations } from 'vuex'
// 手机号码验证正则表达式
const regTel = /^1[3|5|6|7|8|9]\d{9}$/ 
// 密码正则表达式
const regPwd = /^[a-zA-Z][0-9a-zA-Z]{5}$/
export default {
  name: 'Home',
  components: {
    myHeader,
    myInput
  },
  data() {
    return {
      iconTel: '',
      iconPwd: '',
      tel: '',
      pwd: '',
      disabled: true
    }
  },

  methods: {
    ...mapMutations([
      'changeColor'
    ]),

    login() {
      this.$router.push('/about')
    }
  },

  watch: {
    tel(to, from) {
      if(regTel.test(to)) {
        this.iconTel = 'icon017check03'
      } else {
        this.iconTel = 'icon018cross04'
      }

      if(regTel.test(to) && regPwd.test(this.pwd)) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },

    pwd(to, from) {
      if(regPwd.test(to)) {
        this.iconPwd = 'icon017check03'
      } else {
        this.iconPwd = 'icon018cross04'
      }

      if(regPwd.test(to) && regTel.test(this.tel)) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
  }
  .home_header {
    position: relative;
  }
  .home_header .change_theme {
    font-size: 14px;
    color: cornflowerblue;
    position: absolute;
    right: 10px;
    top: 0;
  }
  form {
    width: 80%;
    margin: 0 auto;
    margin-top: 150px;
  }
  form > div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  label {
    width: 60px;
    font-size: 14px;
    line-height: 40px;
    text-align-last:justify;
    text-align:justify;
    text-justify:distribute-all-lines; 
  }
  .my_input{
    width: 70%; 
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-left: 10px;
    padding-left: 10px;
  }
  .btn {
    width: 180px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 6px;
    margin-top: 20px;
  }
  .btn[disabled] {
    background-color: #ccc !important;
  }
  i{
    margin-left: 5px;
    width: 16px;
    height: 16px;
  }
  .icon018cross04 {
    color: red;
  }
  .icon017check03 {
    color: yellowgreen;
  }
</style>
