--------------------------------------------------------
-- Archivo creado  - lunes-noviembre-27-2023   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Sequence SEQ_ALQUILER
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_ALQUILER"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 501 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_CARGOS
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_CARGOS"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 181 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_EMPLEADOS
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_EMPLEADOS"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 181 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_MARCAS
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_MARCAS"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 401 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_RESERVAS
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_RESERVAS"  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_TARIFAS
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_TARIFAS"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 181 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_TIPOCLIENTE
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_TIPOCLIENTE"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 61 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_TIPOVEHICULO
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_TIPOVEHICULO"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 221 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_TRIGGERCLIENTES
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_TRIGGERCLIENTES"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_TRIGGERLICENCIA
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_TRIGGERLICENCIA"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEQ_TRIGGERVEHICULOS
--------------------------------------------------------

   CREATE SEQUENCE  "ADMINISTRADOR"."SEQ_TRIGGERVEHICULOS"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 41 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Table ALQUILER
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."ALQUILER" 
   (	"FECHA_EMISION" DATE, 
	"FECHA_CONTRATO" DATE, 
	"ID" NUMBER, 
	"KMEMISION" NUMBER, 
	"KMRECEPCION" NUMBER, 
	"KMRECORRIDOS" NUMBER, 
	"CARGOS_ADICIONALES" NUMBER(10,2), 
	"TOTAL" NUMBER(10,2), 
	"PLACA_VEHICULOS" VARCHAR2(7 BYTE), 
	"CC_CLIENTES" VARCHAR2(15 BYTE), 
	"ID_EMPLEADOS" NUMBER, 
	"VALOR_INICIAL" NUMBER, 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI', 
	"FECHA_RECEPCION" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table CARGOS
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."CARGOS" 
   (	"ID_CARGO" NUMBER, 
	"NOMBRE" VARCHAR2(28 BYTE), 
	"ADMINISTRACION" VARCHAR2(2 BYTE), 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI'
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table CLIENTES
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."CLIENTES" 
   (	"NOMBRE_COMPLETO" VARCHAR2(50 BYTE), 
	"CC" VARCHAR2(15 BYTE), 
	"FECHA_NACIMIENTO" DATE, 
	"N_LICENCIA" VARCHAR2(10 BYTE), 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI', 
	"CORREO" VARCHAR2(100 BYTE), 
	"TELEFONO" VARCHAR2(12 BYTE), 
	"CONTRASENA" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table EMPLEADOS
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."EMPLEADOS" 
   (	"CORREO" VARCHAR2(40 BYTE), 
	"CLAVE" VARCHAR2(25 BYTE), 
	"ID" NUMBER, 
	"ID_CARGO" NUMBER, 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI'
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table MARCAS
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."MARCAS" 
   (	"ID_MARCA" NUMBER, 
	"NOMBRE" VARCHAR2(10 BYTE), 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI'
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table RESERVAS
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."RESERVAS" 
   (	"ID_RESERVA" NUMBER, 
	"FECHA_INICIO" DATE, 
	"FECHA_FINAL" DATE, 
	"CC_CLIENTE" VARCHAR2(15 BYTE), 
	"PLACA_VEHICULO" VARCHAR2(7 BYTE), 
	"DISPONIBLE" VARCHAR2(2 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table TARIFAS
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."TARIFAS" 
   (	"ID" NUMBER, 
	"NOMBRE" VARCHAR2(100 BYTE), 
	"PRECIO" NUMBER, 
	"VALORDIA" NUMBER, 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI'
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table TIPOVEHICULO
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."TIPOVEHICULO" 
   (	"ID" NUMBER, 
	"NOMBRE" VARCHAR2(50 BYTE), 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI'
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Table VEHICULOS
--------------------------------------------------------

  CREATE TABLE "ADMINISTRADOR"."VEHICULOS" 
   (	"PLACA" VARCHAR2(30 BYTE), 
	"ID_TIPOVEHICULO" NUMBER, 
	"MODELO" VARCHAR2(40 BYTE), 
	"ID_MARCA" NUMBER, 
	"ID_TARIFAS" NUMBER, 
	"DISPONIBLE" VARCHAR2(2 BYTE) DEFAULT 'SI', 
	"YEAR" VARCHAR2(4 BYTE), 
	"URL" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
REM INSERTING into ADMINISTRADOR.ALQUILER
SET DEFINE OFF;
Insert into ADMINISTRADOR.ALQUILER (FECHA_EMISION,FECHA_CONTRATO,ID,KMEMISION,KMRECEPCION,KMRECORRIDOS,CARGOS_ADICIONALES,TOTAL,PLACA_VEHICULOS,CC_CLIENTES,ID_EMPLEADOS,VALOR_INICIAL,DISPONIBLE,FECHA_RECEPCION) values (to_date('21/11/2023','DD/MM/YYYY'),to_date('24/11/2023','DD/MM/YYYY'),'462','500','700','200','75000','225000','ABC-123','1000933','161','150000','SI',to_date('25/11/2023','DD/MM/YYYY'));
Insert into ADMINISTRADOR.ALQUILER (FECHA_EMISION,FECHA_CONTRATO,ID,KMEMISION,KMRECEPCION,KMRECORRIDOS,CARGOS_ADICIONALES,TOTAL,PLACA_VEHICULOS,CC_CLIENTES,ID_EMPLEADOS,VALOR_INICIAL,DISPONIBLE,FECHA_RECEPCION) values (to_date('20/11/2023','DD/MM/YYYY'),to_date('28/11/2023','DD/MM/YYYY'),'442','1000','1500','500','200000','500000','DEF-234','1003838838','161','300000','NO',to_date('30/11/2023','DD/MM/YYYY'));
Insert into ADMINISTRADOR.ALQUILER (FECHA_EMISION,FECHA_CONTRATO,ID,KMEMISION,KMRECEPCION,KMRECORRIDOS,CARGOS_ADICIONALES,TOTAL,PLACA_VEHICULOS,CC_CLIENTES,ID_EMPLEADOS,VALOR_INICIAL,DISPONIBLE,FECHA_RECEPCION) values (to_date('17/11/2023','DD/MM/YYYY'),to_date('27/11/2023','DD/MM/YYYY'),'482','10000','20000','10000','150000','300000','ABC-321','1003838838','161','150000','SI',to_date('29/11/2023','DD/MM/YYYY'));
Insert into ADMINISTRADOR.ALQUILER (FECHA_EMISION,FECHA_CONTRATO,ID,KMEMISION,KMRECEPCION,KMRECORRIDOS,CARGOS_ADICIONALES,TOTAL,PLACA_VEHICULOS,CC_CLIENTES,ID_EMPLEADOS,VALOR_INICIAL,DISPONIBLE,FECHA_RECEPCION) values (to_date('27/11/2023','DD/MM/YYYY'),to_date('28/11/2023','DD/MM/YYYY'),'481','1000',null,null,'0','150000','ABC-321','1000933','161','150000','NO',to_date('28/11/2023','DD/MM/YYYY'));
REM INSERTING into ADMINISTRADOR.CARGOS
SET DEFINE OFF;
Insert into ADMINISTRADOR.CARGOS (ID_CARGO,NOMBRE,ADMINISTRACION,DISPONIBLE) values ('121','Gerente','EA','SI');
Insert into ADMINISTRADOR.CARGOS (ID_CARGO,NOMBRE,ADMINISTRACION,DISPONIBLE) values ('161','Agente de Ventas','EN','SI');
REM INSERTING into ADMINISTRADOR.CLIENTES
SET DEFINE OFF;
Insert into ADMINISTRADOR.CLIENTES (NOMBRE_COMPLETO,CC,FECHA_NACIMIENTO,N_LICENCIA,DISPONIBLE,CORREO,TELEFONO,CONTRASENA) values ('Jesus manuel','199333',to_date('15/11/2023','DD/MM/YYYY'),'33333','SI','dioss.poderoso@gmail.com','3333231','1234');
Insert into ADMINISTRADOR.CLIENTES (NOMBRE_COMPLETO,CC,FECHA_NACIMIENTO,N_LICENCIA,DISPONIBLE,CORREO,TELEFONO,CONTRASENA) values ('Jesus David De La Hoz Peña','1003838838',to_date('16/11/2023','DD/MM/YYYY'),'9999','SI','dd@hotmail.com','133333','9998');
Insert into ADMINISTRADOR.CLIENTES (NOMBRE_COMPLETO,CC,FECHA_NACIMIENTO,N_LICENCIA,DISPONIBLE,CORREO,TELEFONO,CONTRASENA) values ('Jose Martinez','1000933',to_date('24/11/2023','DD/MM/YYYY'),'31111','SI','dd@hotmail.com','333133','6431');
REM INSERTING into ADMINISTRADOR.EMPLEADOS
SET DEFINE OFF;
Insert into ADMINISTRADOR.EMPLEADOS (CORREO,CLAVE,ID,ID_CARGO,DISPONIBLE) values ('dioss.poderoso@gmail.com','321','161','161','SI');
Insert into ADMINISTRADOR.EMPLEADOS (CORREO,CLAVE,ID,ID_CARGO,DISPONIBLE) values ('kraciaos.poderoso@gmail.com','1234','142','161','SI');
Insert into ADMINISTRADOR.EMPLEADOS (CORREO,CLAVE,ID,ID_CARGO,DISPONIBLE) values ('jesusddelahoz@unicesar.edu.co','54321','143','121','SI');
Insert into ADMINISTRADOR.EMPLEADOS (CORREO,CLAVE,ID,ID_CARGO,DISPONIBLE) values ('lo@unicesar.edu.co','156','162','121','SI');
REM INSERTING into ADMINISTRADOR.MARCAS
SET DEFINE OFF;
Insert into ADMINISTRADOR.MARCAS (ID_MARCA,NOMBRE,DISPONIBLE) values ('383','BMW','SI');
Insert into ADMINISTRADOR.MARCAS (ID_MARCA,NOMBRE,DISPONIBLE) values ('384','Kawasaki','SI');
Insert into ADMINISTRADOR.MARCAS (ID_MARCA,NOMBRE,DISPONIBLE) values ('385','Triumph','SI');
Insert into ADMINISTRADOR.MARCAS (ID_MARCA,NOMBRE,DISPONIBLE) values ('386','Ducati','SI');
Insert into ADMINISTRADOR.MARCAS (ID_MARCA,NOMBRE,DISPONIBLE) values ('387','Tesla','SI');
Insert into ADMINISTRADOR.MARCAS (ID_MARCA,NOMBRE,DISPONIBLE) values ('381','Toyota','SI');
Insert into ADMINISTRADOR.MARCAS (ID_MARCA,NOMBRE,DISPONIBLE) values ('382','Ford','SI');
REM INSERTING into ADMINISTRADOR.RESERVAS
SET DEFINE OFF;
REM INSERTING into ADMINISTRADOR.TARIFAS
SET DEFINE OFF;
Insert into ADMINISTRADOR.TARIFAS (ID,NOMBRE,PRECIO,VALORDIA,DISPONIBLE) values ('161','Tarifa Fin de Semana','300000','100000','SI');
Insert into ADMINISTRADOR.TARIFAS (ID,NOMBRE,PRECIO,VALORDIA,DISPONIBLE) values ('121','Tarifa Basica','150000','75000','SI');
Insert into ADMINISTRADOR.TARIFAS (ID,NOMBRE,PRECIO,VALORDIA,DISPONIBLE) values ('141','Tarifa Premium','241000','187500','SI');
REM INSERTING into ADMINISTRADOR.TIPOVEHICULO
SET DEFINE OFF;
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('187','Deportivo','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('201','Motocicleta Deportiva','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('182','Coupé','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('183','SUV','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('184','Camioneta','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('185','Hatchback','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('186','Descapotable','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('188','Chopper','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('189','Touring','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('190','Enduro','SI');
Insert into ADMINISTRADOR.TIPOVEHICULO (ID,NOMBRE,DISPONIBLE) values ('181','Sedán','SI');
REM INSERTING into ADMINISTRADOR.VEHICULOS
SET DEFINE OFF;
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('QWE-321','201','Honda CBR1000RR','384','161','SI','1776','assets/Imagenes/5de893f5-b257-430b-a0fe-41fa14dd75bc.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('GHI-567','184','Tesla Model S','387','141','SI','2000','assets/Imagenes/40f5f13e-9d51-412c-a1f0-e7b1de8fcf07.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('OPQ-456','186','Chevrolet Silverado','385','161','SI','1775','assets/Imagenes/9f96a694-0a0f-475f-a815-085fbce0aa33.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('LMN-987D21','190','Mercedes-Benz C','387','141','NO','1555','assets/Imagenes/ce07e906-4d44-4d06-8293-80040236986f.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('XYZ-890','185','Ford Mustang','381','121','SI','1992','assets/Imagenes/ed5078da-6930-435c-9beb-e0a43c63b5a5.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('UVW-123','183','Nissan Rogue','381','161','SI','1666','assets/Imagenes/36274f67-5278-43d7-a6d1-3b6b00597cd8.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('LMN-987','183','BMW 3 Series','386','141','SI','1991','assets/Imagenes/ee51e339-2f39-4de0-a8c8-b7772546b77c.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('XYZ-456','187','Volkswagen Golf','385','141','SI','1991','assets/Imagenes/a7169ae9-edc7-4b92-a91c-65d496cbbb24.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('ABC-123','185','Toyota Camry','385','121','SI','1999','assets/Imagenes/f9be6b54-efea-4a7a-adc9-18403f2cf8e3.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('MNO-654','189','Suzuki GSX-R750','384','121','SI','1889','assets/Imagenes/39aec9f0-b4b9-4619-9821-1972d20cafb4.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('DEF-234','188','KTM 390 Duke','383','161','SI','1990','assets/Imagenes/93804d8a-90cc-4d54-9c20-0a06242ba1b3.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('XYZ-789','182','KTM 390 Duke','386','161','SI','1886','assets/Imagenes/38ce2510-e3eb-4845-b90f-05b9111d52e9.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('HJK-456','187','Audi Q5','387','121','SI','1776','assets/Imagenes/0e86e84d-5a2c-4191-9839-d8a45a2a12af.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('ABC-321','181','KTM 390 Dukes','382','121','SI','1667','assets/Imagenes/60a3b34f-8628-4ad9-8913-190dda50629f.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('ABC-567','188','KTM 390 Duke','383','121','SI','1886','assets/Imagenes/454684c7-dfdf-4f76-a5c1-66ba3ca673aa.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('XYZ-896','182','Yamaha YZF-R6','387','121','NO','1991','assets/Imagenes/06d2df2a-ef63-40ba-b281-b2ec2984c826.png');
Insert into ADMINISTRADOR.VEHICULOS (PLACA,ID_TIPOVEHICULO,MODELO,ID_MARCA,ID_TARIFAS,DISPONIBLE,YEAR,URL) values ('LMN-987D22','182','Suzuki GSX-R750','384','161','NO','1785','assets/Imagenes/d549a115-02d9-41ba-a4c9-6cb5e7f62e14.png');
--------------------------------------------------------
--  DDL for Index PK_EMPLEADOS_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_EMPLEADOS_ID" ON "ADMINISTRADOR"."EMPLEADOS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Index PK_VEHICULOS_PLACA
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_VEHICULOS_PLACA" ON "ADMINISTRADOR"."VEHICULOS" ("PLACA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Index PK_CLIENTES_CC
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_CLIENTES_CC" ON "ADMINISTRADOR"."CLIENTES" ("CC") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Index PK_TARIFAS_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_TARIFAS_ID" ON "ADMINISTRADOR"."TARIFAS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Index PK_MARCA_ID_MARCA
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_MARCA_ID_MARCA" ON "ADMINISTRADOR"."MARCAS" ("ID_MARCA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Index PK_TIPOVEHICULO_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_TIPOVEHICULO_ID" ON "ADMINISTRADOR"."TIPOVEHICULO" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Index PK_ALQUILER_ID
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_ALQUILER_ID" ON "ADMINISTRADOR"."ALQUILER" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Index PK_CARGOS_ID_CARGO
--------------------------------------------------------

  CREATE UNIQUE INDEX "ADMINISTRADOR"."PK_CARGOS_ID_CARGO" ON "ADMINISTRADOR"."CARGOS" ("ID_CARGO") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS" ;
--------------------------------------------------------
--  DDL for Trigger CALCULARKMRECORRIDOS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TRIGGER "ADMINISTRADOR"."CALCULARKMRECORRIDOS" 
BEFORE UPDATE OF KmRecepcion ON Alquiler 
FOR EACH ROW
DECLARE

BEGIN 
            if (:NEW.KmRecepcion>:OLD.KMEMISION) THEN
                :New.KMRECORRIDOS:=:NEW.KmRecepcion-:Old.KmEmision;   --Se Calcula los Km Recorridos
            end if;

END;
/
ALTER TRIGGER "ADMINISTRADOR"."CALCULARKMRECORRIDOS" ENABLE;
--------------------------------------------------------
--  DDL for Trigger CALCULARTOTALALQUILER
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TRIGGER "ADMINISTRADOR"."CALCULARTOTALALQUILER" 
BEFORE UPDATE OF Fecha_Recepcion ON Alquiler 
FOR EACH ROW
DECLARE
ValorInicial number;     
DiasAdicionales int;
ValorDia number;

BEGIN 

            :New.KMRECORRIDOS:=:NEW.KmRecepcion-:Old.KmEmision;   --Se Calcula los Km Recorridos

             SELECT t.ValorDia,t.Precio INTO ValorDia,ValorInicial FROM VEHICULOS v  JOIN TARIFAS t ON (v.ID_TARIFAS=t.ID) WHERE v.Placa=:NEW.PLACA_VEHICULOS; --se obtiene el valor por dia de esa tarifa
  
             IF (:NEW.Fecha_Recepcion>:NEW.Fecha_Contrato) THEN --Si la fecha de recepcion es mayor a la fecha de contrato

                DiasAdicionales:=:NEW.Fecha_Recepcion-:OLD.Fecha_Contrato; --OBTENER Cuantos dias se paso

             
               :New.VALOR_INICIAL:=ValorInicial;
               :NEW.Cargos_Adicionales:=ValorDia*DiasAdicionales; --Le Asigna el valor nuevo 
               :New.Total:=:NEW.VALOR_INICIAL+:New.Cargos_Adicionales; --El total es la suma del valor inicial (Tarifa) + Los cargos Adicionales

               else 
               :NEW.Cargos_Adicionales:=0;   --Si no se pasa, no hay cargos adicionales
               :New.VALOR_INICIAL:=ValorInicial;
               :New.Total:=:NEW.VALOR_INICIAL;    --Si no se pasa, el valor solo es el valor de la tarifa
             end if;
             

END;
/
ALTER TRIGGER "ADMINISTRADOR"."CALCULARTOTALALQUILER" ENABLE;
--------------------------------------------------------
--  DDL for Trigger VALIDARDISPONIBLECLIENTES
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TRIGGER "ADMINISTRADOR"."VALIDARDISPONIBLECLIENTES" --ESTE DISPARADOR LO QUE HACE ES QUE SI EXISTE EL REGISTRO Y ESTA DESHABILITADO,
BEFORE INSERT ON CLIENTES -- AL DESHABILITADO LE PONE UNA D EN SU LLAVE PRIMARIA Y EN SUS FORANEAS EN OTRAS TABLAS PARA QUE NO GENERE ERROR DE LLAVE PRIMARIA Y SE PUEDA INSERTAR LA NUEVA
FOR EACH ROW
DECLARE
EXISTE NUMBER;
DISPONIBLET varchar2(2);
seq_Actual number;
BEGIN

    SELECT COUNT(CC) INTO EXISTE FROM CLIENTES WHERE CC=:New.CC; --CUENTA CUANTAS EXISTENCIAS HAY 

     IF (EXISTE!=0)  THEN       --MIRA SI EXISTE Y SI NO ESTA DISPONIBLE ACTUALIZA EL REGISTRO ANTIGUO

        SELECT Disponible INTO DISPONIBLET FROM CLIENTES WHERE CC=:New.CC;--COMO EXISTE TIENE QUE VER SI ESTA DISPONIBLE

         IF (DISPONIBLET='NO') THEN --Si no esta disponible actualiza la llave primaria y foranea de las tablas

              UPDATE Alquiler SET CC_CLIENTES=NULL WHERE CC_CLIENTES=:New.CC; --COLOCA SU FORANEA EN NULL TEMPORALMENTE PARA QUE NO HAYA PROBLEMAS DE LLAVE PRIMARIA

              UPDATE CLIENTES SET CC= CC ||'D'||Seq_TriggerClientes.NEXTVAL WHERE CC=:NEW.CC;-- LA D: Deshabilitado y la secuencia para no generar error de llave unica por la llave primaria

               seq_Actual:=Seq_TriggerClientes.CURRVAL; -- OBTIENE EL NUMERO DE LA SECUENCIA ACTUAL

               UPDATE Alquiler SET CC_CLIENTES=:NEW.CC ||'D'||seq_Actual WHERE CC_CLIENTES IS NULL; --CAMBIA EL REGISTRO QUE SE PUSO NULL TEMPOERALMENTE POR EL DE LA LLAVE PRIMARIA NO DISPONIBLE ACTUALIZADA


         END IF;

      END IF; 
END;
/
ALTER TRIGGER "ADMINISTRADOR"."VALIDARDISPONIBLECLIENTES" ENABLE;
--------------------------------------------------------
--  DDL for Trigger VALIDARDISPONIBLEVEHICULOS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE TRIGGER "ADMINISTRADOR"."VALIDARDISPONIBLEVEHICULOS" --ESTE DISPARADOR LO QUE HACE ES QUE SI EXISTE EL REGISTRO Y ESTA DESHABILITADO,
BEFORE INSERT ON VEHICULOS -- AL DESHABILITADO LE PONE UNA D EN SU LLAVE PRIMARIA Y EN SUS FORANEAS EN OTRAS TABLAS PARA QUE NO GENERE ERROR DE LLAVE PRIMARIA Y SE PUEDA INSERTAR LA NUEVA
FOR EACH ROW
DECLARE
EXISTE NUMBER;
DISPONIBLET varchar2(2);
seq_Actual NUMBER;
BEGIN

    SELECT COUNT(PLACA) INTO EXISTE FROM VEHICULOS WHERE PLACA=:New.PLACA; --CUENTA CUANTAS EXISTENCIAS HAY 

     IF (EXISTE!=0)  THEN       --MIRA SI EXISTE Y SI NO ESTA DISPONIBLE ACTUALIZA EL REGISTRO ANTIGUO

        SELECT Disponible INTO DISPONIBLET FROM VEHICULOS WHERE PLACA=:New.PLACA;--COMO EXISTE TIENE QUE VER SI ESTA DISPONIBLE

         IF (DISPONIBLET='NO') THEN --Si no esta disponible actualiza la llave primaria y foranea de las tablas


           UPDATE Alquiler SET PLACA_VEHICULOS=NULL WHERE PLACA_VEHICULOS=:NEW.PLACA; --SE COLOCA TEMPOERALMENTE EN NULL PARA QUE NO GENERE PROBLEMAS LAS RESTRICCIONES
          UPDATE VEHICULOS SET PLACA= PLACA ||'D'||Seq_TriggerVehiculos.NEXTVAL WHERE PLACA=:NEW.PLACA;-- LA D: Deshabilitado y la secuencia para no generar error de llave unica por la llave primaria
          seq_Actual:=Seq_TriggerVehiculos.CURRVAL; -- OBTIENE EL NUMERO DE LA SECUENCIA ACTUAL
            UPDATE Alquiler SET PLACA_VEHICULOS=:NEW.Placa ||'D'||seq_Actual WHERE PLACA_VEHICULOS IS NULL; --CAMBIA EL REGISTRO QUE SE PUSO NULL TEMPOERALMENTE POR EL DE LA LLAVE PRIMARIA NO DISPONIBLE ACTUALIZADA
         END IF;

      END IF;      
END;
/
ALTER TRIGGER "ADMINISTRADOR"."VALIDARDISPONIBLEVEHICULOS" ENABLE;
--------------------------------------------------------
--  DDL for Procedure PRINT
--------------------------------------------------------
set define off;

  CREATE OR REPLACE NONEDITIONABLE PROCEDURE "ADMINISTRADOR"."PRINT" (IMPRESION VARCHAR) IS
 BEGIN
 DBMS_OUTPUT.PUT_LINE(IMPRESION);
 END;


/
--------------------------------------------------------
--  DDL for Package PAQUETEFUNCIONES
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE PACKAGE "ADMINISTRADOR"."PAQUETEFUNCIONES" AS

   FUNCTION BuscarEmpleado(Usuariot varchar2,Contrasena varchar2) RETURN Varchar2;
   FUNCTION F_Info(Entidades in Varchar2)  RETURN SYS_REFCURSOR;
   FUNCTION BuscarLicencia(LicenciaRecibida Varchar)  RETURN SYS_REFCURSOR;
   FUNCTION BuscarTipoCliente(TipoClRecibido Varchar2)  RETURN SYS_REFCURSOR;
   FUNCTION EXISTECARGOS(IDT Number) RETURN VARCHAR;
   FUNCTION EXISTECARGOSNOMBRE(NombreT varchar) RETURN VARCHAR;
   FUNCTION EXISTELICENCIA(Licencia Varchar) RETURN VARCHAR;
   FUNCTION EXISTEMARCA(IDT Number) RETURN VARCHAR;
   FUNCTION EXISTEMARCANOMBRE(NombreT varchar) RETURN VARCHAR;
   FUNCTION EXISTETARIFA(IDT Number) RETURN VARCHAR;
   FUNCTION EXISTETARIFANOMBRE(NombreT varchar) RETURN VARCHAR;
   FUNCTION EXISTETIPOCL(IDT Number) RETURN VARCHAR;
   FUNCTION EXISTETIPOCLNOMBRE(NombreT varchar) RETURN VARCHAR;
   FUNCTION EXISTETIPOVE(IDT Number) RETURN VARCHAR;
   FUNCTION EXISTETIPOVEHICULONOMBRE(NombreT varchar) RETURN VARCHAR;

end;


/
--------------------------------------------------------
--  DDL for Package PAQUETEPROCEDIMIENTOS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE PACKAGE "ADMINISTRADOR"."PAQUETEPROCEDIMIENTOS" AS

  PROCEDURE ACT_Vehiculo(PlacaVe Varchar2, Id_TipoVe Number,ModeloVe Varchar2,IdMarcat Number,IdTarifat Number, accion char);
  PROCEDURE ACT_CARGOS(Id Number,Titulo_Cargo VARCHAR2,Administrar Varchar2, accion char);
  PROCEDURE ACT_CLIENTES(PN VARCHAR2,SN VARCHAR2,PA VARCHAR2,SEA VARCHAR2,CED VARCHAR2,FECHANA DATE,IDTIPOCL Number,NLICENCIA VARCHAR2, accion char);
  PROCEDURE ACT_EMPLEADOS(NombreUser VARCHAR2,Contraseña VARCHAR2,Id_Empleado Number,IdCargo varchar2, accion char);
  PROCEDURE ACT_LICENCIA(FECHAE DATE, FECHAVE DATE, LICENCIA VARCHAR, accion char);
  PROCEDURE ACT_MARCA(IDMARCA Number, NOMBREMARCA VARCHAR2, accion char);
  PROCEDURE ACT_TARIFAS(Id_Tarifa Number,Titulo VARCHAR2,Precio_Tarifa Number,ValorxKm Number,KmxContrato Number, accion char);
  PROCEDURE ACT_TIPOCL(IDTIPO VARCHAR2, NOMBRETIPO VARCHAR2, accion char);
  PROCEDURE ACT_TIPOVE(IDTIPO Number, NOMBRETIPO VARCHAR2,CANTIDADT NUMBER, accion char);
  PROCEDURE ACT_ALQUILER(ID_ALQUILER Number,KmRRecepcion Number, accion char);

end;


/
--------------------------------------------------------
--  DDL for Package Body PAQUETEFUNCIONES
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE PACKAGE BODY "ADMINISTRADOR"."PAQUETEFUNCIONES" As

         FUNCTION F_Info(Entidades in Varchar2)  RETURN SYS_REFCURSOR IS --CLIENTES,TARIFAS, RECIBE EL NOMBRE UNA TABLA
           CURSORINFO SYS_REFCURSOR;
            BEGIN
            OPEN CURSORINFO FOR
              'SELECT *FROM  ' || Entidades || ' Where Disponible=''SI''';

            RETURN CURSORINFO;

            end;

         FUNCTION BuscarEmpleado(Usuariot varchar2,Contrasena varchar2) RETURN Varchar2 IS --LA FUNCION BUSCA VER SI EXISTE Y PUEDE ADMINISTRAR LOS EMPLEADOS
        Cantidad number;
        Administrar varchar2(2);
        BEGIN
        SELECT COUNT(ID) into Cantidad From Empleados Where Usuario=Usuariot and Clave=Contrasena;

             if Cantidad!=0 then
               SELECT c.Administracion INTO Administrar FROM EMPLEADOS e JOIN Cargos c ON (e.ID_CARGO=c.ID_CARGO) WHERE Usuario=Usuariot and Clave=Contrasena; --Obtiene El atributo de si administra del cargo de ese empleado; EA:Existe y Administra; EN: Existe y no administra
               DBMS_OUTPUT.PUT_LINE(Administrar);
                return Administrar;
             else
                Administrar:='NN'; --NN:NO EXISTE Y NO ADMINISTRA
                DBMS_OUTPUT.PUT_LINE(Administrar);
                 return Administrar;
             end if;

         end;

        FUNCTION BuscarLicencia(LicenciaRecibida Varchar)  RETURN SYS_REFCURSOR IS
         CursorLicencias SYS_REFCURSOR;
         BEGIN
          OPEN CursorLicencias FOR                                    --Es una funcion que me devuelve las filas que tengan es Licencia
            SELECT *FROM LICENCIAS WHERE N_LICENCIA=LicenciaRecibida;
           RETURN CursorLicencias;
        END;   

        FUNCTION BuscarTipoCliente(TipoClRecibido Varchar2)  RETURN SYS_REFCURSOR IS
         CursorTipoCl SYS_REFCURSOR;
         BEGIN
          OPEN CursorTipoCl FOR                                    --Es una funcion que me devuelve las filas que tengan es Licencia
            SELECT *FROM TIPOCLIENTES WHERE Nombre=TipoClRecibido;
           RETURN CursorTipoCl;
        END;   

       FUNCTION EXISTECARGOS(IDT Number) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO EL CARGO
          RegistrosCargos number; --Variable para saber si existe o no en la tabla de CARGOS

          BEGIN


           SELECT COUNT(ID_CARGO) INTO RegistrosCargos FROM Cargos Where ID_CARGO=IDT and Disponible='SI'; --Obtiene el numero de registros en la tabla licencia para saber si existe esa licencia

           IF (RegistrosCargos!=0) THEN
             return 'S';
            else                                   --Esta parte verifica que el cargo este en la tabla de cargos
             return 'N';
           END IF;

        END;

      FUNCTION EXISTECARGOSNOMBRE(NombreT varchar) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
          RegistrosCargos number; --Variable para saber si existe o no en la tabla de tarifas Y ESTA DISPONIBLE
          BEGIN

           SELECT COUNT(NOMBRE) INTO RegistrosCargos FROM Cargos Where Nombre=NombreT and Disponible='SI'; --Obtiene el numero de registros en la tabla cargos para saber si existe ese nombre_cargo

           IF (RegistrosCargos!=0) THEN
             return 'S';
            else                                   --Esta parte verifica si el cargo esta en la tabla de CARGOS y este disponible
             return 'N';
           END IF;

        END;

        FUNCTION EXISTELICENCIA(Licencia Varchar) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
          RegistrosLicencias number; --Variable para saber si existe o no en la tabla de licencias
          RegistrosLicenciasCl number; --Es una variable para saber si un cliente ya tiene esa licencia
          BEGIN


           SELECT COUNT(N_Licencia) INTO RegistrosLicenciasCl FROM CLIENTES where N_Licencia=Licencia and Disponible='SI'; -- Obtiene el numero de registros en clientes con esa Licencia

           IF (RegistrosLicenciasCl!=0) THEN 
            return 'ER'; --ER: EXISTE Y YA ESTA REGISTRADO POR UN CLIENTE,  ES DECIR VERIFICA QUE LA LICENCIA SEA 1 A 1
           END IF;

           SELECT COUNT(N_Licencia) INTO RegistrosLicencias FROM Licencias Where N_Licencia=Licencia and Disponible='SI'; --Obtiene el numero de registros en la tabla licencia para saber si existe esa licencia

           IF (RegistrosLicencias!=0) THEN
             return 'S';
            else                                   --Esta parte verifica que la licencia este en la tabla de licencias
             return 'N';
           END IF;

        END;

       FUNCTION EXISTEMARCA(IDT Number) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
          RegistrosMarca number; --Variable para saber si existe o no en la tabla de TIPO VEHICULO

          BEGIN


           SELECT COUNT(ID_MARCA) INTO RegistrosMarca FROM Marcas Where ID_MARCA=IDT and Disponible='SI'; --Obtiene el numero de registros en la tabla licencia para saber si existe esa licencia

           IF (RegistrosMarca!=0) THEN
             return 'S';
            else                                   --Esta parte verifica que la marca exista en la tabla marcas
             return 'N';
           END IF;

        END;

        FUNCTION EXISTEMARCANOMBRE(NombreT varchar) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
          RegistrosMarca number; --Variable para saber si existe o no en la tabla de Marcas Y ESTA DISPONIBLE
          BEGIN

           SELECT COUNT(NOMBRE) INTO RegistrosMarca FROM Marcas Where Nombre=NombreT and Disponible='SI'; --Obtiene el numero de registros en la tabla Marcas para saber si existe esa Marca

           IF (RegistrosMarca!=0) THEN
             return 'S';
            else                                   --Esta parte verifica la marca este en la tabla de Marcas y este disponible
             return 'N';
           END IF;

        END;

         FUNCTION EXISTETARIFA(IDT Number) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA TARIFA
              RegistrosTarifa number; --Variable para saber si existe o no en la tabla de TARIFAS

              BEGIN


               SELECT COUNT(ID) INTO RegistrosTarifa FROM Tarifas Where ID=IDT and Disponible='SI'; --Obtiene el numero de registros en la tabla TARIFAS para saber si existe esa TARIFA

               IF (RegistrosTarifa!=0) THEN
                 return 'S';
                else                                   --Esta parte verifica que EL LA TARIFA este en la tabla de TARIFAS
                 return 'N';
               END IF;

            END;

           FUNCTION EXISTETARIFANOMBRE(NombreT varchar) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
              RegistrosTarifas number; --Variable para saber si existe o no en la tabla de tarifas Y ESTA DISPONIBLE
              BEGIN

               SELECT COUNT(NOMBRE) INTO RegistrosTarifas FROM TARIFAS Where Nombre=NombreT and Disponible='SI'; --Obtiene el numero de registros en la tabla Tarifas para saber si existe esa Tarifa

               IF (RegistrosTarifas!=0) THEN
                 return 'S';
                else                                   --Esta parte verifica la marca este en la tabla de Marcas y este disponible
                 return 'N';
               END IF;

            END;
            --04
          FUNCTION EXISTETIPOCL(IDT Number) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
              RegistrosTipoCl number; --ES UNA VARIABLE PARA ALMACENAR EL NUMERO DE REGISTROS CON EL ID NUEVO
              BEGIN

               SELECT COUNT(ID) INTO RegistrosTipocL FROM TIPOCLIENTES Where ID=IDT and Disponible='SI'; --Obtiene el numero de registros en la tabla TIPOCLIENTES para saber si existe ese TIPOCLIENTE

               IF (RegistrosTipoCl!=0) THEN
                 return 'S';
                else                                   --Esta parte verifica que EL TIPO este en la tabla de TIPOCL
                 return 'N';
               END IF;

            END;

           FUNCTION EXISTETIPOCLNOMBRE(NombreT varchar) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO EL TIPO DE CLIENTE POR EL NOMBRE
              RegistrosTipoCl number; --Variable para saber si existe o no en la tabla de TIPOCL Y ESTA DISPONIBLE
              BEGIN

               SELECT COUNT(NOMBRE) INTO RegistrosTipoCl FROM TIPOCLIENTES Where Nombre=NombreT and Disponible='SI'; --Obtiene el numero de registros en la tabla TIPOCL para saber si existe ese tipocl

               IF (RegistrosTipoCl!=0) THEN
                 return 'S';
                else                                   --Esta parte verifica si el tipocl este en la tabla de tipocl y este disponible
                 return 'N';
               END IF;

            END;

            FUNCTION EXISTETIPOVE(IDT Number) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
                  RegistrosTipoVe number; --Variable para saber si existe o no en la tabla de TIPO VEHICULO

                  BEGIN


                   SELECT COUNT(ID) INTO RegistrosTipoVe FROM TipoVEHICULO Where ID=IDT and Disponible='SI'; --Obtiene el numero de registros en la tabla licencia para saber si existe esa licencia

                   IF (RegistrosTipoVe!=0) THEN
                     return 'S';
                    else                                   --Esta parte verifica que EL TIPO este en la tabla de TIPOCL
                     return 'N';
                   END IF;

                END;

            FUNCTION EXISTETIPOVEHICULONOMBRE(NombreT varchar) RETURN VARCHAR IS --ESTA FUNCION VERIFICA SI EXISTE O NO LA LICENCIA
                  RegistrosTipoVehiculo number; --Variable para saber si existe o no en la tabla de Marcas Y ESTA DISPONIBLE
                  BEGIN

                   SELECT COUNT(NOMBRE) INTO RegistrosTipoVehiculo FROM TIPOVEHICULO Where Nombre=NombreT and Disponible='SI'; --Obtiene el numero de registros en la tabla Marcas para saber si existe esa Marca

                   IF (RegistrosTipoVehiculo!=0) THEN
                     return 'S';
                    else                                   --Esta parte verifica la marca este en la tabla de Marcas y este disponible
                     return 'N';
                   END IF;

                END;    



END PaqueteFunciones;


/
--------------------------------------------------------
--  DDL for Package Body PAQUETEPROCEDIMIENTOS
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE PACKAGE BODY "ADMINISTRADOR"."PAQUETEPROCEDIMIENTOS" As

        PROCEDURE ACT_Vehiculo(PlacaVe Varchar2, Id_TipoVe Number,ModeloVe Varchar2,IdMarcat Number,IdTarifat Number, accion char) IS
    BEGIN
      IF (accion = 'A') THEN
        UPDATE Vehiculos SET ID_TIPOVEHICULO=Id_TipoVe,Modelo=ModeloVe,Id_Marca=IdMarcat,Id_Tarifas=IdTarifat WHERE Placa = PlacaVe;
      ELSIF (accion = 'E') THEN
        UPDATE Vehiculos SET DISPONIBLE='NO' WHERE Placa = PlacaVe;
      END IF;
    END;

        PROCEDURE ACT_CLIENTES(PN VARCHAR2,SN VARCHAR2,PA VARCHAR2,SEA VARCHAR2,CED VARCHAR2,FECHANA DATE,IDTIPOCL Number,NLICENCIA VARCHAR2, accion char) IS
    BEGIN
      IF (accion = 'A') THEN
        UPDATE CLIENTES SET PRIMER_NOMBRE= PN,SEGUNDO_NOMBRE=SN,PRIMER_APELLIDO=PA,SEGUNDO_APELLIDO=SEA,FECHA_NACIMIENTO=FECHANA,ID_TIPOCLIENTE=IDTIPOCL,N_LICENCIA=NLICENCIA WHERE CC = CED;
      ELSIF (accion = 'E') THEN
        UPDATE CLIENTES SET DISPONIBLE='NO' WHERE CC = CED;
      END IF;
    END;

         PROCEDURE ACT_EMPLEADOS(NombreUser VARCHAR2,Contraseña VARCHAR2,Id_Empleado Number,IdCargo varchar2, accion char) IS
    BEGIN
      IF (accion = 'A') THEN
        UPDATE Empleados SET Usuario=NombreUser,Clave=Contraseña,ID_CARGO=IdCargo WHERE ID =Id_Empleado;
      ELSIF (accion = 'E') THEN
        UPDATE Empleados SET DISPONIBLE='NO' WHERE ID = Id_Empleado;
      END IF;
    END;

        PROCEDURE ACT_LICENCIA(FECHAE DATE, FECHAVE DATE, LICENCIA VARCHAR, accion char) IS
    BEGIN
      IF (accion = 'A') THEN
        UPDATE LICENCIAS SET F_EMISION = FECHAE, F_VENCIMIENTO = FECHAVE WHERE N_LICENCIA = LICENCIA;
      ELSIF (accion = 'E') THEN
        UPDATE LICENCIAS SET DISPONIBLE='NO' WHERE N_LICENCIA = LICENCIA;
      END IF;
    END;

         PROCEDURE ACT_MARCA(IDMARCA Number, NOMBREMARCA VARCHAR2, accion char) IS
        BEGIN
          IF (accion = 'A') THEN
            UPDATE MARCAS SET NOMBRE= NOMBREMARCA WHERE ID_MARCA = IDMARCA;
          ELSIF (accion = 'E') THEN
            UPDATE MARCAS SET DISPONIBLE='NO' WHERE ID_MARCA = IDMARCA;
          END IF;
        END;

        PROCEDURE ACT_TARIFAS(Id_Tarifa Number,Titulo VARCHAR2,Precio_Tarifa Number,ValorxKm Number,KmxContrato Number, accion char) IS
       BEGIN
      IF (accion = 'A') THEN
        UPDATE Tarifas SET Nombre=Titulo,Precio=Precio_Tarifa,ValorKm=ValorxKm,KmContrato=KmxContrato WHERE ID =id_Tarifa;

      ELSIF (accion = 'E') THEN
        UPDATE Tarifas SET DISPONIBLE='NO' WHERE ID = id_Tarifa;
      END IF;
    END;


       PROCEDURE ACT_TIPOVE(IDTIPO Number, NOMBRETIPO VARCHAR2,CANTIDADT NUMBER, accion char) IS
    BEGIN
      IF (accion = 'A') THEN
        UPDATE TIPOVEHICULO SET NOMBRE= NOMBRETIPO WHERE ID = IDTIPO;
      ELSIF (accion = 'E') THEN
        UPDATE TIPOVEHICULO SET DISPONIBLE='NO' WHERE ID = IDTIPO;
      END IF;
    END;

       PROCEDURE ACT_CARGOS(Id Number,Titulo_Cargo VARCHAR2,Administrar Varchar2, accion char) IS
    BEGIN
      IF (accion = 'A') THEN
        UPDATE Cargos SET Nombre=Titulo_cargo,Administracion=Administrar WHERE ID_CARGO =Id;
      ELSIF (accion = 'E') THEN
        UPDATE Cargos SET DISPONIBLE='NO' WHERE ID_CARGO = id;
      END IF;
    END;

       PROCEDURE ACT_ALQUILER(ID_ALQUILER Number,KmRRecepcion Number, accion char) IS
         KmRecepcionAlqui Number;
        BEGIN 
         -- SELECT KmRecepcion INTO KmRecepcionAlqui FROM ALQUILER WHERE ID=ID_ALQUILER;
           IF (accion = 'A') THEN
                UPDATE Alquiler SET KmRecepcion=KmRRecepcion WHERE ID =ID_ALQUILER;              

           ELSIF (accion = 'E') THEN
            UPDATE Alquiler SET DISPONIBLE='NO' WHERE ID = ID_ALQUILER;
          END IF;
        END;

END PaqueteProcedimientos;

/
--------------------------------------------------------
--  Constraints for Table EMPLEADOS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."EMPLEADOS" MODIFY ("CORREO" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."EMPLEADOS" MODIFY ("CLAVE" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."EMPLEADOS" ADD CONSTRAINT "PK_EMPLEADOS_ID" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
  ALTER TABLE "ADMINISTRADOR"."EMPLEADOS" MODIFY ("ID_CARGO" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table TIPOVEHICULO
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."TIPOVEHICULO" MODIFY ("NOMBRE" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."TIPOVEHICULO" ADD CONSTRAINT "PK_TIPOVEHICULO_ID" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table ALQUILER
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."ALQUILER" MODIFY ("FECHA_EMISION" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."ALQUILER" ADD CONSTRAINT "PK_ALQUILER_ID" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
  ALTER TABLE "ADMINISTRADOR"."ALQUILER" MODIFY ("VALOR_INICIAL" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."ALQUILER" MODIFY ("FECHA_CONTRATO" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CARGOS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."CARGOS" MODIFY ("NOMBRE" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."CARGOS" ADD CONSTRAINT "PK_CARGOS_ID_CARGO" PRIMARY KEY ("ID_CARGO")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
  ALTER TABLE "ADMINISTRADOR"."CARGOS" MODIFY ("ADMINISTRACION" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CLIENTES
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."CLIENTES" MODIFY ("NOMBRE_COMPLETO" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."CLIENTES" MODIFY ("CONTRASENA" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."CLIENTES" ADD CONSTRAINT "PK_CLIENTES_CC" PRIMARY KEY ("CC")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
  ALTER TABLE "ADMINISTRADOR"."CLIENTES" MODIFY ("FECHA_NACIMIENTO" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."CLIENTES" MODIFY ("TELEFONO" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table VEHICULOS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."VEHICULOS" MODIFY ("MODELO" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."VEHICULOS" ADD CONSTRAINT "PK_VEHICULOS_PLACA" PRIMARY KEY ("PLACA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
  ALTER TABLE "ADMINISTRADOR"."VEHICULOS" MODIFY ("YEAR" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table TARIFAS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."TARIFAS" MODIFY ("NOMBRE" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."TARIFAS" MODIFY ("PRECIO" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."TARIFAS" MODIFY ("VALORDIA" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."TARIFAS" ADD CONSTRAINT "PK_TARIFAS_ID" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table RESERVAS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."RESERVAS" MODIFY ("DISPONIBLE" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table MARCAS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."MARCAS" MODIFY ("NOMBRE" NOT NULL ENABLE);
  ALTER TABLE "ADMINISTRADOR"."MARCAS" ADD CONSTRAINT "PK_MARCA_ID_MARCA" PRIMARY KEY ("ID_MARCA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "RENTVEHICULOS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table ALQUILER
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."ALQUILER" ADD CONSTRAINT "FK_VEHICULO_PLACA_VEHICULOS" FOREIGN KEY ("PLACA_VEHICULOS")
	  REFERENCES "ADMINISTRADOR"."VEHICULOS" ("PLACA") ENABLE;
  ALTER TABLE "ADMINISTRADOR"."ALQUILER" ADD CONSTRAINT "FK_CLIENTES_CC_CLIENTES" FOREIGN KEY ("CC_CLIENTES")
	  REFERENCES "ADMINISTRADOR"."CLIENTES" ("CC") ENABLE;
  ALTER TABLE "ADMINISTRADOR"."ALQUILER" ADD CONSTRAINT "FK_EMPLEADOS_ID_EMPLEADOS" FOREIGN KEY ("ID_EMPLEADOS")
	  REFERENCES "ADMINISTRADOR"."EMPLEADOS" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table EMPLEADOS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."EMPLEADOS" ADD CONSTRAINT "FK_CARGOS_ID_CARGO" FOREIGN KEY ("ID_CARGO")
	  REFERENCES "ADMINISTRADOR"."CARGOS" ("ID_CARGO") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table VEHICULOS
--------------------------------------------------------

  ALTER TABLE "ADMINISTRADOR"."VEHICULOS" ADD CONSTRAINT "FK_MARCA_ID_MARCA" FOREIGN KEY ("ID_MARCA")
	  REFERENCES "ADMINISTRADOR"."MARCAS" ("ID_MARCA") ENABLE;
  ALTER TABLE "ADMINISTRADOR"."VEHICULOS" ADD CONSTRAINT "FK_TARIFASVEHICULO_ID_TARIFAS" FOREIGN KEY ("ID_TARIFAS")
	  REFERENCES "ADMINISTRADOR"."TARIFAS" ("ID") ENABLE;
  ALTER TABLE "ADMINISTRADOR"."VEHICULOS" ADD CONSTRAINT "FK_TIPOVEHICULO_ID_TIPOVEHICULO" FOREIGN KEY ("ID_TIPOVEHICULO")
	  REFERENCES "ADMINISTRADOR"."TIPOVEHICULO" ("ID") ENABLE;
