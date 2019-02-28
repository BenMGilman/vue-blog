<template>
  <div class="md-layout blog-select">
    <!--div layout="row">
      <div flex-gt-md="80" flex-md="90" flex="100" flex-offset-gt-md="10" flex-offset-md="5">
        <div layout="row" layout-align="space-between none" layout-wrap>
          <md-button ng-repeat="cat in vm.categories" ng-click="vm.selectCategory(cat)" ng-class="{'md-raised md-primary' : vm.selectedCategory === cat}">
            {{::cat.title}}
          </md-button>
        </div>
        <div layout="row">
          <md-input-container md-no-float flex="80">
            <input ng-model="search" placeholder="Search Insights">
            <md-icon md-svg-src="images/icons/search.svg"></md-icon>
          </md-input-container>
          <md-input-container md-no-float flex="20">
            <md-select ng-model="vm.sortBy" placeholder="Sort By" md-on-close="vm.getBlogs()">
              <md-option ng-repeat="opt in vm.sortByOpts" value="{{::opt.value}}">{{::opt.title}}</md-option>
            </md-select>
          </md-input-container>
        </div>
      </div>
    </div-->
    <div class="md-layout md-layout-item" layout="row">
      <div
        v-for="blog in blogs"
        v-bind:key="blog.ID"
        class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-100"
      >
        <BlogCard v-bind:blog="blog"/>
      </div>
    </div>
  </div>
</template>

<script>
import { query } from '../../services/blogs';
import BlogCard from './BlogCard';

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    query().then((resp) => { this.blogs = resp; });
  },
};
</script>
