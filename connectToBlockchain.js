const {Web3} = require('web3');

async function connect(){
    const myProvider= new Web3("HTTP://127.0.0.1:7545");  // connected to blockchain world
    // console.log(myProvider);
    const web3 =new Web3(myProvider);  // for checkig purpsoe
    // console.log(web3);

    const accounts = await web3.eth.getAccounts(); // fetch list of accounts
    // console.log(accounts);
    // console.log(accounts[0]);

    // fetching balance in gwei for a specific account
    const getBalance= await web3.eth.getBalance(accounts[0])  // fetched the balance account at zero index index value can varies
    // console.log(getBalance)


    // fetching balance in eth for a specific account
    const ethBalance = await web3.utils.fromWei(getBalance,"ether");  // convert gwei to eth
    console.log(ethBalance);

    const gweiBalance = web3.utils.toWei(ethBalance,"Gwei");
    console.log(gweiBalance);




}

connect()