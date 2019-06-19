import { Sequelize } from 'sequelize-typescript';
import { User } from './Models/User';

// Instatntiate the sequilize object for connecting data base
export const sequelize = new Sequelize({
    database: 'world',
    dialect: 'mysql',
    username: 'root',
    password: 'HrigaKpbD9Ka28',
    storage: ':memory:',
    modelPaths: [__dirname + '/Models']
});

// Add models (tables)
sequelize.addModels([User]);
