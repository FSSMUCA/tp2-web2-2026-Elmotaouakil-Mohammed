let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let arobaseIndex = email.indexOf("@");
let pointIndex = email.indexOf(".", arobaseIndex);

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : ${JSON.stringify(nom.trim())} (corrigé : espaces supprimés)`);
console.log(`age              : ${Number(age)} ${Number.isNaN(Number(age)) || Number(age) <= 0 
    ? "(invalide)" : "(valide)"
  }`,
);
console.log(`email            : ${JSON.stringify(email)} ${arobaseIndex === -1
      ? "invalide : pas de @"
      : pointIndex === -1
        ? "(invalide : pas de point après @)"
        : "(valide)"
  }`,
);
console.log(`scoreJeu         : ${Number.isNaN(parseInt(scoreJeu)) 
    ? 0 : parseInt(scoreJeu)} (extrait depuis "${scoreJeu}")`,
);
console.log(`estAdmin         : ${estAdmin === "true"}`);
console.log(`derniereConnexion: ${derniereConnexion ?? "Jamais connecté"}`);
console.log(
  `nombreConnexions : ${
    Number(nombreConnexions) === 0
      ? "Aucune connexion"
      : Number(nombreConnexions)
  }`,
);
