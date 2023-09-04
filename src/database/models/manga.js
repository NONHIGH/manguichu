import db from '../db_connection.js';
import { DataTypes } from 'sequelize';

const Manga = db.define('Manga', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(150),

    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true,

    },
    genres: {
        type: DataTypes.ENUM("Shonen", "Shojo", "Seinen", "Josei", "Mecha", "Fantasía", "Ciencia ficción", "Misterio", "Horror", "Deportes", "Slice of Life", "Harem", "Isekai", "Yuri", "Yaoi"),
    },
    state: {
        type: DataTypes.ENUM("Pending", "Publishing", "Cancelled", "Paused"),
        defaultValue: "Pending",
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});




export default Manga

import Capitulo from './chapter.js';

Manga.hasMany(Capitulo, {
    foreignKey: 'manga_id',
    as: 'capitulos'
})