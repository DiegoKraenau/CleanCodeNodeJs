module.exports = {
    PORT: process.env.PORT,
    DB: {
        user : "root",
        password : process.env.DB_PASSWORD,
        database : "school_dev",
        host : process.env.DB_HOST,
        dialect : "mysql"
    }
}