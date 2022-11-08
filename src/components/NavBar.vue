<template>
  <el-container>
      <el-col :span="8">
        <div class="logo-text">Funny Movies</div>
      </el-col>
    <el-col :span="3">
    </el-col>
      <el-col :span="3">
        <el-input placeholder="Email" v-model="input"></el-input>
      </el-col>
    <el-col :span="1">
    </el-col>
      <el-col :span="3">
        <el-input placeholder="PassWord" v-model="input"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button>Login/Register</el-button>
      </el-col>
  </el-container>
  <hr>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({})
export default class NavBar extends Vue {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style  scoped>
.logo-text {
  font-size: 50px;
  color: black;
  position: relative;
  top: -25px;
}
</style>
