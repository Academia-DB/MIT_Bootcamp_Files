const express = require('express');
const app     = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Pokedex API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
* @swagger
* /pokemon:
*   get:
*     description: Catch Em All
*     responses:
*       200:
*         description: Success
*
*/
app.get('/', (req,res) => {
    res.send('Welcome to the world of Pokemon');
})

app.get('/pokemon', (req,res) => {
    res.send([
        {
            id: 1,
            name: "bulbasaur",
            level: 5
        }
    ]);
});

/**
* @swagger
* /caught:
*   post:
*     description: caught one
*     parameters:
*     - name: name
*       description: Pocket Monster
*       in: body
*       required: true
*       type: string
*     responses:
*       200:
*         description: Success
*
*/
app.post('/caught', (req,res) => {
    const name = req.body.name;
    res.send({name});
});

app.listen(3000, () => {
    console.log('Running on port 3000');
})