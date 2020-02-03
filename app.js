var express = require('express');
var app = express();
const TronWeb = require('tronweb');
const SunWeb = require('sunweb');

// You don't need to give a privatekey for this demo, unless you want to send transactions.
const privatekey = ''; 

/**
 *    ********* 1 TRON Mainnet ************
 */

/**
 *   1.1 TRON Mainnet config
 */

const tron = new TronWeb( {
    fullNode: 'https://api.trongrid.io',
    solidityNode: 'https://api.trongrid.io',
    eventServer: 'https://api.trongrid.io',
    privateKey: privatekey
});

const dappChain = new TronWeb({
  fullNode: 'https://sun.tronex.io',
  solidityNode: 'https://sun.tronex.io',
  eventServer: 'https://sun.tronex.io',
  privateKey: privatekey
})

const tronMainnet =  new SunWeb(
  tron,
  dappChain,
  'TWaPZru6PR5VjgT4sJrrZ481Zgp3iJ8Rfo',
  'TGKotco6YoULzbYisTBuP6DWXDjEgJSpYz',
  '41E209E4DE650F0150788E8EC5CAFA240A23EB8EB7'
)

/**
 *    1.2 Tron mainnet contract test. use wink contract as an example. Use SunWeb.
 */

 const wink = tronMainnet.mainchain.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7');

/**
 *  1.3 TRON Mainnet listener demo
 */

let mainEventListener = ()=>{
  console.log('**********')
  console.log('TRON mannet listen task starts...\nautomatically listens to wink event')
  console.log('**********')
  wink["Transfer(address,address,uint256)"]().watch((err, event) => {
    if (err) return console.error('Error with "method" event:', err);
    if (event) { // some function
      console.log("TRON mannet event begin:");
      console.log(event);
      console.log("TRON mannet event end");
      console.log();
    }
  });
}

mainEventListener();

/**
 *   1.4 DAppChain contract & listener.
 */

const test0120 = tronMainnet.sidechain.contract([{"constant":false,"inputs":[],"name":"hello","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CountEvent","type":"event"}],'TEkgV673Vzwk1s24F5iXXh8hsn5LQ1h7p8');

let dappchainEventListener = ()=>{
  console.log('**********')
  console.log('dappchain listen task starts...\nPlease send transactions to trigger events for test using sun-cli cmd: triggercontract TEkgV673Vzwk1s24F5iXXh8hsn5LQ1h7p8 hello() # false 10000000 0 0 #')
  console.log('ATTENTION: REAL TRX IS REQUIRED WITH THIS CMD!!!!')
  console.log('**********')
  test0120["CountEvent(address,uint256)"]().watch((err, event) => {
    if (err) return console.error('Error with "method" event:', err);
    if (event) { // some function
      console.log("dappchain mainnet event begin:");
      console.log(event);
      console.log("dappchain mainnet event end");
      console.log();
    }
  });
}

dappchainEventListener();


/**
 *    ********* 2 Tronex testnet ********* 
 *    Below are testnet!!!!! Should only be used as test environment. Only a demo for Tronex DAppChain(Not Tronex itself).
 */

 /**
  *  2.1 Tronex testnet config
  */
const tronexDappChain = new TronWeb({
  fullNode: 'https://suntest.tronex.io',
  solidityNode: 'https://suntest.tronex.io',
  eventServer: 'https://suntest.tronex.io',
  privateKey: privatekey
})
const tronexTestnet = new SunWeb(
  tron,// need to change
tronexDappChain,
'TFLtPoEtVJBMcj6kZPrQrwEdM3W3shxsBU',
'TRDepx5KoQ8oNbFVZ5sogwUxtdYmATDRgX',
'413AF23F37DA0D48234FDD43D89931E98E1144481B'
);

/**
 *    2.2 Tronex testnet dappchain contract. Use SunWeb.
 *    trigger contract by use command in sun-cli: 
 *    triggercontract TGYpJsuRi8oTNEpNwyV5gVHHStoAUM7euA hello() # false 10000000 0 0 #
 */

const test0114 = tronexTestnet.sidechain.contract([{"constant":false,"inputs":[],"name":"hello","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CountEvent","type":"event"}],'TGYpJsuRi8oTNEpNwyV5gVHHStoAUM7euA');
//TNbft6FbEKNZSfvEhVtcfdwKFneVmgga7V  mainnet sunnetwork test contract
//TGYpJsuRi8oTNEpNwyV5gVHHStoAUM7euA  tronex sunnetwork test contract

/**
 *     2.3 Tronex testnet DAppChain listener demo
 */

let tronexDappchainEventListener = ()=>{
  try {
    console.log('**********')
    console.log('dappchain tronex listen task starts...',
    '\nPlease send transactions to trigger events for test using sun-cli cmd: triggercontract TGYpJsuRi8oTNEpNwyV5gVHHStoAUM7euA hello() # false 10000000 0 0 #')
    console.log('Will consume test coin')
    console.log('**********')
    test0114["CountEvent(address,uint256)"]().watch((err, event) => {
      if (err) return console.error('Error with "method" event:', err);
      if (event) { // some function
        console.log("dappchain tronex event begin:");
        console.log(event);
        console.log("dappchain tronex event end");
        console.log();
      }
    });
  }
  catch(err){
    console.log(err, 'err')
  }
  
}

tronexDappchainEventListener();

/**
 *   3 Fullnode api test
 */

tronexTestnet.sidechain.trx.getChainParameters().then(
  result=>console.log('\n**********Tronex fullnode api test getChainParameters() begin:**********\n', 
  result, '\n**********Tronex fullnode api test getChainParameters() end.**********\n'))

module.exports = app;
