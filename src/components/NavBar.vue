<template>
  <el-container>
    <el-col :span="8" class="logo-text">
      <router-link style="color: #2c3e50;" class="link-button" to="/">
        <el-icon><HomeFilled /></el-icon>
        <span>Funny Movies</span>
      </router-link>
    </el-col>
    <el-col v-if="!user.isAuthenticated" :span="16">
      <el-row :gutter="20">
        <el-col :span="4"></el-col>
        <el-col :span="6">
          <el-input placeholder="Username" v-model="user.email"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="Password" v-model="user.password" @keyup.prevent.enter="loginOrRegister()"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button @click="loginOrRegister()">Login/Register</el-button>
        </el-col>
      </el-row>
    </el-col>
    <el-col v-if="user.isAuthenticated" :span="16">
      <el-row :gutter="20">
        <el-col :span="6"></el-col>
        <el-col :span="6">
          <span v-html="displayWelcome()"></span>
        </el-col>
        <el-col :span="6">
          <router-link class="link-button" to="/video-submit">
            <el-button type="primary" v-html="'Share a movie'" ></el-button>
          </router-link>
        </el-col>
        <el-col :span="2">
          <el-button @click="logout()">Logout</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-container>
  <hr style="margin-bottom: 20px;">
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {ElMessage} from "element-plus";
import _ from 'lodash';
@Options({})
export default class NavBar extends Vue {
  user = { email: '', password: '', isAuthenticated: false };
  noUser = { ...this.user };

  beforeMount() {
    this.isAuthenticated();
  }

  displayWelcome(){
    return `Welcome ${this.user.email}`;
  }

  isAuthenticated() {
    if (!localStorage.access_token) return;

    const url = `${process.env.VUE_APP_HOST}/users/me`;
    const headers = {
      headers: {
        "Authorization": localStorage.access_token,
      },
    };
    this.axios.get(url, headers).then(res => {
      this.user = {...this.user, ...res.data.records};
      this.user.isAuthenticated = true;
    }).catch((_err) => {
      localStorage.removeItem('access_token');
      ElMessage({
        message: "Token expired, please login",
        type: "error"
      })
    })
  };

  logout() {
    const url = `${process.env.VUE_APP_HOST}/users/logout`;
    const headers = {
      headers: {
        "Authorization": localStorage.access_token,
      },
    };
    this.axios.post(url, {}, headers).then(_res => {
      this.user = {...this.noUser};
      localStorage.removeItem('access_token');
      this.$router.push('/');
    }).catch((_err) => {
      ElMessage({
        message: "Unexpected logout error",
        type: "error"
      })
    })
  }

  loginOrRegister() {
    const url = `${process.env.VUE_APP_HOST}/users`;
    const data = {
      "email": this.user.email,
      "password": this.user.password,
    };
    this.axios.post(url, data).then(res => {
      this.user = res.data.records;
      localStorage.setItem('access_token', res.data.records.access_token);
      location.reload();
    }).catch((_err) => {
      ElMessage({
        message: "Invalid username/password",
        type: "error"
      })
    })
  };
}
</script>

<style  scoped>
.logo-text {
  font-size: 40px;
  position: relative;
  top: -25px;
  color: black;
}
.link-button {
  text-decoration: none;
}
</style>
