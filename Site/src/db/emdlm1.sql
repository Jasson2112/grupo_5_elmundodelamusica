-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-05-2021 a las 20:32:25
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

CREATE database emdlm1;

USE emdlm1;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `emdlm1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(1500) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `discount` decimal(3,2) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `discount`, `id_category`, `id_brand`, `image`) VALUES
(2, 'Bajo electrico', 'Bajo electrico de 5 cuerdas', '22340.00', '0.05', 2, 1, 'Producto-6.jpg'),
(3, 'Bateria', 'Batería de 5 cuerpos con parches especiales', '8450.00', '0.15', 3, 4, 'Producto-8.jpg'),
(4, 'Teclado', 'Teclado sensitivo de 61 teclas', '16850.00', '0.10', 4, 3, 'product-1620692327074.jpg'),
(6, 'Microfono', 'Micrófono semi profesional con estuche', '19870.00', '0.12', 6, 2, 'product-1620698029487.jpg'),
(7, 'Guitarra', 'Guitarra Criolla de estudio superior', '42000.00', '0.08', 1, 4, 'product-1620692860327.jpg'),
(8, 'Bajo', 'Bajo de 4 cuerdas color azul', '22900.00', '0.10', 5, 1, 'Producto-8.jpg'),
(9, 'Bateria', 'Batería eléctrica', '102680.00', '0.30', 3, 2, 'Producto-9.jpg'),
(10, 'Teclado', 'Teclado de pie electronico', '52960.00', '0.10', 4, 4, 'product-1620696500683.jpg'),
(11, 'Pua dura', 'Pua dura marca Fender', '1680.00', '0.10', 5, 2, 'product-1620697954423.jpg'),
(12, 'Consola', 'Consola profesional de 48 canales', '15000.00', '0.12', 5, 2, 'product-1620698108468.jpg'),
(18, 'Cuerda ', 'Cuerda de Guitarra para guitarra electrica', '500.00', '0.50', 5, 4, 'product-1620697799377.jpeg'),
(43, '', '', '0.00', '0.00', 1, 1, 'default.png'),
(44, 'SUBIRsi', 'pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp', '12.00', '1.00', 1, 1, 'default.png'),
(47, 'prueba', 'popopopop  pokpk p p pkpo kñlkñlñlk   ñlkñlklkñk  ñlkñlk', '1000.00', '9.99', 1, 1, 'default.png'),
(48, 'nuevo prueba foto', 'Probando la subida de Foto', '1000.00', '9.99', 1, 1, 'default.png'),
(49, 'nuevo prueba foto', 'probando subida de foto', '1000.00', '9.99', 1, 1, 'product-1620692477875.jpg'),
(50, 'nuevo Producto', 'pppppppppppppppp ppppp pppppp pppppp', '3000.00', '5.00', 1, 1, 'default.png'),
(51, 'produccto', 'pp p p p ppppppp p p p ppppp p p', '99999.00', '9.00', 1, 1, 'default.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_brand`
--

CREATE TABLE `product_brand` (
  `id_brand` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_brand`
--

INSERT INTO `product_brand` (`id_brand`, `name`) VALUES
(1, 'Gibson'),
(2, 'Fender'),
(3, 'Ibanez'),
(4, 'Epiphone');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_category`
--

CREATE TABLE `product_category` (
  `id_category` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_category`
--

INSERT INTO `product_category` (`id_category`, `name`) VALUES
(1, 'Guitarra'),
(2, 'Bajo'),
(3, 'Bateria'),
(4, 'Teclado'),
(5, 'Accesorios'),
(6, 'Microfono');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `address` varchar(50) NOT NULL,
  `tel` int(11) NOT NULL,
  `image` varchar(50) NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `address`, `tel`, `image`, `id_category`) VALUES
(1, 'Juan', 'paez', 'senosfue@bariloche.com', '$2a$10$p/.y4VMJxFhhqS/rHH3yluyCw9cLuDE1wng4d1Pa6Bma79A8FHUUq', 'Pichincha 123', 1132212344, 'userDefault.png', 1),
(2, 'Landomodificado', 'Cortes', 'Lando@DH.com', '$2a$10$kFxPKKx3AxKz3FFhq6/xV.AvparUmTG5XHW8r.2V9zgxOfnZht28m', 'Callao 1890', 1139780476, 'user-1620704730340.jpeg', 2),
(6, 'Agustin', 'Garcia', 'agus@a.com', '$2a$10$Iqv91EU4D6ouFq7/IJQlpeH0DX6fPcwJa.6z3XhhsJBAo4q4w6kSu', 'pepe2', 99, 'userDefault.png', 1),
(7, 'Diego', 'Matt', 'Dmatt@matt.com', '$2a$10$M5UCic7VpyzK7hxYkqzyFenxSvWYIwa7rXfkQf8a7osduMY2QMu..', 'pepe25', 12345678, 'user-1620877974868.JPG', 1),
(8, 'damian', 'nuevamentemodificado ', 'user@user.com', '$2a$10$dlUKHnuKkekX1kEnxW9vHOZg9CnmMMN1CN4tvlpNzhiJ3Q/yI3J96', 'pepemodificadoII', 2147483647, 'user-1620771483466.jpg', 2),
(19, 'MODIFICA F', 'duplicacion modi', 'user@usermodi1.com', '$2a$10$uhzZIJnV39XDMaEVrza/he5ump3PhYK6d0F9GHfw7SJp7xcahRyUy', 'pr modi', 9900, 'userDefault.png', 2),
(20, 'Ingreso', 'Nuevo', 'Innuevo@gmail.com', '$2a$10$1M0hfEgsiV3XwZnNSNiHTea0Z7xjsrZdSG8dbzOL9EhGMpQLWUFBq', 'chaco 111', 3333333, 'userDefault.png', 2),
(23, 'PEPE', 'ooooooooo', 'Dmatt@matyyt.com', '$2a$10$ewm8OhAl9RP54ehi5bXUQODEA7TEP0PtM0bCch/7lwRMvUNQ8ADrO', '111111111', 1111111, 'userDefault.png', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_category`
--

CREATE TABLE `user_category` (
  `id_category` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_category`
--

INSERT INTO `user_category` (`id_category`, `name`) VALUES
(1, 'admin'),
(2, 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_brand` (`id_brand`);

--
-- Indices de la tabla `product_brand`
--
ALTER TABLE `product_brand`
  ADD PRIMARY KEY (`id_brand`);

--
-- Indices de la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id_category`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `product_brand`
--
ALTER TABLE `product_brand`
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `product_category` (`id_category`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_brand`) REFERENCES `product_brand` (`id_brand`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `user_category` (`id_category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
