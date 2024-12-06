function conectar () {
const urlDataBase = "mysql://root:hqZnvoLyUozaAIyeIfqznWRGZdelYodv@mysql.railway.internal:3306/railway"

const connection = mysql.createConnection(urlDataBase);

module.exports = connection;
}



