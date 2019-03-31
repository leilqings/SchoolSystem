create table student
(
    ID             varchar(9) primary key,
    PWD            varchar(20) not null,
    Name           varchar(10) not null,
    Class          varchar(7)  not null,
    Sex            varchar(2)  not null,
    Date_of_Birth  date        not null,
    Age            varchar(2)  not null,
    Admission_Time date        not null,
    Birth_Place    varchar(50) not null,
    Phone          varchar(15),
    dormitory      varchar(10),
    check ( Sex = '男' or Sex = '女')
);

create table teacher
(
    ID            varchar(9) primary key,
    PWD           varchar(20) not null,
    Name          varchar(10) not null,
    Sex           varchar(2)  not null,
    Date_of_Birth date        not null,
    Age           varchar(2)  not null,
    Entry_Time    date        not null,
    Birth_Place   varchar(50) not null,
    Phone         varchar(15) not null,
    check ( Sex = '男' or Sex = '女')
);

create table course
(
    ID          varchar(9) primary key,
    Name        varchar(10) not null,
    Course_Type varchar(5)  not null,
    Start_Time  varchar(2)  not null,
    Period      varchar(3)  not null,
    Teacher_ID  varchar(9),
    foreign key (Teacher_ID) references teacher (ID),
    check ( Course_Type = '必修' or Course_Type = '选修')
);

create table electoral
(
    Student_ID varchar(9) primary key,
    Course_ID  varchar(9) not null,
    foreign key (Student_ID) references student (ID),
    foreign key (Course_ID) references course (ID)
);

create table score
(
    Student_ID varchar(9) primary key,
    Course_ID  varchar(9) not null,
    Score      varchar(4) not null,
    foreign key (Student_ID) references student (ID),
    foreign key (Course_ID) references course (ID)
);

INSERT INTO `schoolsystem`.`student` (`ID`, `Name`, `Class`, `Sex`, `Date_of_Birth`, `Age`, `Admission_Time`, `Birth_Place`, `Phone`, `dormitory`, `PWD`) VALUES ('20190001', '张三', '7年纪一班', '男', '2008-03-05', '11', '2018-09-01', '山东省青岛市即墨区', null, null, '123456');