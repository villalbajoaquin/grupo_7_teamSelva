use dbSelva;
insert into users (firstName, lastName, email, password, avatar, categoryId)
values 
	("Pedro",
    "Gaston",
    "Pedro@gmail.com",
    "$2a$10$lh8vNlV5Em5tQVxTButtnuhj7UrE.g5N6v5C.lugxfaSCekW/rtfi",
    "img/users/1663133810288_pdt_.jpg",
    "2"),
    ("Ruben Dario",
    "Insua",
    "rbdinsua@gmail.com",
    "$2a$10$P6nR6W1oV7s4Ij4s/riVqe0SZWl5R2G.LTkr7wpuSMToaNjFrMHG2",
    "img/users/1663130395678_pdt_.jpg",
    "2"),
    ("Leandro",
    "Romagnoli",
    "pipiromagnoli@gmail.com",
    "$2a$10$n7R/BMtfBg4cxCfylbrDlO6Ay6gNnJv9kUco/PM5hvo/q9iJc2Ely",
    "img/users/1663130357687_pdt_.jpg",
    "2");
select * from users;