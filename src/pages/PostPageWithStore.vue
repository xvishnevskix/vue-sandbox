
<template>
  <div class="app">
    <h1>{{ $store.state.likes }}</h1>
    <h1>Страница с постами</h1>
    <my-input v-focus placeholder="Поиск..." :model-value="searchQuery" @update:model-value="setSearchQuery"/>
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible" >
      <post-form  @create="createPost"/>
    </my-dialog>
    <post-list @delete="deletePost" :posts="sortedAndSearchedPosts" v-if="isPostsLoading !== true"/>
    <div v-else>Идёт загрузка...</div>
    <div v-intersection="loadMorePosts" ref="observer" class="observer"></div>
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
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

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
      dialogVisible: false,
    }
  },

  methods: {
    ...mapMutations({
        setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',


    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),

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
  },



  mounted() {
    this.fetchPosts();
    //life cycle method
  },


  computed: {
      ...mapState({
        posts: 'post/posts',
        isPostsLoading: state => state.post.posts,
        selectedSort: state => state.post.selectedSort,
        sortOptions: state => state.post.sortOptions,
        searchQuery: state => state.post.searchQuery,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
      }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 30px;
}

</style>

