
INSERT INTO user(id, username, password, name, surname, email, phone_number, city)
VALUES
('00000000-0000-000a-000f-000000000001','admin','$2y$10$UQnqr7hOZPuqQixtLcuijODPvPdnp4D3LUYWulOrr4C7yLKy19TMe', 'Jonas', 'Jonaitis', 'skubu@go.org','+37068000003','Vilnius'),
('00000000-0000-000a-000f-000000000002', 'user','$2y$12$Asaa8kGQMLq5IQ2LNb2VEeF6zKX4larg/rvALtrzLlJhczyl6teWC','Šaltenis', 'Pavardenis', 'popa@go.org','+37068000002','Kaunas'),
('00000000-0000-000a-000f-000000000003', 'open','{bcrypt}$2y$12$Asaa8kGQMLq5IQ2LNb2VEeF6zKX4larg/rvALtrzLlJhczyl6teWC','Skiepas', 'Gudžiauskas', 'mama@mya.io','+37068000047','Klaipėda'),
('00000000-0000-000a-000f-000000000004', 'pleb1','{bcrypt}$2y$12$Asaa8kGQMLq5IQ2LNb2VEeF6zKX4larg/rvALtrzLlJhczyl6teWC','James', 'Doe', 'very@go.org','+37068000001','Užventė')
;


INSERT INTO tagitem(id, name,latitude,longitude,description,real_place_name,has_shed,has_fireplace,has_wc,has_lake_nearby)
VALUES
('00000000-f000-000a-000f-000000000001','Pušinelis','52.44423','24.56444','Viskas labai gerai','Trakai',true,true,true,true),
('00000000-f000-000a-000f-000000000002','Vaivadiškės','52.41423','24.54444','Dalykai','Semeniškės',true,false,false,true),
('00000000-f000-000a-000f-000000000003','Kempinkiemis','52.49423','24.53444','Dalykai','Semeniškės',true,false,false,true)
;


INSERT INTO roles(id, name)
VALUES
('0000000b-0000-000a-000f-000000000001', 'ADMIN'),
('0000000b-0000-000a-000f-000000000002', 'USER')
;


# Čia rolių surišimas su useriais.
INSERT INTO user_roles(user_id, roles_id)
VALUES('00000000-0000-000a-000f-000000000001', '0000000b-0000-000a-000f-000000000001'),
      ('00000000-0000-000a-000f-000000000002', '0000000b-0000-000a-000f-000000000002')
;

INSERT INTO comment(id,content,username)
VALUES ('0000000c-0000-0000-000c-000000000001','Visoks tekstas','pleb1')
;