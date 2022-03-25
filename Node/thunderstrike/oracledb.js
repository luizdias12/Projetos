const oracledb = require('oracledb');
require('dotenv').config();
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const db_string = process.env.DATABASE_STRING;
const db_pwd = process.env.DATABASE_PWD;

console.log('db_string: ' + db_string, 'db_pwd: ' + db_pwd);

async function connect() {
    
    let conn;

    try {
        conn = await oracledb.getConnection( {
            user : "ville5",
            password : `${db_pwd}`,
            connectString : `${db_string}`
        });

        console.log('Connected to Database, Oracle Client Version: ' + oracledb.oracleClientVersionString);

        } catch (err) {
            console.error(err);
        } finally {
            if (conn) {
                try {
                    await conn.close();
                    console.log('Connection Closed! Bye Bye!')
                } catch(err) {
                    console.error(err);
            }
        }
    }
}

connect();