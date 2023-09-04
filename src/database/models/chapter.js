import db from '../db_connection.js';
import { DataTypes } from 'sequelize';
import Manga from './manga.js';

const Capitulo = db.define('Capitulo', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    listImages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        validate: {
            contains: 'https://'
        }
    },
    manga_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Manga,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

Capitulo.belongsTo(Manga, {
    foreignKey: 'manga_id',
    as: 'manga'
})

export default Capitulo