INSERT INTO user_category 
VALUES 
	(1,"admin"),
    (2,"user");

INSERT INTO product_brand
VALUES
	(1,"Gibson"),
    (2,"Fender"),
    (3,"Ibanez"),
    (4,"Epiphone");
    
INSERT INTO product_category
VALUES
	(1,"Gitarra"),
    (2,"Bajo"),
    (3,"Bateria"),
    (4,"Teclado"),
    (5,"Accesorios"),
    (6,"Mirofono");
    
INSERT INTO products
VALUES
	(1,"Gitarra electrica", "Guitarra electrica de 6 cuerdas", 12680, 0.10, 1, 1, "Producto-1.jpg"),
    (2,"Bajo", "Bajo de 5 cuerdas", 22340, 0.05, 2, 2, "Producto-2.jpg"),
    (3,"Bateria", "Batería de 5 cuerpos con parches especiales", 18450, 0.15, 3, 4, "Producto-3.jpg"),
    (4,"Teclado", "Teclado sensitivo de 61 teclas", 16850, 0.10, 4, 3, "Producto-4.jpg"),
    (5,"Accesorios", "Cuerda de Guitarra", 2000, 0.20, 5, 3, "Producto-5.jpg"),
    (6,"Mirofono", "Micrófono semi profesional con estuche", 19870, 0.12, 6, 2, "Producto-6.jpg"),
    (7,"Gitarra", "Guitarra Criolla de estudio superior", 42000, 0.08, 1, 4, "Producto-7.jpg"),
    (8,"Bajo", "Bajo de 4 cuerdas color azul", 22900, 0.10, 5, 1, "Producto-8.jpg"),
    (9,"Bateria", "Batería eléctrica", 102680, 0.30, 3, 2, "Producto-9.jpg"),
    (10,"Teclado", "Teclado de pie", 52960, 0.14, 4, 4, "Producto-10.jpg"),
    (11,"Accesorios", "Pallilos para batería Nª 5", 1680, 0.10, 5, 3, "Producto-11.jpg"),
    (12,"Mirofono", "Micrófono Profesional inalambrico", 15000, 0.12, 6, 1, "Producto-12.jpg");
    
INSERT INTO users
VALUES
	(1, "Juan","Perez","senosfue@bariloche.com","Hola123", "Pichincha 123", "1132212344","user1.png", 2),
	(2, "Manuel","Lopez","mlopez@gmail.com","Chau456", "Callao 1890", "1139780476","user2.png", 2),
	(3, "Gerardo","Lazo","gerardo@gmail.com","123PEPE", "Pierre 9721", "1128646501","user3.png", 2),
    (4, "Alberto","Paniagua","alberto@gmail.com","Pepo456", "Lavalle 3489", "1108469305","user4.png", 1);
    

    
    