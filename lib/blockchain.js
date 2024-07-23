// lib/blockchain.js
const dayjs = require('dayjs')
const Log = require('./log')
const Block = require('./block')
const Transaction = require('./transaction')
const { KeyGenerator } = require('./signature')

class Blockchain {
  constructor() {
    Log.add('[Blockchain] Init')

    this.blockProofOfWorkDifficulty = 2
    this.blockMineReward = 1

    this.chain = []
    this.pendingTransactions = []

    Log.add('[Blockchain] Generating key for system')
    this.system = new KeyGenerator().generate()
    Log.add('[Blockchain] Generate complete', this.system)

    Log.add('[Blockchain] Generate genesis block')
    this.chain.push(new Block([], dayjs().toDate(), '0'))
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(block) {
    block.previousHash = this.getLastBlock().hash
    block.hash = block.calculateHash()
    this.chain.push(block)
  }

  addTransaction(transaction) {
    Log.add(`[Blockchain] Adding new transaction`, transaction)
    this.pendingTransactions.push(transaction)
  }

  mine(mineAddress, ai = false) {
    Log.add(`[Blockchain] Starting mining with miner ${mineAddress}`)
    return new Promise((resolve, reject) => {
      this.addTransaction(
        new Transaction(
          this.system.publicKey,
          mineAddress,
          this.blockMineReward
        ).sign(this.system.privateKey)
      )
      const block = new Block(this.pendingTransactions, dayjs().toDate())
      block.previousHash = this.getLastBlock().hash

      if (ai) {
        this.aiMine(block).then(() => {
          this.chain.push(block)
          this.pendingTransactions = []
          Log.add(`[Blockchain] AI Mining complete`)
          resolve(this)
        })
      } else {
        block.mine(this.blockProofOfWorkDifficulty).then(() => {
          this.chain.push(block)
          this.pendingTransactions = []
          Log.add(`[Blockchain] Mining complete`)
          resolve(this)
        })
      }
    })
  }

  aiMine(block) {
    return new Promise((resolve, reject) => {
      const difficulty = this.blockProofOfWorkDifficulty
      let nonce = 0

      const aiAlgorithm = () => {
        const aiOptimization = Math.random() * 100
        nonce += Math.floor(aiOptimization)

        block.nonce = nonce
        block.timestamp = dayjs().unix()
        block.hash = block.calculateHash()

        // Update the UI here
        Log.add(`[Block] AI Mining - nonce: ${nonce}, hash: ${block.hash}`)

        if (block.hash.slice(0, difficulty) === '0'.repeat(difficulty)) {
          resolve(block)
        } else {
          setTimeout(aiAlgorithm, 0)
        }
      }

      aiAlgorithm()
    })
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.previousHash !== previousBlock.hash) return false
      if (currentBlock.hash !== currentBlock.calculateHash()) return false

      for (let j = 0; j < this.chain.length; j++) {
        const transactions = this.chain[j].data
        for (let k = 0; k < transactions.length; k++) {
          if (!transactions[k].isValid()) return false
        }
      }
    }

    return true
  }

  getBalance(address) {
    let balance = 0
    for (let i = 0; i < this.chain.length; i++) {
      const block = this.chain[i]
      for (let j = 0; j < block.data.length; j++) {
        const transaction = block.data[j]
        if (transaction.fromAddress === address) {
          balance -= transaction.amount
        }
        if (transaction.toAddress === address) {
          balance += transaction.amount
        }
      }
    }
    return balance
  }

  print() {
    // console.log(JSON.stringify(this.chain, null, 4))
  }
}

module.exports = Blockchain
