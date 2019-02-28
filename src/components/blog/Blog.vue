<template>
  <div class="md-layout blog-select">
    <div class="md-layout md-layout-item md-size-100">
      <div class="md-layout-item md-size-10 md-medium-size-5 md-xsmall-hide"/>
      <div class="md-layout-item md-size-80 md-medium-size-90 md-xsmall-size-100">
        <div class="md-layout md-alignment-center-space-between">
          <md-button
            v-for="cat in categories"
            :key="cat.value"
            v-on:click="selectedCategory = cat.value"
            :class="{'md-raised md-primary' : selectedCategory === cat.value}"
          >
            {{cat.title}}
          </md-button>
        </div>
        <div class="md-layout search">
          <md-field class="md-layout-item md-size-80 search-input">
            <md-icon :md-src="searchIcon" />
            <md-input v-model="search" placeholder="Search Insights"/>
          </md-field>
          <md-field class="md-layout-item md-size-20">
            <md-select v-model="sortBy" placeholder="Sort By">
              <md-option
                v-for="opt in sortByOpts"
                :key="opt.value"
                :value="opt.value"
              >
                {{opt.title}}
              </md-option>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>
    <div class="md-layout md-layout-item md-size-100">
      <div
        v-for="blog in filteredBlogs"
        :key="blog.ID"
        class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-100"
      >
        <BlogCard :blog="blog"/>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from '../../assets/search.svg';
import { query } from '../../services/blogs';
import BlogCard from './BlogCard';

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      allBlogs: [],
      filteredBlogs: [],
      selectedCategory: 'credera-site',
      sortBy: null,
      search: null,
      searchIcon,
      categories: [
        { value: 'credera-site', title: 'All' },
        { value: 'management-consulting', title: 'Management Consulting' },
        { value: 'technology-solutions', title: 'Technology Solutions' },
        { value: 'ux', title: 'User Experience' },
        { value: 'news', title: 'News & Events' },
      ],
      sortByOpts: [
        { value: 'author', title: 'Author' },
        { value: 'date', title: 'Date' },
        { value: 'title', title: 'Title' },
      ],
    };
  },
  mounted() {
    this.getBlogs();
  },
  watch: {
    search(newValue) {
      const searchVal = newValue.toUpperCase();
      this.filteredBlogs = this.allBlogs.filter(blog =>
        blog.title.toUpperCase().includes(searchVal) || blog.excerpt.toUpperCase().includes(searchVal)); // eslint-disable-line
    },
    sortBy() {
      this.getBlogs();
    },
    selectedCategory() {
      this.getBlogs();
    },
  },
  methods: {
    getBlogs() {
      return query(this.sortBy, this.selectedCategory).then((resp) => {
        this.allBlogs = resp;
        this.filteredBlogs = [...resp];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  .md-icon:after {
    content: none;
  }
  .md-input {
    margin-right: 20px;
  }
  &.md-field:after, &.md-field:before {
    right: 20px;
  }
}
</style>
