let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null;
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

let sousTotal = prix * quantite;
let reduction;
let totalFinal;
let statut;

if ((codePromo ?? null) !== null && estMembre) {
    reduction = sousTotal * (reductionPourcentage / 100) ;
}else{
    reduction = 0
}

totalFinal = sousTotal - reduction;

if(totalFinal <= soldeCompte){
    soldeCompte -= totalFinal;
    statut = "Paiement accepté";
}else{
    statut = "Solde insuffisant";
}

console.log("===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`)
console.log(`Quantité  : ${quantite}`)
console.log(`Prix unit : ${prix} MAD`)
console.log(`Sous-total : ${sousTotal.toFixed(2)} MAD`)
console.log(`Réduction : ${reduction} MAS`)
console.log(`Total     : ${totalFinal.toFixed(2)} MAS`)
console.log(`Statut    : ${statut}`)
console.log(`Solde     : ${soldeCompte.toFixed(3)} MAD`)