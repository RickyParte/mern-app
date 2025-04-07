const { MongoClient } = require("mongodb")
const Db = process.env.ATLAS_URI
const client = new MongoClient('mongodb+srv://sanketwalhekar83:9665998329@cluster0.sevwc.mongodb.net/employees', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect()
            _db = client.db("employees")
            console.log("Successfully connected to MongoDB.")
            
            return callback(null)
        } catch (error) {
            return callback(error)
        }
    },

    getDb: function () {
        return _db
    }
}
