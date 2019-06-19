import * as mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'HrigaKpbD9Ka28',
    port: 3306
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Connected!');
});