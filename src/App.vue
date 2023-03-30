<template>
  <div>
    <MyP :Person="Person" />
    <MyPerson @newPerson="updatePerson"/>
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
    methods: {
      updatePerson(eventData){
        this.Person = eventData
      }
    }
}
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#MyP{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #09a01d;
  background-color: #09a01d;
}
</style>