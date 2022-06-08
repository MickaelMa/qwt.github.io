async function getDetailMintGen1(gen1NFT, startTimestamp, endTimestamp) {
    let result;

    // preparation des variables
    var urlAPI = "https://api.elrond.com/accounts/erd1qqqqqqqqqqqqqpgqjd0meg3aurn2utx5evcu87fvyfscs5cs83gqmeefmu/transactions?status=success&size=10000";
    if (startTimestamp !== null) {
        urlAPI += "&after="+ startTimestamp;
    }
    if (endTimestamp !== null) {
        urlAPI += "&before="+ endTimestamp;
    }

    // sauvegarde du resultat 
    transactions = await getAPIResult(urlAPI); 

    // Extraction du nom des fonctions
    var listMintFonction = gen1NFT.reduce(function(accumulateur, valCourante) {
        if(accumulateur.indexOf(valCourante.mintFunction) === -1) {
            accumulateur.push(valCourante.mintFunction);
          }
        return accumulateur;
      }, []);

    console.log('nb transaction : ' + transactions.length);
    transactions.forEach(function(element){
        // verifie si la fonction est une fonction de mint (function in array)
        var indexMintFunction = listMintFonction.indexOf(element.function);
        if (indexMintFunction != -1) {
            // si oui, 
            // on ajoute +1 dans le decompte des nfts
            gen1NFT[indexMintFunction].count += 1;

            // on boucle sur les transfers de token
            element.action.arguments.transfers.forEach(function(tr){
                // QOWATTCOIN - // on ajoute le nombre de coin utilisé
                if (tr.ticker === "QWTCOINS-27203b") {
                    gen1NFT[indexMintFunction].qowattCoinUse += parseInt(tr.value);
                }
                // QWT - // on ajoute le nombre de token utilisé
                if (tr.ticker === "QWT") {
                    gen1NFT[indexMintFunction].qwtUse += (parseInt(tr.value) / Math.pow(10, tr.decimals));
                }
            });
        }
    });
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