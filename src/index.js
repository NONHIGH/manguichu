import app from "./routes/app.js";
import db from "./database/db_connection.js"
import './database/models/chapter.js'
import './database/models/manga.js'
import './database/models/mangaFavorite.js';
const PORT = 3001;



const main = async () => {
    try {
        await db.sync({ force: true })
        console.log(db.models);
        app.listen(PORT, () => {
            console.log('corriendo en el puerto 3001');
        })
    } catch (error) {
        throw new Error('Algo paso en el inicio del servidor: ', error.message);
    }
}
main()