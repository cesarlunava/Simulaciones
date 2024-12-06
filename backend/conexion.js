function conectar () {
const urlDataBase = "mysql://root:hqZnvoLyUozaAIyeIfqznWRGZdelYodv@autorack.proxy.rlwy.net:46731/railway"

const connection = mysql.createConnection(urlDataBase);

module.exports = connection;
}



