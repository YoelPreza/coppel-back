const {Pool} = require ('pg');

class Database {
constructor(){
    this.pool =  new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'denuncias_coppel',
        password: '2450',
        port: 5432,
        // connectionString: process.env.POSTGRES_URL + "?sslmode=require",

    });
}

async query(query, values){
    try {
        const result = await this.pool.query(query, values);
        return result.rows;
    } catch (error) {
        throw new Error('Database query error: ' + error.message)
    }
    
}
}

module.exports = Database;