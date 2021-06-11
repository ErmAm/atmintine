
INSERT INTO user(id, username,name, surname, email, phone_number, city )
VALUES
('00000000-0000-000a-000f-000000000001', 'admin','Jonas', 'Jonaitis', 'skubu@go.org','+37068000003','Vilnius'),
('00000000-0000-000a-000f-000000000002', 'user','Šaltenis', 'Pavardenis', 'popa@go.org','+37068000002','Kaunas'),
('00000000-0000-000a-000f-000000000003', 'open','Skiepas', 'Gudžiauskas', 'mama@mya.io','+37068000047','Klaipėda'),
('00000000-0000-000a-000f-000000000004', 'pleb1','James', 'Doe', 'very@go.org','+37068000001','Užventė')
;


INSERT INTO tagitem(id, name,latitude,longitude,description,real_place_name,has_shed,has_fireplace,has_wc,has_lake_nearby)
VALUES
('00000000-f000-000a-000f-000000000001','Pušinelis','52.44423','24.56444','Viskas labai gerai','Trakai',true,true,true,true),
('00000000-f000-000a-000f-000000000002','Vaivadiškės','52.41423','24.54444','Dalykai','Semeniškės',true,false,false,true),
('00000000-f000-000a-000f-000000000003','Kempinkiemis','52.49423','24.53444','Dalykai','Semeniškės',true,false,false,true)
;