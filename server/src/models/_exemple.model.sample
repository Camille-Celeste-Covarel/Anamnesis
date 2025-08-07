import { DataTypes, Model, type Sequelize } from "sequelize";
import type {
  ExempleAttributes,
  ExempleCreationAttributes,
} from "../types/models/models";

export class Exemple
  extends Model<ExempleAttributes, ExempleCreationAttributes>
  implements ExempleAttributes
{
  public id!: string;
  public Exemplebis!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    Exemple.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        Exemplebis: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: "exemple",
        timestamps: true,
        underscored: true,
        modelName: "Exemple",
      },
    );
  }

  static associate(sequelize: Sequelize) {
    // Définissez vos associations ici si nécessaire
  }
}
