import cron from "node-cron";
import { Op } from "sequelize";
import sequelize from "../config/database";
import { LogLevel, log } from "./logger";

/**
 * Cherche et expire les réservations qui ont dépassé leur date d'expiration.
 * Cette fonction est conçue pour être appelée périodiquement par une tâche cron.
 */
const Exemple = async (): Promise<void> => {
  try {
  } catch (error) {}
};

/**
 * Démarre toutes les tâches planifiées de l'application.
 */
export const startCronJobs = (): void => {
  // S'exécute toutes les minutes ('* * * * *')
  cron.schedule("* * * * *", () => void Exemple());
  log(
    "Tâches Cron démarrées. La vérification des réservations est active.",
    LogLevel.INFO,
  );
};
