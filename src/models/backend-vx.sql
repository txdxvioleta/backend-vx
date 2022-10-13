-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-10-2022 a las 10:18:47
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `backend-vx`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(5) NOT NULL,
  `nombre_categ` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre_categ`) VALUES
(1, 'alimentos'),
(2, 'bebidas'),
(3, 'celulares'),
(4, 'computacion'),
(5, 'ropa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `id_orden` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ordenes`
--

INSERT INTO `ordenes` (`id_orden`) VALUES
(1),
(3),
(6),
(7),
(8),
(9),
(10),
(13),
(14),
(15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_prod` int(5) NOT NULL,
  `nombre_prod` varchar(150) NOT NULL,
  `precio_prod` int(11) NOT NULL,
  `descripcion_prod` varchar(500) NOT NULL,
  `id_categ` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_prod`, `nombre_prod`, `precio_prod`, `descripcion_prod`, `id_categ`) VALUES
(1, 'Notebook gamer', 450000, 'Notebook gamer Asus Rog Strix G15 G513RM eclipse gray 15.6\", AMD Ryzen 7 6800H 16GB de RAM 512GB SSD, Nvidia RTX 3060 165 Hz Resolución:2560x1440px, Windows 11 Home', 4),
(2, 'Coca Cola', 500, 'Gaseosa Coca cola de 3 litros', 2),
(3, 'Pizza', 1000, 'Pizza fugazzeta', 1),
(5, 'Puré de tomate', 200, '', 1),
(6, 'Samsung galaxy a50', 45000, 'Celular samsung galaxy a50 gama media', 3),
(7, 'Milanesa con papas', 800, 'Comida para llevar', 1),
(8, 'Hamburguesa', 700, 'comida para llevar', 1),
(9, 'milanesa con papas', 500, 'comida', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_orden`
--

CREATE TABLE `product_orden` (
  `id` int(5) NOT NULL,
  `id_prod` int(5) NOT NULL,
  `id_orden` int(5) NOT NULL,
  `cantidad` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product_orden`
--

INSERT INTO `product_orden` (`id`, `id_prod`, `id_orden`, `cantidad`) VALUES
(1, 2, 1, 2),
(3, 9, 1, 1),
(7, 5, 10, 2),
(8, 9, 3, 2),
(9, 9, 7, 10),
(20, 2, 3, 3),
(24, 5, 1, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`id_orden`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_prod`),
  ADD KEY `fk_id_categoria` (`id_categ`);

--
-- Indices de la tabla `product_orden`
--
ALTER TABLE `product_orden`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fk_id_prod` (`id_prod`,`id_orden`) USING BTREE,
  ADD KEY `fk_id_orden` (`id_orden`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id_orden` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_prod` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `product_orden`
--
ALTER TABLE `product_orden`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_id_categoria` FOREIGN KEY (`id_categ`) REFERENCES `categorias` (`id_categoria`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `product_orden`
--
ALTER TABLE `product_orden`
  ADD CONSTRAINT `product_orden_ibfk_1` FOREIGN KEY (`id_prod`) REFERENCES `productos` (`id_prod`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `product_orden_ibfk_2` FOREIGN KEY (`id_orden`) REFERENCES `ordenes` (`id_orden`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
