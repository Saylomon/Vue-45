<template>
    <div>
        <div><strong>Тема:</strong> {{ post.title }} </div>
        <div><strong>Описание:</strong> {{ post.body }} </div>
        <div><strong>ID:</strong> {{ post.id }} </div>.
        <button @click="$router.push(`/posts/${post.id}`)">Открыть пост</button>
        <button @click="$emit('remove', post)"> DELETE </button>
    </div>
</template>

<script>
export default{
    name: "post-item",
    props:{
        post:{
            type: Object,
            reqired: true
        }
    }
}
</script>

<style scoped>
button{
  margin: 10px;
  border-width: 2px;
  border-color: black;
  text-align: right;
  background-color: rgb(211, 62, 62);
}
</style>