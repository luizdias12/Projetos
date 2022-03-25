require('dotenv').config();

module.exports = {
    hrPool: {
      user: process.env.DB_USR,
      password: process.env.DB_PWD,
      connectString: process.env.DB_CONN,
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0
    }
};