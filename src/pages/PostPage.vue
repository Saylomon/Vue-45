<template>
  <div>
    <div>Welcome</div>
    <div>Количество лайков: {{ $store.state.likes }}</div>
    <div>Количество лайков с геттером: {{ $store.getters.likesPlusString }}</div>

    <div><button @click="$store.commit('plusLikes')">Поставить лайк</button></div>
    <div><button @click="$store.commit('minusLikes')">Убрать лайк</button></div>

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
import axios from "axios"
export default {
  data() {
    return {
      posts: [],
      id: 0
    };
  },
  methods: {
    removePost(post){
      this.posts = this.posts.filter(i => i.id !== post.id)
    },
    async fetchPosts() {
      const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
      this.posts = responce.data
      this.id = this.posts.length
    },
    createPost(post){
      this.id++
      post.id = this.id
      this.posts.push(post)
    }
  },
  mounted(){
      this.fetchPosts()
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