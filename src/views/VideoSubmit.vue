<template>
  <video-submit-form></video-submit-form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import VideoSubmitForm from "@/components/VideoSubmitForm.vue";

@Options({
  components: {
    VideoSubmitForm,
  },
})
export default class VideoSubmit extends Vue {}
</script>

<style>
</style>
