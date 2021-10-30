const serverUrl = "https://cj1sdpgbpod8.usemoralis.com:2053/server";
const appId = "lGEoHGmxhXoJjiagnEHegBp7zmKyYvw1Vos9J4Ne";

async function getNFTs(){
const options = { chain: 'eth', address: '0x02baaf8b97c0e123a47acbedb5882d58728f56ca' };
const nfts = await Moralis.Web3.getNFTs(options);

console.log(nfts);
}

getNFTs()