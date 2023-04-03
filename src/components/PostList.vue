<template>
    <div>
        <h2>Список постов</h2>
        <div>
            <post-item
                v-for:="post in posts"
                :post="post"
                 @remove="$emit('remove', post)"
            />
        </div>
    </div>
</template>

<script>
export default{
    name: "post-list",
    props:{
        posts:{
            type: Array,
            required: true
        }
    }
}
</script>


<style>
div {
  margin: 10px;
  border: 2px;
  border-color: blue;
  text-align: left;
} 
</style>