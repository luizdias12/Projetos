const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const pwd = 'g00gl3';

async function connect() {

    let conn;

    try {
        conn = await oracledb.getConnection( {
            user : "ville5",
            password : pwd,
            connectString : "villep-scan.villefort.lan/cemaprod"
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