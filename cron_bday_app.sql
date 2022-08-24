--CREATE DATABASE cron_app_data;
--CREATE SCHEMA user_info;
--DROP TABLE IF EXISTS user_info.user_data
/*create table user_info.user_data_table(
	id int primary key identity,
	username varchar(255) not null,
	email varchar(255) not null,
	dob varchar(255) not null,
	gender varchar(6) not null	
)*/
--ALTER TABLE user_info.user_data ALTER COLUMN DOB DATE;
--INSERT INTO user_info.user_data_table(username,email,dob,gender) VALUES ('ashish','ashishjan14may@gmail.com','24-8-1999','male');

--select * from user_info.user_data_table;
--SELECT * FROM [user_info].[user_data_table]

--SELECT [username],[email] FROM [user_info].[user_data_table] WHERE [dob] LIKE '[24-8]%';