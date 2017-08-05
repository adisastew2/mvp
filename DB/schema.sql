drop database if exists notes;
create database notes;
use notes;

create table things(
  id int not null auto_increment,
  name varchar(100) not null,
  msg varchar(200) not null,
  primary key (id)
);