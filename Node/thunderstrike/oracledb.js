const oracledb = require('oracledb');
require('dotenv').config();
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function connect() {
    
    let conn;

    try {
        conn = await oracledb.getConnection( {
            user : `${process.env.DB_USR}`,
            password : `${process.env.DB_PWD}`,
            connectString : `${process.env.DB_CONN}`
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