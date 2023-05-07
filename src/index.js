const express = require("express");
const apicache = require("apicache");
const cors = require("cors");
const v1animeRouter = require("./v1/routes/animeRoutes");
const {swaggerDocs: V1SwaggerDocs} = require("./v1/swagger");
const app = express();
const PORT = process.env.PORT || 3001;
const cache = apicache.middleware;
app.use(cors());
app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1/animes/", v1animeRouter);
app.get("/generos", (req, res) => {
  res.send({
    generos: [
      {
        id: 1,
        nombre: "Acción",
        link: "/generos/accion",
      },
      {
        id: 2,
        nombre: "Aventura",
        link: "/generos/aventura",
      },
      {
        id: 3,
        nombre: "Comedia",
        link: "/generos/comedia",
      },
      {
        id: 4,
        nombre: "Drama",
        link: "/generos/drama",
      },
      {
        id: 5,
        nombre: "Fantasía",
        link: "/generos/fantasia",
      },
      {
        id: 6,
        nombre: "Mecha",
        link: "/generos/mecha",
      },
      {
        id: 7,
        nombre: "Romance",
        link: "/generos/romance",
      },
      {
        id: 8,
        nombre: "Ciencia ficción",
        link: "/generos/ciencia-ficcion",
      },
      {
        id: 9,
        nombre: "Sobrenatural",
        link: "/generos/sobrenatural",
      },
      {
        id: 10,
        nombre: "Terror",
        link: "/generos/terror",
      },
      {
        id: 11,
        nombre: "Horror",
        link: "/generos/horror",
      },
      {
        id: 12,
        nombre: "Misterio",
        link: "/generos/misterio",
      },
      {
        id: 13,
        nombre: "Psicológico",
        link: "/generos/psicologico",
      },
      {
        id: 14,
        nombre: "Deportes",
        link: "/generos/deportes",
      },
      {
        id: 15,
        nombre: "Isekai",
        link: "/generos/isekai",
      },
      {
        id: 17,
        nombre: "Harem",
        link: "/generos/harem",
      },
      {
        id: 18,
        nombre: "Histórico",
        link: "/generos/historico",
      },
      {
        id: 20,
        nombre: "Shoujo",
        link: "/generos/shoujo",
      },
      {
        id: 21,
        nombre: "Shounen",
        link: "/generos/shounen",
      },
      {
        id: 23,
        nombre: "Vampiros",
        link: "/generos/vampiros",
      },
      {
        id: 24,
        nombre: "Magia",
        link: "/generos/magia",
      },
      {
        id: 26,
        nombre: "Gore",
        link: "/generos/gore",
      },
      {
        id: 30,
        nombre: "Militar",
        link: "/generos/militar",
      },
      {
        id: 32,
        nombre: "Enigma",
        link: "/generos/enigma",
      },
    ],
  });
});
app.get("/api/v1/recien-agregados", (req, res) => {
  res.send({
    recientes: [
      {
        id: 1,
        nombre: "Mashle capitulo 5",
        link: "/ver/mashle-5",
        image: "https://cloudfront-cdn-images.com/albbudret7ua.jpg",
      },
      {
        id: 2,
        nombre: "Kimetsu no yaiba katanakaji no sato-hen capitulo 5",
        link: "/ver/kimetsu-no-yaiba:-katanakaji-no-sato-hen-5",
        image: "https://cloudfront-cdn-images.com/98e09zkkdsnt.jpg",
      },
      // {
      //   id: 3,
      //   nombre: "Comedia",
      //   link: "/generos/comedia",
      // },
      // {
      //   id: 4,
      //   nombre: "Drama",
      //   link: "/generos/drama",
      // },
      // {
      //   id: 5,
      //   nombre: "Fantasía",
      //   link: "/generos/fantasia",
      // },
      // {
      //   id: 6,
      //   nombre: "Mecha",
      //   link: "/generos/mecha",
      // },
      // {
      //   id: 7,
      //   nombre: "Romance",
      //   link: "/generos/romance",
      // },
      // {
      //   id: 8,
      //   nombre: "Ciencia ficción",
      //   link: "/generos/ciencia-ficcion",
      // },
      // {
      //   id: 9,
      //   nombre: "Sobrenatural",
      //   link: "/generos/sobrenatural",
      // },
      // {
      //   id: 10,
      //   nombre: "Terror",
      //   link: "/generos/terror",
      // },
      // {
      //   id: 11,
      //   nombre: "Horror",
      //   link: "/generos/horror",
      // },
      // {
      //   id: 12,
      //   nombre: "Misterio",
      //   link: "/generos/misterio",
      // },
      // {
      //   id: 13,
      //   nombre: "Psicológico",
      //   link: "/generos/psicologico",
      // },
      // {
      //   id: 14,
      //   nombre: "Deportes",
      //   link: "/generos/deportes",
      // },
      // {
      //   id: 15,
      //   nombre: "Isekai",
      //   link: "/generos/isekai",
      // },
      // {
      //   id: 17,
      //   nombre: "Harem",
      //   link: "/generos/harem",
      // },
      // {
      //   id: 18,
      //   nombre: "Histórico",
      //   link: "/generos/historico",
      // },
      // {
      //   id: 20,
      //   nombre: "Shoujo",
      //   link: "/generos/shoujo",
      // },
      // {
      //   id: 21,
      //   nombre: "Shounen",
      //   link: "/generos/shounen",
      // },
      // {
      //   id: 23,
      //   nombre: "Vampiros",
      //   link: "/generos/vampiros",
      // },
      // {
      //   id: 24,
      //   nombre: "Magia",
      //   link: "/generos/magia",
      // },
      // {
      //   id: 26,
      //   nombre: "Gore",
      //   link: "/generos/gore",
      // },
      // {
      //   id: 30,
      //   nombre: "Militar",
      //   link: "/generos/militar",
      // },
      // {
      //   id: 32,
      //   nombre: "Enigma",
      //   link: "/generos/enigma",
      // },
    ],
  });
});
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
