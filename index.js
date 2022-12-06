const sha256 = require("crypto-js/sha256");

class Block{
    constructor(timestamp,data,previousHash="" ){
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
    }
    calculateHash(){
        return sha256(
            this.timestamp+JSON.stringify(this.data)+this.previousHash
        ).toString();
    }
};

class BlockChain{
    constructor(){
        this.chain=[this.generateGenesisBlock()];
    }
    generateGenesisBlock(){
        return new Block("1996-1-24","Genesis","ABCD");
    }
    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
         this.chain.push(newBlock);
    }
};
const rafacoin = new BlockChain();

const block2 = new Block("1996-01-24",{rafat:26});
const block3 = new Block("2022-12-06",{rafi:33});



rafacoin.addBlock(block2);
rafacoin.addBlock(block3);
// console.log(block);
console.log(rafacoin);