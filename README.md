# Calculadora de Hipootenusa Web

Projeto realizado com React, Node.Js e Mysql.

## Instalando em sua maquina


### `cd frontend` e `npm install`
use os comendos acima para instalar dependencias do front-end.
após isso voce pode usar `npm start`

### `cd api` e `npm install`
use os comendos acima para instalar as dependencias do back-end
voce também criar o banco de dadose uma tabela e configurar a conexao do seu bd
em `/api/db.js` com seu host,user,password e database.

```sql
CREATE TABLE IF NOT EXISTS history (
id INT PRIMARY KEY AUTO_INCREMENT,
catetoAd DECIMAL(3,1),
catetoOp DECIMAL(3,1),
hipotenusa DECIMAL(3,1),
currentDate TIMESTAMP
);
```
##Print:
<img src="https://i.imgur.com/irm9wQ7.png" />
