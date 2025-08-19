CREATE TABLE `consumivel` (
	`idConsumivel` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`nomeConsumivel` VARCHAR(255) NOT NULL,
	`qtdConsumivel` INTEGER NOT NULL,
	`marcaConsumivel` VARCHAR(255) DEFAULT 'Genérico',
	`modeloConsumivel` VARCHAR(255) DEFAULT 'Universal',
	`localizacaoConsumivel` VARCHAR(255) NOT NULL DEFAULT 'Tecnologia da Informação',
	`codigoBarras` VARCHAR(255),
	`serialConsumivel` VARCHAR(255),
	`observacaoConsumivel` VARCHAR(255),
	`imagemConsumivel` BLOB,
	`usuarioCadastro` VARCHAR(255) NOT NULL,
	PRIMARY KEY(`idConsumivel`)
);


CREATE TABLE `saidas` (`estoquenansen`
	`idSaida` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`produtoSaida` VARCHAR(255) NOT NULL,
	`usuarioDestino` VARCHAR(255) NOT NULL,
	`localDestino` VARCHAR(255) NOT NULL,
	`telefoneDestino` VARCHAR(255),
	`emailDestino` VARCHAR(255),
	`dataSaida` DATETIME NOT NULL,
	`emprestimo` BOOLEAN DEFAULT false,
	`observacaoSaida` VARCHAR(255),
	`usuarioSaida` VARCHAR(255) NOT NULL,
	PRIMARY KEY(`idSaida`)
);


CREATE TABLE `usuario` (
	`idUsuario` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`nomeUsuario` VARCHAR(255) NOT NULL,
	`roleUsuario` VARCHAR(255) NOT NULL,
	`senhaUsuario` VARCHAR(255) NOT NULL,
	PRIMARY KEY(`idUsuario`)
);
