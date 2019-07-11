import * as path from 'path';
import * as express from 'express';
import * as exphbs from 'express-handlebars';
import * as req from 'request-promise';
import { sequelize }  from './dataBase/Sequilize';

const helper = require('./Helper');
const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutDir: path.join(__dirname, '../views/layouts'),
    helpers: {
        makeTable: helper.makeTable
    }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '../views'));

app.get('/page=1', async (request, response) => {
    const options = {
        uri: 'https://reqres.in/api/users?page=1',
        json: true
    };
    try {
        const res = await req(options);

        // Start you data base creating all models (tables)
        await sequelize.sync({ force: true })
            .then(() => {
                console.log('Tables created');
            });

        // Before using data - write it to data base
        const users: object[] = [];
        await helper.syncWithDataBase(res, users);
        response.render('home', {
            page: users[0]['page'],
            nextPage: users[0]['page'] + 1,
            previousPage: users[0]['page'] - 1,
            users: users
        });
    }
    catch (error) {
        console.log(error.message);
    }
});

app.get('/page=2', async (request, response) => {
    const options = {
        uri: 'https://reqres.in/api/users?page=2',
        json: true
    };
    try {
        const res = await req(options);
        // Before using data - write it to data base
        const users: object[] = [];
        await helper.syncWithDataBase(res, users);
        response.render('home', {
            page: users[0]['page'],
            nextPage: users[0]['page'] + 1,
            previousPage: users[0]['page'] - 1,
            users: users
        });
    }
    catch (error) {
        console.log(error.message);
    }
});

app.get('/page=3', async (request, response) => {
    const options = {
        uri: 'https://reqres.in/api/users?page=3',
        json: true
    };
    try {
        const res = await req(options);
        // Before using data - write it to data base
        const users: object[] = [];
        await helper.syncWithDataBase(res, users);
        response.render('home', {
            page: users[0]['page'],
            nextPage: users[0]['page'] + 1,
            previousPage: users[0]['page'] - 1,
            users: users
        });
    }
    catch (error) {
        console.log(error.message);
    }
});

app.get('/page=4', async (request, response) => {
    const options = {
        uri: 'https://reqres.in/api/users?page=4',
        json: true
    };
    try {
        const res = await req(options);
        // Before using data - write it to data base
        const users: object[] = [];
        await helper.syncWithDataBase(res, users);
        response.render('home', {
            page: users[0]['page'],
            nextPage: users[0]['page'] + 1,
            previousPage: users[0]['page'] - 1,
            users: users
        });
    }
    catch (error) {
        console.log(error.message);
    }
});

app.listen(3000);