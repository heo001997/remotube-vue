<template>
  <el-container>
    <el-main>
      <nav-bar></nav-bar>
      <video-list></video-list>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import VideoList from './components/VideoList.vue';
import NavBar from "@/components/NavBar.vue";

@Options({
  components: {
    NavBar,
    VideoList
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
