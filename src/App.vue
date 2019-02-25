<template>
  <div id="app">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <TheHeader/>
      </md-app-toolbar>
      <md-app-content>
        <Blog/>
        <img src="./assets/logo.png">
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TheHeader from './components/TheHeader';
import Blog from './components/Blog';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    Blog,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
