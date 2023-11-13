<template>
  <div v-show="posts.length > 0">
    <h3>Список постов</h3>
    <post-item @delete="$emit('delete', post.id)" v-for="post in posts" :key="post.id" :post="post"/>
  </div>
  <h2 v-show="posts.length === 0">Cписок пользователей пуст</h2>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      // Здесь данные компонента
    };
  },
  methods: {
    // Здесь методы компонента
  },
};
</script>

<style>


</style>