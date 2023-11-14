<template>
  <div v-show="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item @delete="$emit('delete', post.id)" v-for="post in posts" :key="post.id" :post="post"/>
    </transition-group>
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
.post-list-move {
  transition: all 0.5s ease;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>