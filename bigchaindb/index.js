const driver = require('bigchaindb-driver');
const base58 = require('bs58');
const crypto = require('crypto');
const { Ed25519Sha256 } = require('crypto-conditions');

const API_PATH = 'http://localhost:9984/api/v1/'

const alice = new driver.Ed25519Keypair()

const tx = driver.Transaction.makeCreateTransaction(
    {city: 'Berlin, DE', temperature: 22, datetime: new Date().toString()},
    {what: 'My first BigchainDB transaction'},
    [driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(alice.publicKey)
    )],
    alice.publicKey
)

const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)

const conn = new driver.Connection(API_PATH);

conn.postTransactionCommit(txSigned).then(retrievedTx => {
    'Transaction', retrievedTx.id, 'successfully posted.'
})
