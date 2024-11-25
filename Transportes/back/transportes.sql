-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-11-2024 a las 21:22:48
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'VACACIONES VERANO 2024', '¡No te pierdas los boletos para viajar este verano!', 'Este verano, descubre la comodidad y el ahorro con nuestros boletos de temporada. Hemos añadido nuevas rutas hacia los destinos más populares, con horarios flexibles y tarifas especiales que se ajustan a tus planes.\r\n\r\nConsulta más detalles y compra tus boletos en nuestra página web o puntos de venta autorizados.'),
(2, 'Nuevas unidades disponibles para tus viajes más cómodos', 'Estrena tus vacaciones en un autobús de última generación', 'Este verano, te llevamos a tus destinos favoritos en nuestras nuevas unidades, equipadas con asientos ergonómicos, aire acondicionado y pantallas para entretenimiento durante todo el viaje. Cada unidad ha sido renovada para ofrecerte una experiencia de viaje más cómoda y placentera.'),
(3, '¡Este verano ampliamos nuestras rutas para que viajes más lejos!', ' Nuevos destinos para que tu verano sea aún más emocionante.', 'Nos complace anunciar que hemos ampliado nuestras rutas para que puedas descubrir nuevos destinos durante estas vacaciones. Ahora podrás viajar a lugares más alejados y explorar paisajes sorprendentes sin preocuparte por los largos trayectos.\r\nNuevas conexiones incluyen destinos como la Costa Atlántica y las sierras, con salidas frecuentes para que puedas viajar cuando más te convenga'),
(4, '¡Aprovecha nuestras promociones especiales para este verano!', 'Viaja más por menos con nuestras ofertas exclusivas.', 'Aprovecha nuestras promociones de hasta un 30% de descuento en rutas seleccionadas, disponibles solo por tiempo limitado. Además, si compras tus boletos de ida y vuelta, ¡obtienes un descuento adicional!\r\n\r\nNo dejes pasar esta oportunidad. Reserva tu asiento hoy y comienza a planear tu aventura de verano con nosotros.'),
(6, 'Prueba 3', 'Subtitulo de la prueba 3', 'Hola soy el texto de la prueba 3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'agustin', '731c110542108947840060ad7d996c38');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
