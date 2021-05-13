const express = require('express'); // biblioteca para criar o servidor express
const routes = express.Router(); // const para criar as toras
const ProfileController = require('./controllers/ProfileController'); // importação do arquivo ProfileController
const JobController = require('./controllers/JobController'); // importação do arquivo JobController
const DashboardController = require('./controllers/DashboardController'); // importação do arquivo DashboardController

routes.get('/', DashboardController.index); // função get é para pegar os pedidos e a referência vai para a função Job
routes.get('/job', JobController.create);
routes.post('/job', JobController.save); // função post é para salvar os dados
routes.get('/job/:id', JobController.show); // :id para pegar o id
routes.post('/job/:id', JobController.update);
routes.post('/job/delete/:id', JobController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.update);

module.exports = routes; // exportando para poder ser usado fora 