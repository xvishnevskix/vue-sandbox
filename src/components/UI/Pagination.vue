<template>
  <div class="page__wrapper">
    <div @click="onChangePage(pageNumber)" :class="{'current-page' : page === pageNumber}" class="page" v-for="pageNumber in totalPages" :key="page">
      {{pageNumber}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    }
  },
  methods: {
    onChangePage(pageNumber) {
     this.$emit('changePage', pageNumber)
    }
  }
}
</script>

<style scoped>
  .page__wrapper {
    display: flex;
    margin-top: 15px;
  }
  .page {
    border: 1px solid black;
    padding: 10px;
  }
  .current-page {
    border: 3px solid teal;
  }
</style>