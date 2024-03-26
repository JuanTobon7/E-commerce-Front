const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const services = require('../services/Api.js');

const conn = axios.create({
  baseURL: 'http://localhost:3001',
  maxContentLength: 25000000,
  maxBodyLength: 25000000
});

// Función para manejar solicitudes HTTP
exports.request = async function (req, res) {
  const matchedRoute = req.path.split('/');
  matchedRoute.splice(0, 2);
  const url = matchedRoute.join('/');
  const method = req.method;
  let headers = { Accept: 'application/json', 'X-Forwarded-For': req.ip };

  // Aquí puedes agregar la lógica para manejar tokens si lo deseas

  let data;
  if (['POST', 'PUT', 'PATCH'].includes(method) && req.body) {
    if (req.headers['content-type'].includes('multipart/form-data')) {
      data = new FormData();

      for (const key in req.body) {
        data.append(key, req.body[key]);
      }

      data.files = {};
      for (const key in req.files) {
        const fileData = req.files[key];
        data.append(key, fs.createReadStream(fileData.path || fileData.filepath), { filename: fileData.name, contentType: fileData.type });
      }

      headers = { ...headers, ...data.getHeaders() };
    } else {
      data = req.body;
    }
  }

  let params;
  if (['GET', 'DELETE'].includes(method) && req.query) {
    params = req.query;
  }

  try {
    const result = await conn.request({ method, url, headers, params, data, responseType: 'stream' });
    res.set('content-type', result.headers['content-type']);
    if (result.headers['content-disposition']) {
      res.set('content-disposition', result.headers['content-disposition']);
    }

    if (result.status === 401) {
      // Manejo de token inválido
      res.sendStatus(401);
    }

    res.status(result.status);
    result.data.pipe(res); // Devuelve el contenido directamente al cliente
  } catch (e) {
    console.error('Falló comunicación con la API con error = ', e);
    res.status(e.response.status);
    res.send(e.response.data);
  }
};
