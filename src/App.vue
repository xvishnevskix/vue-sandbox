<template>
<div class="app">
  <h1>Страница с постами</h1>
  <my-input placeholder="Поиск..." v-model="searchQuery"/>
  <div class="app__btns">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
  </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form  @create="createPost"/>
  </my-dialog>
  <post-list @delete="deletePost" :posts="sortedAndSearchedPosts" v-if="isPostsLoading !== true"/>
  <div v-else>Идёт загрузка...</div>
  <div ref="observer" class="observer"></div>
<!--  <my-pagination @changePage="onChangePage" :page="page" :totalPages="totalPages"></my-pagination>-->
</div>
</template>


<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from '@/components/UI/MyDialog'
import MyButton from '@/components/UI/MyButton'
import axios from 'axios'
import MySelect from '@/components/UI/MySelect'
import MyInput from '@/components/UI/MyInput'
import MyPagination from '@/components/UI/Pagination'

  export default {
    components: {
      MyPagination,
      MyInput,
      MyButton,
      MyDialog,
      PostList,
      PostForm,
      MySelect,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ],
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
      }
    },
    methods: {
      createPost(post) {
          this.posts.push(post)
          this.dialogVisible = false
      },
      deletePost(id) {
        this.posts = this.posts.filter((prop) => {
        return prop.id !== id
        })
      },
      showDialog() {
        this.dialogVisible = true
      },
      // onChangePage(numberPage) {
      //   this.page = numberPage
      //   this.fetchPosts()
      // },
      async fetchPosts() {
        try {
          this.isPostsLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data
        } catch (e) {
          alert('Ошибка')
        } finally {
          this.isPostsLoading = false
        }
      },
      async loadMorePosts() {
        try {
          this.isPostsLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data]
        } catch (e) {
          alert('Ошибка')
        } finally {
          this.isPostsLoading = false
        }
      }
    },
    mounted() {
        this.fetchPosts();


      var options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
      var callback = function (entries, observer) {
        /* Content excerpted, show below */
      };
      var observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
    },
    computed: {
      sortedPosts() {
      return [...this.posts].sort((post1,post2) =>
           post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        )
      },
      sortedAndSearchedPosts() {
        return [...this.sortedPosts].filter(post => post.title.includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
      // page() {
      //   this.fetchPosts()
      // }
    }
  }
</script>

<style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .app {
      padding: 20px;
    }
    .app__btns {
      margin: 15px 0;
      display: flex;
      justify-content: space-between;
    }
    .observer {
      height: 30px;
      background: green;
    }

</style>

