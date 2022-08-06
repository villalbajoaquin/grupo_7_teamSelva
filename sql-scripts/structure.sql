create database if not exists dbSelva;
use dbSelva;
drop table if exists products;
create table products (
	id int auto_increment,
    name varchar(55) not null,
    imgsrc varchar(55) not null,
    date date not null,
    time time not null,
    tickets int not null,
    price int not null,
    primary key (id)
);
drop table if exists productsCart;
create table productsCart (
	id int auto_increment,
    productId int not null,
    quantity int not null,
    price int not null,
    cartId int not null,
    primary key (id)
);
drop table if exists carts;
create table carts (
	id int auto_increment,
    userId int not null,
    productId int not null,
    totalPrice int not null,
    primary key (id)
);
drop table if exists users;
create table users (
	id int auto_increment,
    firstName varchar(55) not null,
    lastName varchar(55) not null,
    email  varchar(55) not null,
    password varchar(55) not null,
    avatar varchar(55) not null,
    categoryId int not null,
    cud int null,
    primary key (id)
);
drop table if exists categories;
create table categories (
	id int auto_increment,
    firstName varchar(55) not null,
    primary key (id)
);