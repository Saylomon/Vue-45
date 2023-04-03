<template>
    <div>
        <h3>Добавление поста</h3>
        <form @submit.prevent>
            <input v-focus type="text" v-model="post.title" placeholder="Тема поста">
            <input type="text" v-model="post.body" placeholder="Описание поста">
            <button @click="create"> Добавить пост </button>
        </form>
    </div>
</template>

<script>
export default{
    name: "post-form",
    data(){
        return{
            post:{
                title: '',
                body: ''
            }
        }
    },
    methods: {
        create(){
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    },
}
</script>


<style scoped>
button{
  margin: 1px;
  border: 2px solid darkblue;
  background-color: rgb(115, 166, 204);
}
input{
    margin: 10px;
    border: 2px solid blue;
    background: lightblue;
    border-radius: 5px;
}
</style>