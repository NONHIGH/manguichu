import { DataTypes } from "sequelize";
import db from '../db_connection.js';
import Manga from './manga.js';
import User from './user.js';

const MangaFavorite = db.define('Manga_Favorite', {}, { timestamps: false });

User.belongsToMany(Manga, { through: MangaFavorite });
Manga.belongsToMany(User, { through: MangaFavorite });

export default MangaFavorite;



