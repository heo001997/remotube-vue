<template>
  <el-row>
    <el-col :span="6"></el-col>
    <el-col :span="12" class="line">
      <span class="title">Share a Youtube movie</span>
      <div style="">
        <el-form @submit.prevent :inline="true" class="video-form-input">
          <el-form-item label="Youtube URL:" prop="video-url">
            <el-input @keyup.prevent.enter="submitVideo()" v-model="video.video_url" placeholder="Youtube video url"></el-input>
          </el-form-item>
          <div>
            <el-form-item>
              <el-button type="primary" @click="submitVideo()">Share</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {ElMessage} from "element-plus";
@Options({})
export default class VideoSubmitForm extends Vue {
  video = { video_url: '' };
  noVideo = { ...this.video };

  submitVideo(){
    const url = `${process.env.VUE_APP_HOST}/videos`;
    const data = this.video;
    const headers = {
      headers: {
        "Authorization": localStorage.access_token,
      },
    };
    this.axios.post(url, data, headers).then(res => {
      this.video = { ...this.noVideo };
      ElMessage({
        message: "Video Shared!",
        type: "success"
      })
    }).catch((_err) => {
      ElMessage({
        message: "Invalid username/password",
        type: "error"
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  border: 1px solid black;
  border-radius: 5px;
}
.title{
  float: left;
  margin-left: 10px;
}
.video-form-input{
  padding: 60px;
}
</style>
