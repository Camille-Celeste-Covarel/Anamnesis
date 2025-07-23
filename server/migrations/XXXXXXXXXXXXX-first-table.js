/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    // Ordre de création des tables :
    // 1. Tables de lookup (sans dépendances)
    // 2. Tables parentes (User)
    // 3. Tables enfants (Book, Terminal, Vehicule, ImportLog, Observation, Request)
    // 4. Tables de jointure (BookTerminal, TerminalPlug)
    // Note: Station est maintenant traitée comme une table parente après les lookups
    // et sa FK id_book est ajoutée après la création de la table book.

    // --- Création de la table 'user' ---
    await queryInterface.createTable("user", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      gender: {
        type: Sequelize.ENUM("Femme", "Homme", "Autre"),
        allowNull: true,
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      address_bis: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      postcode: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      avatar_url: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // --- Création de la table 'Exemple' ---
    await queryInterface.createTable("exemple", {
      id: {
        type: Sequelize.UUID, // Choose the good type
        defaultValue: Sequelize.UUIDV4, // harmonize
        primaryKey: true,
        allowNull: false,
      },
      exemple: {
        type: Sequelize.UUID, // Choose the good type
        defaultValue: Sequelize.UUIDV4, // harmonize
        primaryKey: true,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Ordre de suppression des tables (inverse de la création) :
    // 1. Tables de jointure
    // 2. Tables enfants
    // 3. Tables parentes
    // 4. Tables de lookup

    // --- Suppression des tables parentes ---
    await queryInterface.dropTable("user");

    // --- Suppression des tables de lookup ---
    await queryInterface.dropTable("exemple");
  },
};
