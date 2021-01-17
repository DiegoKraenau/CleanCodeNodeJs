module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        "courses",
        {
            name: DataTypes.STRING,
            status: DataTypes.STRING
        },
        {
            tableName:"courses",
            timestamps:false
        }
    );
   

    Course.associate = function(models){
        Course.belongsToMany(models.users,{
            through: "userCourses",
            as: "users",
            foreignKey: "courseId"
        });

        Course.belongsTo(models.lectures,{
            foreignKey: "lectureId",
            as: "lectures"
        });
    }

    return Course;
};