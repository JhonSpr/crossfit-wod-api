const express = require("express");
const cors = require("cors");
const v1animeRouter = require("./v1/routes/animeRoutes");
const db = require("./database/Recientes.json");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use("/api/v1/animes/", v1animeRouter);
app.use("/api/v1/recien-agregados", (req, res) => {
  res.send({ recientes: db.recientes });
});
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  app, PORT;
});
