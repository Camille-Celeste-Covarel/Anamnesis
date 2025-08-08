module.exports = {
  // On n'étend plus la configuration "conventional", on définit nos propres règles.
  parserPreset: {
    parserOpts: {
      // Le pattern pour extraire les parties du message.
      // On capture la version, le type et la raison.
      headerPattern: /^(\d+\.\d+\.\d+)\s*\|\s*(\w+)\s*\|\s*(.*)$/,
      headerCorrespondence: ["version", "type", "subject"],
    },
  },
  rules: {
    // Le TYPE doit être l'un des suivants (en majuscules)
    "type-enum": [
      2,
      "always",
      [
        "FIX",
        "FEAT",
        "MODIFY",
        "DELETE",
        "BUILD",
        "CI",
        "DOCS",
        "STYLE",
        "REFACTOR",
        "TEST",
        "MAINTAIN",
        "UPGRADE",
      ],
    ],
    // Le TYPE doit être en majuscules
    "type-case": [2, "always", "upper-case"],
    // Le TYPE ne doit pas être vide
    "type-empty": [2, "never"],
    // La RAISON ne doit pas être vide
    "subject-empty": [2, "never"],
    // La RAISON ne doit pas se terminer par un point
    "subject-full-stop": [2, "never", "."],
  },
  helpUrl:
    "Le message de commit doit suivre le format : X.X.X | TYPE | RAISON (ex: 1.1.0 | UPGRADE | Passage à Vite 6)",
};
