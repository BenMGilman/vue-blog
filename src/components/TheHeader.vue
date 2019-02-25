<template>
  <div id="header">
    <h2 class="md-title">Insights</h2>
    <md-button class="md-raised logo" aria-label="Yankees">
      Yankees
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
  #header {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    text-align: left;
    > h2 {
      flex: 1;
    }
  }
</style>
