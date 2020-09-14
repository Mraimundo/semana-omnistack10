const Dev = require('../models/Dev');
//const { index } = require('./DevControllers');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
    // Buscar todos devs no raio de 10km
    // Filtrar os devs por tecnologias...

    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    // passar os filtros dos devs...
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 1000,
        },
      },
    });
    return response.json({ devs });
  }
}