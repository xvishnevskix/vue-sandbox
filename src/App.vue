<template>
<div>
  <div class="post" v-for="post in posts">
    <div><strong>Название:</strong> {{posts.title}}</div>
    <div><strong>Описание:</strong> {{posts.body}}</div>
  </div>
</div>
</template>


<script>
  export default {
    data() {
      return {
        posts: [
          {id: 1, title: 'JavaScript', body: 'Описание поста'},
          {id: 2, title: 'JavaScript', body: 'Описание поста 2'},
          {id: 3, title: 'JavaScript', body: 'Описание поста 3'},
        ]
      }
    },
    methods: {
      addLike() {
        this.likes += 1;
      },
      addDislikes() {
        this.dislikes += 1;
      }
    }
  }
</script>

<style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .post {
      margin: 15px;
      padding: 15px;
      border: 2px solid teal;
    }
</style>

