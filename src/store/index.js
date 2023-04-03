import { createStore } from "vuex"
import axios from "axios"

export default createStore({
    state:{
        likes: 0,
        posts: [],
        id: 0
    },
    getters:{
        likesPlusString(state){
            return state.likes + " likes"
        }
    },
    mutations:{
        plusLikes(state){
            state.likes += 1
        },
        minusLikes(state){
            state.likes -= 1
        },
        setPosts(state, newPosts){
            state.posts = newPosts
            state.id = state.posts.length
        },
        createPost(state, post){
            state.id++
            post.id = state.id
            state.posts.push(post)
        },
        removePost(state, post){
            state.posts = state.posts.filter(i => i.id !== post.id)
        },
    },
    actions:{
        async fetchPosts({commit}){
            const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
            commit("setPosts", responce.data)
        }
    }
})