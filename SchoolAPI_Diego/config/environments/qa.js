module.exports = {
    PORT: 5050,
    DB: {
        username : "root",
        password : process.env.DB_PASSWORD,
        database : "school_QA",
        host : process.env.DB_HOST,
        dialect : "mysql"
    }
}