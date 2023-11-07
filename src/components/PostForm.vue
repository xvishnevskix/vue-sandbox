<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input @input="title = $event.target.value" v-bind:value="title" class="input"  type="text" placeholder="название">
    <input @input="body = $event.target.value" v-bind:value="body" class="input" type="text" placeholder="описание">
    <button class="btn" @click="">Создать</button>
  </form>
</template>

<script>
export default {
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
form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 15px 20px;
  color: teal;
  border: 1px solid teal;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>