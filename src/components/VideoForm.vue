<template>
  <el-col :span="8">
    <div class="iframe-container">
      <iframe class="responsive-iframe" :src="this.videoEmbedLink()" allowfullscreen
        allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </div>
  </el-col>
  <el-col :span="7" class="video-overview">
    <el-col>
      <div class="video-title" v-html="this.video.title"></div>
      <div class="video-medium-text" v-html="this.videoSharedBy()"></div>
      <span class="video-medium-text" v-html="this.video.view_count"></span><el-icon><View/></el-icon>
      &nbsp&nbsp
      <span class="video-medium-text" v-html="this.video.like_count"></span><el-icon><ArrowUpBold/></el-icon>
      <div class="video-medium-text">Description:</div>
      <div class="video-description" v-html="this.videoDescription()"></div>
    </el-col>
  </el-col>

<!--  <el-col :span="8">-->
<!--    <div class="iframe-container">-->
<!--      <iframe class="responsive-iframe"-->
<!--              src="https://www.youtube.com/embed/Q0IGW8PZEks" allowfullscreen-->
<!--              allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture">-->
<!--      </iframe>-->
<!--    </div>-->
<!--  </el-col>-->
<!--  <el-col :span="7" class="video-overview">-->
<!--    <el-col>-->
<!--      <div class="video-title">ABC</div>-->
<!--      <div class="video-medium-text">Shared by: someone@gmail.com</div>-->
<!--      <span class="video-medium-text">42</span><el-icon><View/></el-icon>-->
<!--      &nbsp&nbsp-->
<!--      <span class="video-medium-text">98</span><el-icon><ArrowUpBold/></el-icon>-->
<!--      <div class="video-medium-text">Description:</div>-->
<!--      <div class="video-description">-->
<!--        lorem ipsum dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet-->
<!--        lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet-->
<!--        lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet-->
<!--        lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet-->
<!--      </div>-->
<!--    </el-col>-->
<!--  </el-col>-->
</template>

<script lang="ts">
import {Options, prop, Vue} from 'vue-class-component';

export class Props {
  video = prop<{
    title: String,
    description: String,
    video_url: String,
    video_id: String,
    like_count: Number,
    view_count: Number,
    user: {
      type: any,
      required: true,
      email: { type: string, required: true }
    }
  }>({ required: true });
}

@Options({})
export default class VideoList extends Vue.with(Props) {
  videoEmbedLink(){
    return `https://www.youtube.com/embed/${this.video.video_id}`
  }

  videoSharedBy(){
    return `Shared by: ${this.video.user.email}`
  }

  videoDescription(){
    return `${(this.video.description as string).substring(0, 200)}...`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-overview {
  text-align: left;
  margin-left: 20px;
}
.video-title {
  color: #c70b0b;
  font-size: 1.5rem;
}
.video-medium-text {
  font-size: 1.1rem;
}
.video-description {
}
.iframe-container {
  float: right;
  position: relative;
  width: 75%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70%;
}
</style>
