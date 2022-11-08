<template>
<!--  <el-container v-for="">-->
<!--    -->
<!--  </el-container>-->
  <el-container>
    <el-main :span="12">
    </el-main>
    <el-main :span="12">
    </el-main>
    <el-main :span="12">
      <div>
        <video muted autopictureinpicture controls poster="https://i.stack.imgur.com/O9qG3.jpg?s=256&g=1" height="300">
          <source src="https://ipfs.io/ipfs/QmbGtJg23skhvFmu9mJiePVByhfzu5rwo74MEkVDYAmF5T" type="video/webm">
        </video>
      </div>
    </el-main>
    <el-main :span="12">
      <el-col style="text-align: left;width: 100%;max-width: 50vw">
        <div class="title-video">ABC</div>
        <div class="author-share">Shared by: someone@gmail.com</div>
        <div class="descriptions-share">description:</div>
        <div class="descriptions">
          lorem ipsum dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
          lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
        </div>
      </el-col>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({})
export default class VideoList extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
