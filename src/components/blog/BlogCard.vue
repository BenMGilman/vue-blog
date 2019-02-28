<template>
  <md-card>
    <md-card-media>
      <img :src="blog.thumb" alt="thumbnail"/>
    </md-card-media>
    <md-card-header>
      <div class="md-subhead">{{formattedDate}}</div>
      <div class="md-title">{{blog.title}}</div>
    </md-card-header>
    <md-card-content>
      <p v-text="blog.excerpt"></p>
    </md-card-content>
    <md-card-actions class="md-layout">
      <md-button class="md-layout-item md-size-100">Read More</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return this.blog.dateFormat.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
  $blog-title-height: 160px;
  $blog-content-height: 145px;
  .md-card {
    margin: 8px;
  }
  .md-card-header {
    height: $blog-title-height;
    min-height: $blog-title-height;
    padding-top: 16px;
  }
  .md-card-content {
    height: $blog-content-height;
    max-height: $blog-content-height;
    line-height: 20px;
    overflow: hidden;
    > p {
      margin: 0;
    }
  }
</style>
