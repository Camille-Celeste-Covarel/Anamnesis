const { execSync } = require("node:child_process");

/**
 * Affiche un diff des fichiers modifiés.
 * @param {string[]} filenames
 */
function showDiff(filenames) {
  const files = filenames.join(" ");
  try {
    const diff = execSync(`git diff --color ${files}`).toString();
    if (diff) {
      console.log("\n🤖 Biome a automatiquement corrigé les changements suivants :\n");
      console.log(diff);
    }
  } catch (e) {
    // Le diff peut échouer si les fichiers sont nouveaux, on ignore l'erreur.
  }
}

module.exports = {
  "*.{js,jsx,ts,tsx,json,md,css}": (filenames) => {
    const files = filenames.join(" ");
    // On exécute la correction
    execSync(`npx biome check --write --no-errors-on-unmatched ${files}`);
    // On affiche le diff
    showDiff(filenames);
    // On retourne la commande pour ajouter les fichiers corrigés
    return [`git add ${files}`];
  },
};