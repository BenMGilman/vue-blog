<template>
  <div>TEST</div>
</template>

<script>
import { query } from '../services/blogs';

export default {
  mounted: () => {
    query();
  },
};
</script>
