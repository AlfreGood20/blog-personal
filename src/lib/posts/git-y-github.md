---
titulo: Git y Github
descripcion: Fundamentos de git y github, ademas aprenderas los diferentes comandos que existen en esta tecnologia y como usar con github.
fecha: 08/04/2026
imagen: /imgs/post 1/gitandgithub.png
etiquetas: ['git','github','programacion','tecnologias','control de versiones']
---

<script> 
    import Imagen from '../../components/Imagen.svelte'; 
    import Information from '../../components/Information.svelte'; 
    import Carrusel from '../../components/Carrusel.svelte';

    let path = '/imgs/post 1';

    const imagenes = () =>{
        let imgs = new Array(12);
        for(let i = 0; i < imgs.length; i++){
            imgs[i] = `${path}/installs${(i+1)}.png`;
        }
        return imgs;
    }

</script>

# Git y GitHub

<Information fecha='01 de abril de 2026', tiempoLectura='8 minutos'/>
<Imagen imagen={`${path}/gitandgithub.png`} nombre='git y github'/>

Nosotros como desarrolladores tenemos la necesidad de tener versiones en muestro proyecto, entonces existe una tecnologia que nos facilitara a la hora de trabajar personalmente o colaborativamente.

## ¿Qué es git?
Git es una tecnologia de controlador de versiones, como bien dice su nombre es poder controlar cada version de un proyecto ya sea que este en un repositorio de github o gitlab. Esta tecnologia fue creado por **Linus Torvalds** en el año 2005, ¿Suena familiar su nombre no? puess si, ya que el tambien fue el creador del nucleo de **Linux**. 

## ¿Qué es github?
Github es una plataforma en la nube basada eb git en donde desarrolladores puedan subir sus proyecto, herrramientas etc. Y aqui es donde surgen las applicaciones de open source, ya que gracias a esta plataforma muchos desarrolladores pueden colaborar en proyecto usando git.

## ¿git y github son los mismo?
No, muchos desarrolladores confunden esto y no esta mal equivocarse, si no hay que saber bien los conceptos. En pocas palabras git es una herramienta o tecnologia como quieras que lo llamen y github es una plataforma en donde puedes subir tus proyectos.

## ¿Cómo instalo git?
A continuacion les mostrase el paso a paso de instalacion de git y configuración necesaria que debe tener.

Pasos a seguir:

- #1:Buscar la pagina de git y ir a install (link directo ->) <a class="btn btn-link" href="https://git-scm.com/install/" aria-label="goin to git" target="_blank">CLICK AQUI</a>

<Imagen imagen={`${path}/image.png`} nombre='install git' />

- #2: Elige su sistema operativo en cual lo va instalar en mi caso sera en windows.
<Imagen imagen={`${path}/tuto 2.png`} nombre='descarga' />

- #3: Haora sigue estos pasos.
<Carrusel imgs={imagenes()} />
<p class='text-center'>Una vez ya instalado lo puedes ver en la pantalla de escritorio como Git Bash</p>

## Configurar git
Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits, deberas que abrir Git Bash y agregar estos comandos:

```bash
$ git config --global user.name "username"
$ git config --global user.email username@gmail.com
```

Esta configuracion es sencilla pero esencial para su funcionamiento con github, remplaza la informacion ficticia con su informacion real. Nota: en el user.name debera de poner su user de github tal cual aparece por que luego eso puede causar conflicto en su funcionamiento.

De nuevo, sólo necesitas hacer esto una vez si especificas la opción `--global`, ya que Git siempre usará esta información para todo lo que hagas en ese sistema. Si quieres sobrescribir esta información con otro nombre o dirección de correo para proyectos específicos, puedes ejecutar el comando sin la opción `--global` cuando estés en ese proyecto.

Para saber si se configuro bien la informacion ejecute estos comandos en su terminal de git bash:

```bash
$ git config user.name &&  git config user.email
```

Debera de aparecer su informacion que configuro.

## Comandos de git


```bash
$ git init
```
git init es el comando fundamental para iniciar un nuevo repositorio Git local en un directorio, creando una subcarpeta oculta `.git` que almacena el historial y metadatos del proyecto. Se utiliza para convertir una carpeta existente en un proyecto versionado o para empezar uno vacío desde cero.

```bash
$ git remote add origin http://repositorio.git
```
Este sera uno de los comandos mas importante ya que con este indicaras la url del repositorio de github donde se va alojar su proyecto.


```bash
$ git remote -v 
```
Con este comando es la verificacion donde se indico donde se alojara el proyecto.
Debera de aparecer en la terminal la url.

```bash
$ git status
```
Comando fundamental de Git que muestra el estado actual de tu directorio de trabajo y del área de preparación (staging area). Permite identificar qué archivos han sido modificados, cuáles están listos para confirmarse (commit) y cuáles no están siendo rastreados (untracked) por Git.

```bash
$ git add archivo
```
Prepara los cambios realizados en el directorio de trabajo para la siguiente confirmación (commit), agregándolos al área de preparación o `«índice»`. Es el primer paso esencial en el flujo de trabajo de Git para guardar archivos nuevos o modificados, asegurando que solo los cambios necesarios se incluyan en la instantánea. 

```bash
$ git commit -m 'comentario'
```
Una vez relizado el anterior comando podras hacer un commit a dicho arhivo o archivos guardado, asignandole un comentario.


```bash
$ git push origin nombre-rama
``` 
Enpuja los commit relizados al repositorio remoto de github.



```bash
$ git branch nombre-rama
```
Creas nueva rama indicandole el nombre que tendra. Este comando tiene dos funciones este y el de git branch que este lo que hace es mostrar todas las ramas que tiene tanto locales como remoto.

```bash
$ git branch -d nombre-rama
```
Eliminas una rama tanto local como remoto, indicandole el nombre del rama tal cual quieres eliminar.

```bash
$ git checkout nombre-rama
```
Con este comando cambiaras de rama, indicandole la rama al cual vas a cambiar.


```bash
$ git pull origin nombre-rama
```
Traeras los cambios que hay en el repositorio remoto, osea los que estan en github.

```bash
$ git merge nombre-rama
```
Utilizado para integrar el historial y los cambios de una rama (rama de características/desarrollo) en otra (usualmente main o master). Combina las líneas de desarrollo divergentes en una sola, actualizando la rama actual con el trabajo finalizado de la otra rama.


Gracias por leer.