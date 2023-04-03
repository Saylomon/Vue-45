<template>
  <div>
    <button @click="GetBlockNumber"> Получить номер блока</button>
    <button @click="getBlock"> Получить Хэш блока</button>
    <h1>Номер Блока: {{ blockNumber }}</h1>
    <h1>Хэш Блока: {{ block.hash }}</h1>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
const Web3 = require('web3')
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/8H_rc42Uvn9GWrvP5qDSYZumgfFOGfdC')
export default{
  data(){
    return{
      blockNumber: "",
      block: {}
    }
  },
  methods: {
    async GetBlockNumber(){
      this.blockNumber = await web3.eth.getBlockNumber()
    },
    async getBlock(){
      this.block = await web3.eth.getBlock("latest", true)
      console.log("QQ")
    }
  },
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