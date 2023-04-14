import { createStore } from 'vuex'
const Web3 = require('web3')
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/8H_rc42Uvn9GWrvP5qDSYZumgfFOGfdC')
import { ABI } from '@/contracts/Example.abi.js'
import { bytecode } from '@/contracts/Example.bin.js'

export default createStore({
  state: {
    // blocks: []
    web3Wallet: {},
    wallet: {
      address: "",
      chain: "",
      chainId: ""
    },
    estemateGas: "",
    txHash: ""
  },
  getters: {

  },
  mutations: {
    // setBlock(state, newBlock) {
    //   state.blocks.unshift(newBlock)
    // }
  },
  actions: {
    // async newBlockHeaders({ commit }) {
    //   let subscribe = web3.eth.subscribe("newBlockHeaders")
    //     .on("data", block => {
    //       let newBlock = {
    //         number: block.number,
    //         hash: block.hash
    //       }
    //       commit("setBlock", newBlock)
    //     })
    // },
    async getBlock({ commit }, blockNumberOrHash) {
      return await web3.eth.getBlock(blockNumberOrHash)
    },
    async getTransaction({ commit }, txHash) {
      return await web3.eth.getTransaction(txHash)
    },
    async connectWallet({state}) {
      if (typeof window.ethereum !== 'undefined') {
        console.log("Ethereum client installed!")
        if (ethereum.isMetaMask === true) {
          console.log("Metamask installed!")
          if (ethereum.isConnected() !== true) {
            console.log("Metamask is not connected!")
            await ethereum.enable()
          }
          console.log("Metamask connected!")
        }
        else {
          alert("Metamask is not installed!")
        }
      }
      else {
        alert("Ethereum client is not installed!")
      }

      ethereum.request({ method: "eth_requestAccounts" })
      .then(accounts => {
        state.wallet.address = accounts[0]
        console.log(`Account ${state.wallet.address} connected`)
      })

      state.web3Wallet = new Web3(ethereum)

      state.wallet.chain = await state.web3Wallet.eth.net.getNetworkType()
      state.wallet.chainId = await state.web3Wallet.eth.net.getId()

      ethereum.on('accountsChanged', async (accounts) => {
        state.wallet.address = accounts[0]
        console.log(`Account ${state.wallet.address} connected`)
      })


      ethereum.on('chainChanged', async (accounts) => {
        state.web3Wallet = new Web3(ethereum)
        state.wallet.chain = await state.web3Wallet.eth.net.getNetworkType()
        state.wallet.chainId = await state.web3Wallet.eth.net.getId()
      })
    },



    async estimateGasForTx({state}, to){
      state.estimateGas = await state.web3Wallet.eth.estimateGas({
        to: to
      })
    },



    async sendTransaction({state}, [to, value]){
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: state.wallet.address,
          to: to,
          gas: web3.utils.numberToHex(state.estimateGas),
          value: state.web3Wallet.utils.numberToHex(value)
          // state.web3Wallet.utils.numberToHex(state.estimateGas)
        }]
      }).then(hash => {
        console.log(`Tx hash ${hash}`)
        })
    },



    async deployContract({state}){

      let myContract = new state.web3Wallet.eth.Contract(ABI)

      let deployCode = myContract.deploy({
        data: bytecode
      }).encodeABI()
      await ethereum.request({

        method: "eth_sendTransaction",

        params: [{
          from: state.wallet.address,
          data: deployCode
        }]
      })
      .then(hash => {
        console.log(`TX hash ${hash}`)
        })
    },



    async setNumber({state}, args){
      const [contractAddress, number] = args

      let myContract = new state.web3Wallet.eth.Contract(ABI, contractAddress)

      let txData = myContract.methods.setNumber(number).encodeABI()

      state.txHash = ethereum.request({
        method: "eth_sendTransaction",
        params: [{
        from: state.wallet.address,
        to: contractAddress,
        data: txData
        }]
      })
      console.log("TX hash Huuinya:" +  await state.txHash)
      return await state.txHash
    },



    async getNumber({state}, contractAddress){

      let myContract = new state.web3Wallet.eth.Contract(ABI, contractAddress)

      let number = await myContract.methods.number().call({from: state.wallet.address})
      return number
    },


    async getStatus({state}, hash){
      console.log(hash)
      state.web3Wallet = new Web3(ethereum)
      console.log(state.web3Wallet)
      let status 
      await state.web3Wallet.eth.getTransactionReceipt(hash, (error, result) => {
        if(error) {console.log("error: " + error)}
        else (status = result.status)
      })

      return status
    }
  },
  modules: {

  }
})
