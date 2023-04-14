<template>
    <div>
        <block 
            v-for:='block in $store.state.blocks'
            :block="block"
        />
        <div class="block_info">
            <div> Адрес аккаунта: {{ $store.state.wallet.address }} </div>
            <div> Сеть аккаунта: {{ $store.state.wallet.chain }} </div>
            <div> ID аккаунта: {{ $store.state.wallet.chainId }} </div>
            <button @click="connectWallet"> Подключить Metamask </button>
        </div>
        <div>
            <div class="block_info">
            <input v-model="to" placeholder="Введите адрес получателя" type="text">
            <input v-model="value" placeholder="Введите сумму" type="text">
            <button @click="send"> Отправить </button>
            </div>
        </div>
        <div>
            <button @click="deploy"> Задеплоить контракт </button>
        </div>
        <div class="block_info">
            <div><input v-model="cAddress" placeholder="Введите адрес контракта" type="text"></div>
            <input v-model="number" placeholder="Введите число" type="text">
            <button @click="sNumber"> Отправить </button>
            <h3 class="block_info"> TX Hash: <router-link :to="`/transaction/${setNumberHash}`"> {{ setNumberHash }} </router-link> </h3>
        </div>
        <div class="block_info">
            <button @click="gNumber"> Получить число</button>
            <h3 class="block_info"> Полученное число = {{returnValue}} </h3>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "HomePage",
    data(){
        return{
            to: "",
            value: "",
            cAddress: "",
            number: "",
            returnValue: "",
            setNumberHash: ""
        }
    },
    methods: {
        ...mapActions({
            newBlockHeaders: "newBlockHeaders",
            connectWallet: "connectWallet",
            estimateGasForTx: "estimateGasForTx",
            sendTransaction: "sendTransaction",
            deployContract: "deployContract",
            setNumber: "setNumber",
            getNumber: "getNumber"
        }),
        async send(){
           await this.sendTransaction([this.to,this.value])
           this.to = ""
           this.value = ""
        },
        async deploy(){
            await this.deployContract()
        },
        async sNumber(){
            this.setNumberHash = await this.setNumber([this.cAddress,this.number])
        },
        async gNumber(){
            this.returnValue = await this.getNumber(this.cAddress)
        },
    },
    // async mounted() {
    //     this.newBlockHeaders()
    // },
}
</script>


<style>
.info{
    border: 2px solid purple;
    padding: 1px 3px;
}
button{
    padding: 7px;
    margin: 5px;
    margin-top: 2px;
    border: 2px solid purple;
    margin-bottom: 1px;
    color: purple;
}
.block_info{
    border: 2px solid purple;
    margin: 5px;
    padding: 15px; 
    font-family: 'Times New Roman', Times, serif;
    margin-top: 50px;
}
input{
    border: 2px solid purple;
    margin: 5px;
    padding: 7px;
}
</style>