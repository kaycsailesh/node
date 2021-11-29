const Hapi = require('@hapi/hapi');
const base58 = require('bs58');
const crypto = require('crypto');
const { Ed25519Sha256 } = require('crypto-conditions');
const BigchainDB = require('bigchaindb-driver');
const bip39 = require('bip39');

const nTokens = 1000000;
const API_PATH = 'https://test.ipdb.io/api/v1/';
const conn = new BigchainDB.Connection(API_PATH);
let tokenCreator;
let createTxId;
let tokensLeft;

bip39.mnemonicToSeed('seedPhrase').then(p => {
    p = p.slice(0, 32)
    tokenCreator = new BigchainDB.Ed25519Keypair(p);
    console.log(tokenCreator);
});

const init = async () => {
    const server= Hapi.server({
        port: 3001,
        host: 'localhost',
        routes: {
            cors: true
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);

    server.route({
        method: 'GET',
        path: '/createToken',
        handler: (request, h) => {
            return tokenLaunch();
            // return 'Hello World!';
        }
    });
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();


function tokenLaunch() {
    // Construct a transaction payload
    const tx = BigchainDB.Transaction.makeCreateTransaction({
            token: 'TT (Tutorial Tokens)',
            number_tokens: nTokens
        },
        // Metadata field, contains information about the transaction itself
        // (can be `null` if not needed)
        {
            datetime: new Date().toString()
        },
        // Output: Divisible asset, include nTokens as parameter
        [BigchainDB.Transaction.makeOutput(BigchainDB.Transaction
            .makeEd25519Condition(tokenCreator.publicKey), nTokens.toString())],
        tokenCreator.publicKey
    )


    // Sign the transaction with the private key of the token creator
    const txSigned = BigchainDB.Transaction
        .signTransaction(tx, tokenCreator.privateKey)

    // Send the transaction off to BigchainDB
    return conn.postTransactionCommit(txSigned)
        .then(res => {
            createTxId = res.id
            tokensLeft = nTokens
            // return txSigned.id;
            return res;
            // document.body.innerHTML ='<h3>Transaction created</h3>';
            // txSigned.id corresponds to the asset id of the tokens
            // document.body.innerHTML +=txSigned.id
        })
}
