-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-04-2021 a las 19:07:51
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `emdlm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buy`
--

CREATE TABLE `buy` (
  `id_buy` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `buy`
--

INSERT INTO `buy` (`id_buy`, `date`, `user_id`) VALUES
(1, '2021-01-01 12:01:00', 1),
(2, '2021-10-21 12:01:00', 4),
(3, '2021-11-09 12:01:00', 2),
(4, '2021-11-10 12:01:00', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buy_detail`
--

CREATE TABLE `buy_detail` (
  `id` int(11) NOT NULL,
  `id_buy` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `buy_detail`
--

INSERT INTO `buy_detail` (`id`, `id_buy`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 6, 4, '17870.00'),
(2, 1, 1, 1, '12680.00'),
(3, 2, 12, 2, '14000.00'),
(4, 3, 4, 1, '16800.00'),
(5, 3, 8, 3, '22900.00'),
(6, 3, 9, 1, '102680.00'),
(7, 4, 2, 1, '22340.00');

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
(1, 'Gitarra electrica', 'Guitarra electrica de 6 cuerdas', '12680.00', '0.10', 1, 1, 'Producto-1.jpg'),
(2, 'Bajo', 'Bajo de 5 cuerdas', '22340.00', '0.05', 2, 2, 'Producto-2.jpg'),
(3, 'Bateria', 'Batería de 5 cuerpos con parches especiales', '18450.00', '0.15', 3, 4, 'Producto-3.jpg'),
(4, 'Teclado', 'Teclado sensitivo de 61 teclas', '16850.00', '0.10', 4, 3, 'Producto-4.jpg'),
(5, 'Accesorios', 'Cuerda de Guitarra', '2000.00', '0.20', 5, 3, 'Producto-5.jpg'),
(6, 'Mirofono', 'Micrófono semi profesional con estuche', '19870.00', '0.12', 6, 2, 'Producto-6.jpg'),
(7, 'Gitarra', 'Guitarra Criolla de estudio superior', '42000.00', '0.08', 1, 4, 'Producto-7.jpg'),
(8, 'Bajo', 'Bajo de 4 cuerdas color azul', '22900.00', '0.10', 5, 1, 'Producto-8.jpg'),
(9, 'Bateria', 'Batería eléctrica', '102680.00', '0.30', 3, 2, 'Producto-9.jpg'),
(10, 'Teclado', 'Teclado de pie', '52960.00', '0.14', 4, 4, 'Producto-10.jpg'),
(11, 'Accesorios', 'Pallilos para batería Nª 5', '1680.00', '0.10', 5, 3, 'Producto-11.jpg'),
(12, 'Mirofono', 'Micrófono Profesional inalambrico', '15000.00', '0.12', 6, 1, 'Producto-12.jpg');

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
(1, 'Gitarra'),
(2, 'Bajo'),
(3, 'Bateria'),
(4, 'Teclado'),
(5, 'Accesorios'),
(6, 'Mirofono');

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
(1, 'Juan', 'Perez', 'senosfue@bariloche.com', 'Hola123', 'Pichincha 123', 1132212344, 'user1.png', 2),
(2, 'Manuel', 'Lopez', 'mlopez@gmail.com', 'Chau456', 'Callao 1890', 1139780476, 'user2.png', 2),
(3, 'Gerardo', 'Lazo', 'gerardo@gmail.com', '123PEPE', 'Pierre 9721', 1128646501, 'user3.png', 2),
(4, 'Alberto', 'Paniagua', 'alberto@gmail.com', 'Pepo456', 'Lavalle 3489', 1108469305, 'user4.png', 1);

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
-- Indices de la tabla `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`id_buy`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `buy_detail`
--
ALTER TABLE `buy_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_buy` (`id_buy`),
  ADD KEY `product_id` (`product_id`);

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
-- AUTO_INCREMENT de la tabla `buy`
--
ALTER TABLE `buy`
  MODIFY `id_buy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `buy_detail`
--
ALTER TABLE `buy_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `buy`
--
ALTER TABLE `buy`
  ADD CONSTRAINT `buy_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `buy_detail`
--
ALTER TABLE `buy_detail`
  ADD CONSTRAINT `buy_detail_ibfk_1` FOREIGN KEY (`id_buy`) REFERENCES `buy` (`id_buy`),
  ADD CONSTRAINT `buy_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

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
