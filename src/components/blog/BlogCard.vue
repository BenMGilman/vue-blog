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
