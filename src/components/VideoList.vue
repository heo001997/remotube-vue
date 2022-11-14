<template>
  <el-container v-for="video in videos">
    <el-col>
      <div class="video-form-container">
        <video-form v-bind:video="video"></video-form>
      </div>
    </el-col>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
import VideoForm from "@/components/VideoForm.vue";
import axios from 'axios';
import {ElMessage} from "element-plus";

export class Props {
  videos = prop<Array<any>>({ required: true });
}

@Options({
  components: {
    VideoForm
  },
})
export default class VideoList extends Vue.with(Props) {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-form-container {
  display: inline-flex;
  margin-left: 20%;
}
</style>
