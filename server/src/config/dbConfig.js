module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'RiceCultivationByFarmers',
    dialect: 'mysql',
    port: 3308,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}