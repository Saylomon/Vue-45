import { createStore } from 'vuex'
const Web3 = require('web3')
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/8H_rc42Uvn9GWrvP5qDSYZumgfFOGfdC')

export default createStore({
  state: {
    blocks: []
  },
  getters: {

  },
  mutations: {
    setBlock(state, newBlock){
      state.blocks.unshift(newBlock) 
    }
  },
  actions: {
    async newBlockHeaders({commit}){
      let subscribe = web3.eth.subscribe("newBlockHeaders")
      .on("data", block => {
        let newBlock = {
          number: block.number,
          hash: block.hash
        }
        commit("setBlock", newBlock)
      })
    },
    async getBlock({commit}, blockNumberOrHash){
      return await web3.eth.getBlock(blockNumberOrHash)
    },
    async getTransaction({commit}, txHash){
      return await web3.eth.getTransaction(txHash)
    }
  },
  modules: {

  }
})
