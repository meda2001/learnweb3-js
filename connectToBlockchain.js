const {Web3} = require('web3');

async function connect(){
    const myProvider= new Web3("HTTP://127.0.0.1:7545");
    console.log(myProvider);


}

connect()