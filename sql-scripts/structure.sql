create database if not exists dbSelva;
use dbSelva;
drop table if exists products;
drop table if exists productsCart;
drop table if exists carts;
drop table if exists users;
drop table if exists categories;
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

create table categories (
	id int auto_increment,
    firstName varchar(55) not null,
    primary key (id)
);

create table users (
	id int auto_increment,
    firstName varchar(55) not null,
    lastName varchar(55) not null,
    email  varchar(55) not null,
    password varchar(55) not null,
    avatar varchar(55) not null,
    categoryId int not null,
    cud int null,
    primary key (id),
    foreign key (categoryId) references categories(id)
);

create table productsCart (
	id int auto_increment,
    productId int not null,
    quantity int not null,
    price int not null,
    cartId int not null,
    primary key (id),
    foreign key (productId) references products(id)    
);

create table carts (
	id int auto_increment,
    userId int not null,
    productId int not null,
    totalPrice int not null,
    primary key (id),
    foreign key (productId) references productsCart(id),
    foreign key (userId) references users(id)
);

alter table productsCart add foreign key (cartId) references carts(id);