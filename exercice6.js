let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// Partie A
console.log("\n====== Partie A ======\n");

console.log(nom ?? "valeur par défaut");
console.log(age ?? "valeur par défaut");
console.log(ville ?? "valeur par défaut");
console.log(score ?? "valeur par défaut");
console.log(actif ?? "valeur par défaut");

// Partie B
console.log("\n====== Partie B ======\n");

console.log(nom || "valeur par défaut");
console.log(age || "valeur par défaut");
console.log(ville || "valeur par défaut");
console.log(score || "valeur par défaut");
console.log(actif || "valeur par défaut");

// Partie C
console.log("\n====== Partie C ======\n");

console.log(
  (nom ?? "valeur par défaut") === (nom || "valeur par défaut")
    ? "même résultat"
    : "résultat différent",
);
console.log(
  (age ?? "valeur par défaut") === (age || "valeur par défaut")
    ? "même résultat"
    : "résultat différent",
);
console.log(
  (ville ?? "valeur par défaut") === (ville || "valeur par défaut")
    ? "même résultat"
    : "résultat différent",
);
console.log(
  (score ?? "valeur par défaut") === (score || "valeur par défaut")
    ? "même résultat"
    : "résultat différent",
);
console.log(
  (actif ?? "valeur par défaut") === (actif || "valeur par défaut")
    ? "même résultat"
    : "résultat différent",
);
