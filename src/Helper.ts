import { User } from './dataBase/Models/User';

function makeTable (data): string {
    let str = '<table>';
    for (let i = 0; i < data.length; i++) {
        str += '<tr>';
        for (const key in data[i]) {
            if (key === 'avatar') {
                str += '<td><img src=' + data[i][key] + '></td>';
            }
            else if (key === 'createdAt' || key === 'updatedAt' || key === 'page') {
                str += '<td></td>';
            }
            else {
                str += '<td>' + data[i][key] + '</td>';
            }
        }
        str += '</tr>';
    }
    str += '</table>';

  return str;
}

async function syncWithDataBase (data: object, result: object[]) {
    for (let i = 0; i < data['data'].length; i++) {
        const user = data['data'][i];
        const response = await User.findOrCreate({
            where: {
                id: user['id'],
                email: user['email'],
                first_name: user['first_name'],
                last_name: user['last_name'],
                avatar: user['avatar'],
                page: data['page']
            }
        });
        result.push(response[0]['dataValues']);
    }
}

module.exports = {
    makeTable,
    syncWithDataBase
};