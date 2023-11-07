<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'my-button',
  props: {

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
.btn {
  align-self: flex-end;
  padding: 15px 20px;
  color: teal;
  border: 1px solid teal;
  background: #fdfdfd;
}
</style>