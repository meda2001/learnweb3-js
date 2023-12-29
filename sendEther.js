const {Web3} = require('web3');

async function sendEther(){
    const web3= new Web3("HTTP://127.0.0.1:7545");

    const tnx =  await web3.eth.sendTransaction({
        from:"0x1fF03d89e12361c0f4f667b93C469FbeCBC13c2F",
        to:'0xFCA7F22cC95091EDC641404335ab90d76A335fDD',
        value:web3.utils.toWei("10",'ether')
    });
    console.log(tnx)

}
sendEther();