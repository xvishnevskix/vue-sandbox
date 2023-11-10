<template>
  <div class="post" >
    <div>
      <div><strong>Название:</strong> {{post.title}}</div>
      <div><strong>Описание:</strong> {{post.body}}</div>
    </div>
    <div class="post__btns">
      <my-button>Удалить</my-button>
    </div>

  </div>
</template>

<script>


import MyButton from '@/components/UI/MyButton'
export default {
  components: {MyButton},
  props: {
    post: {
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
.post {
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  padding: 15px;
  border: 3px solid teal;
}
</style>