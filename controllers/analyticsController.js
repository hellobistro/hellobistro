const axios = require('axios');
const { serverSecret, analyticsEndpoint } = require('../config/config.js');

const analyticsController = {

  async buildData(id) {
    try {
      await axios.post(`${analyticsEndpoint}/build/${id}/${serverSecret}`);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchData(req, res) {
    const { id } = req.params;
    try {
      const response = await axios.get(`${analyticsEndpoint}/data/${id}/${serverSecret}`);
      console.log(response.data);
      res.status(200).send(response.data);
    } catch (error) {
      console.log(error);
      res.status(400).send('NO');
    }
  },

};

module.exports = analyticsController;
