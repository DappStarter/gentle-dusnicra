require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'guess clock other sugar fan rate still horse harvest breeze obscure genuine'; 
let testAccounts = [
"0xe88c94d9307092c0467ce63403d16d32d9e907120d9712ad7ce82a74c12519c8",
"0xf51dfc6f5c4f6dacc2e6eb6b8488423b15ebce7bbf5ac0733fd1dd867a03f731",
"0x4668e5a66928a153d91b1080f729f34037489035a9111ab923f64b74ead6b6d0",
"0x2b242a6c2893a0fb846e02572d30b93210720fe883d3e0a7c0d6c9ea2da26905",
"0x031ace840384a66374079550258f267df4b3d2b04b4fc4f1c620c1d2a1e1d36a",
"0x4e99b55c244634279ee588bb96b0d8180e90499825b088be43ac5de47d3fdbf9",
"0x9695373e5b6dcf6c4300c330187ec73a32e47ef8901953243809eba2174118cd",
"0x45cb60a2adb46fc02d779d00515c5ecce4084f841fc33fb662931350f050f384",
"0x27542d53e0e74b2b8f76094e552562be8d953db6dcccbec9be4fb3aed98d8438",
"0xaad0a238aceeb2a4d492d75ae41afe3b375e150d42280dab63d8ade9a39e5162"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

