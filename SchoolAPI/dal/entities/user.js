module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "users",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: "users",
            timestamps: false  //updated and created
        }
    );

    User.associate = function (models) {
        User.belongsTo(models.classrooms, {
            foreignKey: "classroomId",
            as: "classrooms"
        });

        User.belongsToMany(models.courses, {
            through: "userCourses",
            as: "courses",
            foreignKey: "id"
        });
    };

    return User;
};