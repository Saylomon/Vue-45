<template>
    <div>
        <h1> PERSON'S DESCRIPTIONS </h1>

        <div> 
            <p> Name: {{Person.Name}} </p>
            <p> Surname: {{Person.Surname}} </p>
            <p> Age: {{Person.Age}} </p>
            <p> Country: {{Person.Country}} </p>
            <p> Phone: {{Person.Phone}} </p>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        Person:{
            type: Object,
            required: true
        }
    },
    name: "MyP"
}
</script>

<style>
#MyP{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1{
    background-color: rgb(97, 51, 139);
    border: 3px;
    border-radius: 30px;
    border-right-width: 10px;
}
p{
    background-color: #9d69a3;
    border-radius: 10px;
    text-align: center;
}
button{
    background-color: green;
    border-radius: 10px;
}
</style>
