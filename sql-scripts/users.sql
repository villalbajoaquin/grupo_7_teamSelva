use dbSelva;
insert into users (firstName, lastName, email, password, avatar, categoryId)
values 
	("Pedro",
    "Gaston",
    "Pedro@gmail.com",
    "$2a$10$lh8vNlV5Em5tQVxTButtnuhj7UrE.g5N6v5C.lugxfaSCekW/rtfi",
    "img/users/1663133810288_pdt_.jpg",
    "2");
select * from users;