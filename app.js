var express = require('express');
var app = express();
const TronWeb = require('tronweb');
const SunWeb = require('sunweb');

const privatekey = '7306c6044ad7c03709980aa188b8555288b7e0608f5edbf76ff2381c5a7a15a8';

const tronweb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: privatekey
});

const mainchain = new TronWeb( {
    fullNode: 'https://api.trongrid.io',
    solidityNode: 'https://api.trongrid.io',
    eventServer: 'https://api.trongrid.io',
    privateKey: privatekey
});
// const sidechain = new Tronweb({
//     fullNode: 'https://sun.tronex.io',
//     solidityNode: 'https://sun.tronex.io',
//     eventServer: 'https://sun.tronex.io/event',
//     privateKey: privatekey
// })
// const sunweb = new Sunweb(
//   mainchain,
//   sidechain,
//   'TWaPZru6PR5VjgT4sJrrZ481Zgp3iJ8Rfo',
//   'TGKotco6YoULzbYisTBuP6DWXDjEgJSpYz',
//   '41E209E4DE650F0150788E8EC5CAFA240A23EB8EB7'
// );

// const tronweb = new Tronweb({
//   fullHost: 'https://api.trongrid.io',
//   privateKey: privatekey
// });


const sidechain = new TronWeb({
  fullNode: 'https://suntest.tronex.io',
  solidityNode: 'https://suntest.tronex.io',
  eventServer: 'https://suntest.tronex.io/event',
  privateKey: privatekey
})
const sunweb = new SunWeb(
mainchain,
sidechain,
'TFLtPoEtVJBMcj6kZPrQrwEdM3W3shxsBU',
'TRDepx5KoQ8oNbFVZ5sogwUxtdYmATDRgX',
'413AF23F37DA0D48234FDD43D89931E98E1144481B'
);

// var app = express();

const wink = sunweb.mainchain.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7');
// console.log(wink);

const test0114 = sunweb.sidechain.contract([{"constant":false,"inputs":[],"name":"hello","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CountEvent","type":"event"}],'TGYpJsuRi8oTNEpNwyV5gVHHStoAUM7euA');
//TNbft6FbEKNZSfvEhVtcfdwKFneVmgga7V  mainnet sunnetwork test contract
//TGYpJsuRi8oTNEpNwyV5gVHHStoAUM7euA  tronex sunnetwork test contract

// const mainTest0114 = tronweb.contract([{"constant":false,"inputs":[],"name":"hello","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"CountEvent","type":"event"}],'TLWHbu4BBaJEwCGUyQQHiqQguYB9tsi8Mo');


let mainEventListener = ()=>{
  wink["Transfer(address,address,uint256)"]().watch((err, event) => {
    if (err) return console.error('Error with "method" event:', err);
    if (event) { // some function
      console.log("main chain event begin:");
      console.log(event);
      console.log("main chain event end");
      console.log();
    }
  });
  // mainTest0114["CountEvent(address,uint256)"]().watch((err, event) => {
  //   if (err) return console.error('Error with "method" event:', err);
  //   if (event) { // some function
  //     console.log("main chain event begin:");
  //     console.log(event);
  //     console.log("main chain event end");
  //     console.log();
  //   }
  // });
}

mainEventListener();

// console.log(test0114)
let sideEventListener = ()=>{
  try {
    console.log("sidechain heartbeat")
    // console.log(test0114);
    test0114["CountEvent(address,uint256)"]().watch((err, event) => {
      if (err) return console.error('Error with "method" event:', err);
      if (event) { // some function
        console.log("side chain event begin:");
        console.log(event);
        console.log("side chain event end");
        console.log();
      }
    });
  }
  catch(err){
    console.log(err, 'errrrrr')
  }
  
}

sideEventListener();
module.exports = app;