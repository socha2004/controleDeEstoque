/*ALTER TABLE consumivel
CHANGE usuarioCadastro idUsuario INTEGER;
*/

ALTER TABLE saidas
CHANGE usuarioSaida idUsuario INTEGER;

ALTER TABLE saidas
ADD COLUMN idProduto INTEGER;

ALTER TABLE consumivel 
ADD FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario);

ALTER TABLE saidas
ADD FOREIGN KEY (idProduto) REFERENCES consumivel(idConsumivel);