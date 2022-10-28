const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "OmegapsDB";
const URI = "mongodb+srv://" + username + ":" + password + "@clusteromps.xavhpvs.mongodb.net/" + database + "?retryWrites=true&w=majority";

const conectar = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Atlas esta en línea");
    } catch (error) {
        console.log("Error de conexión" + error);
    }
}
conectar();

module.exports = mongoose;