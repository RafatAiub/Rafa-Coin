const {Block,Transaction,BlockChain} = require('./index');

const EC = require("elliptic").ec;
var ec = new EC("secp256k1");
//generate keys
const key = ec.genKeyPair();
const privateKey = key.getPrivate("hex");
const waletNumber = key.getPublic("hex");

// console.log(privateKey,publicKey);

const josscoin = new BlockChain();
const tx1 = new Transaction(waletNumber,"randomAddress",100);
tx1.signTransaction(key);
josscoin.addTransaction(tx1);

josscoin.minePendingTransactions(waletNumber);

console.log(josscoin.getBalanceOfAddress(waletNumber));
josscoin.minePendingTransactions(waletNumber);

console.log(josscoin.getBalanceOfAddress(waletNumber));

console.log(josscoin.isBlockChainValid());
