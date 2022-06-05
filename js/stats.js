async function getNbMintGen1(gen1NFT, startTimestamp, endTimestamp) {
    let result;

    // preparation des variables
    var urlAPI = "https://api.elrond.com/accounts/erd1qqqqqqqqqqqqqpgqjd0meg3aurn2utx5evcu87fvyfscs5cs83gqmeefmu/transactions/count?status=success&function=" + gen1NFT.mintFunction;
    if (startTimestamp !== null) {
        urlAPI += "&after="+ startTimestamp;
    }
    if (endTimestamp !== null) {
        urlAPI += "&before="+ endTimestamp;
    }

    // sauvegarde du resultat 
    gen1NFT.count = await getAPIResult(urlAPI);
     
}


async function getNbMintGen0(gen0NFT, startTimestamp, endTimestamp) {
    let result;

    // preparation des variables
    var urlAPI = "https://api.elrond.com/accounts/erd1qqqqqqqqqqqqqpgq0jdfyzt2afk3dc35y9s8q0t0qk2tc56a83gq6ftr00/transactions/count?status=success&function=" + gen0NFT.mintFunction;
    if (startTimestamp !== null) {
        urlAPI += "&after="+ startTimestamp;
    }
    if (endTimestamp !== null) {
        urlAPI += "&before="+ endTimestamp;
    }

    // sauvegarde du resultat 
    gen0NFT.count = await getAPIResult(urlAPI);
     
}



// recuperation des NFT QWTCoin
async function getNbQWTCoinMint(){

    var urlAPI = "https://api.elrond.com/nfts/QWTCOINS-27203b-01/accounts?size=10000";

    var data = await getAPIResult(urlAPI);

    var totalQWTCoin = data.reduce(function (sum, tax) {
        return parseInt(sum) + parseInt(tax.balance);
    }, 0);

    var scQWTCoin = data.find(el => el.address === "erd1qqqqqqqqqqqqqpgq4htcyjd0jnxumw0add2qy4xres2f6ukh83gqmzy3vv").balance;
    var qWTCoinMint = totalQWTCoin - scQWTCoin;

     $("#nbQWTCoin").append("QWT Coin NFT claimed : " + qWTCoinMint  + "/" + totalQWTCoin);
}