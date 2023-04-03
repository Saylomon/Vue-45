<template>
    <div>
        <h1> Это страница с ID: {{ $route.params.id }} </h1>
        <post-item 
            :post="$store.state.posts[$route.params.id - 1]"
        />
        <!-- <post-list 
            :posts="posts" 
             @remove="removePost"
        /> -->
    </div>
</template>


<script>
import {mapMutations} from 'vuex'
export default{
    name: "postIdPage",
    methods:{
        ...mapMutations({
            removePost: "removePost"
        })
    },
    handler(){
        this.removePost()
    }
}
</script>


<style>

</style>