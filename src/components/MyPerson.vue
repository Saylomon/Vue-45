<template>
  <div> 
    <input v-model="Person.Name" placeholder="Name" type="text"/> <br>

    <input v-model="Person.Surname" placeholder="Surname" type="text"/> <br>

    <input v-model="Person.Age" placeholder="Age" type="number"/> <br>

    <input v-model="Person.Country" placeholder="Country" type="text"/> <br>

    <input v-model="Person.Phone" placeholder="Phone" type="number"/> <br>

    <button @click="inputPerson">OK </button> <br>
  </div>
</template>

<script>
export default{
    data(){
        return{
            Person:{
              Name: "",
              Surname: "",
              Age: "",
              Country: "",
              Phone: ""
            } 
        }
    },
    methods:{
      inputPerson(){
        this.$emit("newPerson", this.Person)
        this.Person={
              Name: "",
              Surname: "",
              Age: "",
              Country: "",
              Phone: ""
            } 
      }
    },
    name: "MyPerson"
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, 'Times New Roman', Times, serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#button{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #09a01d;
  background-color: #09a01d;
}
input {
 padding: 10px; 
 margin: 10px;
 border: 2px;
 border-radius: 10px;
 border-block-color: yellow;
 background-color: #5f3b7b;
 border-color: #280a32;
 border-collapse: red;
}
</style>