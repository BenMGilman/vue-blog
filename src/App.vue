<template>
  <div id="app">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <TheHeader/>
      </md-app-toolbar>
      <md-app-content>
        <Blog/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import Blog from './components/blog/Blog';

export default {
  name: 'App',
  components: {
    TheHeader,
    Blog,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.87);
}
.md-app {
  position: absolute;
  max-height: 100%;
  width: 100%;
}
.md-button-content {
  font-weight: bold;
}
.md-app-content {
  padding: 0;
  > .md-layout {
    padding: 16px;
    background-image: url("assets/background.jpg");
    background-repeat: repeat;
  }
}
</style>
