import path from "node:path";
import express from "express";
import isAdmin from "./middleware/isAdmin";
import authenticateToken from "./middleware/isConnected";
import uploadAvatar from "./middleware/uploadAvatar";
import userActions from "./modules/userActions";
import { startCronJobs } from "./tools/cron.service";

const router = express.Router();
router.use(express.static(path.join(__dirname, "..", "public")));

/* ************************************************************************* */
// 🌍 Routes PUBLIQUES (accessibles à tous)
/* ************************************************************************* */

// Routes d'authentification
router.post("/auth/login", userActions.login);
router.post(
  "/auth/register",
  uploadAvatar.fields([
    { name: "avatar", maxCount: 1 },
    { name: "vehicle_photo", maxCount: 1 },
  ]),
  userActions.register,
);

router.post("/auth/logout", userActions.logout);
router.get("/auth/check", authenticateToken, userActions.check);
router.post("/auth/forgot-password", userActions.forgotPassword);
router.post("/auth/reset-password", userActions.resetPassword);

/* ************************************************************************* */
// 🛡️ Wall d'autorisation - Tout ce qui suit nécessite d'être connecté
/* ************************************************************************* */

router.use(authenticateToken);

/* ************************************************************************* */
// 🔒 Routes PROTÉGÉES (utilisateur connecté requis)
/* ************************************************************************* */

// Route pour les users
router.get("/users/me", userActions.getMe);
router.patch(
  "/users/me/avatar",
  uploadAvatar.single("avatar"),
  userActions.updateAvatar,
);
router.post("/users/me/password", userActions.changePassword);

/* ************************************************************************* */
// 👑 Wall d'administration - Tout ce qui suit nécessite d'être Admin
/* ************************************************************************* */

router.use(isAdmin);

/* ************************************************************************* */
// 🔑 Routes ADMIN (connecté ET admin requis)
/* ************************************************************************* */

// Routes utilisateurs
router.get("/users/:id", userActions.read);
router.get("/users", userActions.browse);
router.post("/users", userActions.add);
router.put("/users/:id", userActions.edit);
router.delete("/users/:id", userActions.destroy);

// Démarrage des tâches de fond (cron jobs)
startCronJobs();

export default router;
