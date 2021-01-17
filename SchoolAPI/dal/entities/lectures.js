

module.exports = (sequelize,DataTypes)=>{
    var Lecturer = sequelize.define(
        "lectures",
        {
            lecturerName:DataTypes.STRING
        },
        {
            tableName: "lectures",
            timestamps: false
        }
    );

    Lecturer.associate = function(models){
        Lecturer.hasOne(models.courses,{
            foreignKey: "lectureId",
            as: "courses"
        });
    };

    return Lecturer;
}