CREATE DATABASE denuncias_coppel;


CREATE TABLE denuncias (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NULL,
        email VARCHAR(30) NULL,
        telefono VARCHAR(15) NULL ,
        empresa VARCHAR(30) NOT NULL ,
        pais VARCHAR(30) NOT NULL ,
        estado VARCHAR(30) NOT NULL ,
        centro VARCHAR(20) NOT NULL ,
        detalle TEXT NOT NULL ,
        fecha DATE  NOT NULL,
        password VARCHAR(8) NOT NULL,
        folio INTEGER NOT NULL
      );

      CREATE TABLE usuarios (
        id SERIAL PRIMARY KEY,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL
      );

      INSERT INTO usuarios (email, password)
      VALUES ('admin@coppel.com', 'AdminMaster');

      CREATE TABLE comentarios (
        id SERIAL PRIMARY KEY,
        contenido TEXT NOT NULL,
        status VARCHAR(25),
        folio INTEGER REFERENCES denuncias (id),
        usuario_id INTEGER REFERENCES usuarios (id)
      );

      CREATE TABLE pais (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL
      );

       INSERT INTO pais (paises)
      VALUES
        ('Argentina'),
        ('Estados Unidos'),
        ('Mexico')

        CREATE TABLE estados (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        pais_id INTEGER REFERENCES pais (id)
      );

      INSERT INTO estados (nombre, pais_id)
      VALUES
        ('Buenos Aires', 1),
        ('California', 2),
        ('Aguascalientes', 3),
        ('Campeche', 3),
        ('Ciudad de México', 3)


        CREATE TABLE empresa (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL
      );

       INSERT INTO empresa (nombre)
      VALUES
        ('Afore Coppel'),
        ('BanCoppel'),
        ('Coppel')