require("dotenv").config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const QA = require('./qa');
const production = require("./production");

const { NODE_ENV } = process.env;//Obtain environment


let currentEnv = DEVELOPMENT;

if(NODE_ENV === "production"){
    currentEnv = PRODUCTION;
}else if (NODE_ENV === "qa"){
    currentEnv = QA;
}

module.exports = currentEnv;