const {Pool} = require ('pg');

class Database {
constructor(){
    this.pool =  new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
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