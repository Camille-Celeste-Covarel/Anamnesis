import startServer from "./app";
import { LogLevel, cleanOldLogs } from "./tools/logger";

// Récupérer le port depuis les variables d'environnement
const port = process.env.PORT;

// Vérification cruciale pour s'assurer que le port est défini
if (!port) {
  console.error(
    "ERREUR FATALE : La variable d'environnement PORT n'est pas définie.",
    LogLevel.CRITICAL,
  );
  process.exit(1);
}

cleanOldLogs();

// Fonction principale pour démarrer l'application
async function main() {
  const httpServer = await startServer();

  await new Promise<void>((resolve, reject) => {
    const runningServer = httpServer.listen(port, () => {
      console.log(
        `🚀 HTTP & WebSocket server listening on port ${port}`,
        LogLevel.INFO,
      );
      resolve();
    });

    runningServer.on("error", (error) => {
      reject(error);
    });
  });
}

main().catch((error) => {
  console.error(
    "Erreur fatale lors du démarrage de l'application:",
    error,
    LogLevel.CRITICAL,
  );
  process.exit(1);
});
