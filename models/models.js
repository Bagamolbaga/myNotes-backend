const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    avatar: {type: DataTypes.STRING}
})

const Note = sequelize.define('note', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.INTEGER, allowNull: false},
    group_id: {type: DataTypes.INTEGER, allowNull: false},
    fixed: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const Group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.INTEGER, allowNull: false},
})





// User.hasMany(Note)
// Note.belongsTo(User)

// User.hasMany(Group)
// Group.belongsTo(User)

// Note.hasOne(Group)
// Group.belongsTo(Note)



// User.hasMany(Note)
// Note.belongsTo(User)

// User.hasMany(Group)
// Group.belongsTo(User)

// Note.hasOne(User)
// User.belongsTo(Note, {
//     as: 'Current',
//     foreignKey: 'currentVersionId',
//     constraints: false
// })

// Note.hasOne(Group)
// Group.belongsTo(Note)

// Group.hasOne(User)
// User.belongsTo(Group)

// Group.hasMany(Note)
// Note.belongsTo(Group)

module.exports = {
    User,
    Note,
    Group,
}