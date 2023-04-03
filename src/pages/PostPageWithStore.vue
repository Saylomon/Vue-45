<template>
  <div>
    <div>STORE</div>
    <div>Количество лайков: {{ $store.state.likes }}</div>
    <div>Количество лайков с геттером: {{ $store.getters.likesPlusString }}</div>
    <button @click="fetchPosts"> Show </button>
    <post-form
      @create="createPost"
      />
    <post-list 
      :posts="posts" 
      @remove="removePost"
    />
    <div v-if="this.posts.length === 0"> Здесь еще ничего нет </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex"
export default {
    mounted(){
      this.fetchPosts()
    },
    methods: {
        ...mapActions({
            fetchPosts: "fetchPosts"
        }),
        ...mapMutations({
            createPost: "createPost",
            removePost: "removePost"
        })
    },
    computed: {
        ...mapState({
            posts: state => state.posts
        })
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
div {
  margin: 10px;
  border: 2px;
  border-color: blue;
  text-align: left;
}
</style>