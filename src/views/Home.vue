<template>
  <video-list v-bind:videos="videos"></video-list>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import VideoList from '@/components/VideoList.vue';
import {ElMessage} from "element-plus";
@Options({
  components: {
    VideoList
  }
})
export default class Home extends Vue {
  params = { page: 1, per_page: 10 }
  videos = [];

  mounted() {
    this.videoList();
  }

  videoList() {
    const url = `http://localhost:3000/videos`;
    this.axios.get(url,{ params: this.params }).then(res => {
      this.videos = this.videos.concat(res.data.records);
    }).catch((_err) => {
      ElMessage({
        message: "Unexpected error when loading videos",
        type: "error"
      })
    })
  };
}
</script>

<style>
</style>
