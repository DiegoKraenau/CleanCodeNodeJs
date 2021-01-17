

module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define(
        "classrooms",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            className: DataTypes.STRING
        },
        {
            tableName: "classrooms",
            timestamps: false
        }
    );


    Classroom.associate = function (models) {
        Classroom.hasMany(models.users, {
            foreignKey: "classroomId",
            as: "users"
        })
    };

    return Classroom;
}