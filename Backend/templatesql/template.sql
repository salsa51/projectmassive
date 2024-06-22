-- create TABLE user (
-- 	id int auto_increment primary key,
--     username varchar(50) not null,
--     password varchar(50) not null
-- );

create table user (
id int auto_increment primary key , 
username varchar (255),
email varchar (255),
password varchar (255),
address varchar (255) 
);

-- insert into user(username) values
-- 	("Rani","12345"), 
-- 	("Gantara","gantara");