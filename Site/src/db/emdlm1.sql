-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2021 a las 05:41:39
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6
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
  `discount` tinyint(4) DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `discount`, `id_category`, `id_brand`, `image`) VALUES
(2, 'Bajo K19', 'Bajo electrico de 5 cuerdas', '22340.00', 25, 2, 1, 'Producto-6.jpg'),
(3, 'Bateria', 'Batería de 5 cuerpos con parches especiales', '8450.00', 0, 3, 4, 'Producto-8.jpg'),
(4, 'Teclado', 'Teclado sensitivo de 61 teclas', '16850.00', 10, 4, 3, 'product-1620692327074.jpg'),
(6, 'Microfono', 'Micrófono semi profesional con estuche', '19870.00', 30, 6, 2, 'product-1620698029487.jpg'),
(7, 'Guitarra', 'Guitarra Criolla de estudio superior', '42000.00', 40, 1, 4, 'product-1620692860327.jpg'),
(8, 'Bateria', 'Bajo de 4 cuerdas color azul', '22900.00', 0, 1, 1, 'product-1621388369445.jpg'),
(9, 'Bateria', 'Batería eléctrica 10101', '102680.00', 10, 1, 1, 'product-1621388435371.jpg'),
(10, 'Teclado', 'Teclado de pie electronico', '52960.00', 0, 4, 4, 'product-1620696500683.jpg'),
(11, 'Pua dura', 'Pua dura marca Fender', '1680.00', 5, 5, 2, 'product-1620697954423.jpg'),
(12, 'Consola', 'Consola profesional de 48 canales', '15000.00', 0, 5, 2, 'product-1620698108468.jpg'),
(18, 'Cuerda ', 'Cuerda de Guitarra para guitarra electrica', '500.00', 0, 5, 4, 'product-1620697799377.jpeg'),
(44, 'Guitarra A812', 'Este es un hermoso producto de regalo', '30000.00', 15, 1, 1, 'product-1621388615119.jpg'),
(49, 'Mega Bass', 'probando subida de foto', '1000.00', 0, 1, 1, 'product-1620692477875.jpg'),
(50, 'Degradada', 'pppppppppppppppp ppppp pppppp', '70000.00', 0, 1, 2, 'product-1621104409071.jpg'),
(53, 'Guitarra 18.0', 'Esta es una mega guitarra perro', '1000.00', 0, 1, 2, 'product-1621199451969.jpg'),
(58, 'Bajo De 10', 'asdasdas adasd 12 1e2', '8000.00', 10, 1, 1, 'product-1621388595827.jpg');

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
(2, 'Landos', 'Cortes', 'Lando@DH.com', '$2a$10$JwWcdTQJZ7WBx3YfH7yV5eR/X2Bx1UZyHeA.ThfupmTRhY10e96vy', 'Callao 1890', 1139780476, 'user-1621105453926.jpeg', 2),
(7, 'Diego', 'Matti', 'Dmatt@matt.com', '$2a$10$pJTETsX.hpaWwzC2ZIiSe.lUWcS4zdffyVF.D/.Z3/EXqj8jZQz6e', 'pepe25', 12345678, 'user-1621104619223.JPG', 1),
(31, 'Agustin', 'Garcia', 'agusting-j21@hotmail.com', '$2a$10$uzq.j93jURpKtYrsOodIWu5TkRnUR/.H7eoIkxhH0h8vmM6dwTTHO', 'Av Corrientes', 12345678, 'user-1621395085577.jpg', 1);

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
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

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
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

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
