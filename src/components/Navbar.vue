<template>
    <div>
        <div><button @click="$router.push('/')">Главная страница</button></div>
        <div><button @click="$router.push('/posts')">Посты</button></div>
        <div><button @click="$router.push('/postsStore')">Посты со стора</button></div>
    </div>
</template>

<script>
export default {
    name: "navbar"
}
</script>


<style scoped>
button{
    padding: 7px;
    margin: 5px;
    margin-top: 2px;
    border: 2px solid darkgreen;
    margin-bottom: 1px;

}
</style>