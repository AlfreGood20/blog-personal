---
titulo: Cómo detener e iniciar MYSQL en windows
descripcion: Te consume recurso mysql en tu computadora localmente y no sabes como detenerlo o iniciarlo, tengo la guia completa a esta solución.
fecha: 12/04/2026
imagen: /imgs/post 2/mysql-ilustracion.png
etiquetas: ['mysql','base de dato','programacion','terminal', 'microsoft']
---

<script>
    import Imagen from '../../components/Imagen.svelte';
    import Information from '../../components/Information.svelte';

    const path = '/imgs/post 2';
</script>

# Cómo detener e iniciar MYSQL en windows

<Information fecha='23 de abril de 2026' tiempoLectura='10 minutos'/>

<Imagen imagen={`${path}/mysql-ilustracion.png`} nombre='ilustracion' />

Tienes MySQL localmente en windows 10 o 11, y consume recurso (RAM) sin usarlo y **no sabes** como detenerlo o iniciarlo para usarlo, en este post te ayudame a como solucionar dicho problema que tenemos cuando iniciamos en el mundo de la tecnologia digital y fundamental.

## Detener MySQL
Hay dos formas de poder detener mysql en windows, ambas formas son muy sencillas de aplicar.

### Opción 1: Detenerlo mediante servicio de windows
Pasos a seguir:

- Presina `windows + r` y escribe `services.msc`:
<div class='flex justify-center'>
    <Imagen imagen={`${path}/tuto 1.png`} nombre='windows plus r'/>
</div>

- Abrira el gestion de servicios de windows, tendremos que buscar uno que se llama `MySQL80` (en ocasiones puede ser diferente dependera de la version de mysql que tengas instalado) ese servicio lo podras encontras mas rapido buscando donde se encunetre todo los que comienzan con la letra 'm'.
<Imagen imagen={`${path}/tuto 2.png`} nombre='service of windows'/>

- Le daras click click izquierdo y precionaras el de propiedades. Tal cual aparece en la imagen podras elegir el tipo de inicio por determinado estara en automatico, yo le recomiendo que lo ponga en `manual` para este no inicie solo en cada reiniciada. Y finalmente aqui podra detener la base de datos, en la parte de abajo donde dice `detener`.
<Imagen imagen={`${path}/tuto 3.png`} nombre='configuration'/>

### Opción 2: Por medio de comandos desde la terminal.
Este es la segunda opcion, en lo personal la más sencilla y menos complicada.

Pasos a seguir:
- Abrir una terminal como administrador `windows + x` o mediante el buscador de archivos.

- Escribe el siguiente comando:

```powershell
sc query mysql80
```

Lo que hace este comando es mostrar el la informacion de servicio de la base de datos. Nota: Si usted usa otra version de mysql, la parte de mysql80 cambiaria por otra version.

<Imagen imagen={`${path}/tuto 4.png`} nombre='comando de informacion de servicio'/>

- En la parte de la informacion de `estado` puede verificar si el servicio (mysql) este corriendo o este apagado, esto nos ayudara a saber informacion de servicio.

- Comando de ejecuccion:

```powershell
net stop mysql80
``` 
Con este comando detendras el servicio de mysql. En pantalla te debe de aparecer el siguiente mensaje.

```porwershell
El servicio de MySQL80 está deteniéndose.
El servicio de MySQL80 se detuvo correctamente.
```

Ya con este mensaje puedes dar por hecho que mysql se encuentra detenido. Puede volverlo a consultar el el primer comando que le explique.

Nota: Recuerda tener la terminal como administrador.

```powershell
net start mysql80
```
Comando de iniciar el servicio de mysql80. Te aparecera el siguiente mensaje:

```powershell
El servicio de MySQL80 está iniciándose..
El servicio de MySQL80 se ha iniciado correctamente.
```

Gracias por leer. Espero que le haya servido la información.