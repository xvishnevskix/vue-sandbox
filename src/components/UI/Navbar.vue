<template>
    <nav class="navbar">
      <h1 @click="$router.push('/')">Vue 3</h1>
      <div class="navbar__btns">
        <my-button @click="$router.push('/posts')">Посты</my-button>
        <my-button @click="$router.push('/store')" style="margin-left: 20px">Посты со стором</my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 20px">О приложении</my-button>

      </div>
    </nav>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
export default {
  name: 'navbar',
  components: {MyButton}

}
</script>

<style scoped>
  .navbar {
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .navbar__btns {
    margin-left: auto;
  }
</style>