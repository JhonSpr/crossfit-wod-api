const animeService = require("../services/AnimeService");

const getAllAnimes = (req, res) => {
  const { name, estado, info } = req.query;
  try {
    const limit = parseInt(req.query.limit) || 24;
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const años = req.query.años;
    const episodes = req.query.episodes;
    const genero = req.query.genero;
    const type = req.query.type;
    const rating = req.query.rating;
    const sortBy = req.query.sortBy;
    const animes = animeService.getAllAnime({
      name,
      años,
      estado,
      episodes,
      genero,
      type,
      info,
      rating,
      sortBy,
    });

    let datos = animes;

    if (sortBy === "desc") {
      res.send({
        datos: datos
          .slice(startIndex, endIndex)
          .sort((a, b) => b.name.localeCompare(a.name)),
        item: datos.length,
        currentPage: page,
        sort: sortBy,
      });
    } else if (sortBy === "asc") {
      res.send({
        datos: datos
          .slice(startIndex, endIndex)
          .sort((a, b) => a.name.localeCompare(b.name)),
        item: datos.length,
        currentPage: page,
        sort: sortBy,
      });
    } else if (sortBy === undefined || sortBy === null || sortBy === "todos") {
      res.send({
        datos: datos.slice(startIndex, endIndex),
        item: datos.length,
        currentPage: page,
        sort: sortBy,
      });
    }
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Algo salió mal",
      data: [],
    });
  }
};

module.exports = {
  getAllAnimes,
};
