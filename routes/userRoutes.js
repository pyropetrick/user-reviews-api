import { Router } from "express";

const router = new Router();

router.get("/user", (req, res) => {
  res.json({ user: "pavel" });
});

export default router;
