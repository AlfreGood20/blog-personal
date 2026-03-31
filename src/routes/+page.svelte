<svelte:head>
    <title>AlfyCodeer - blog</title>
</svelte:head>

<script>
    import Card from "../components/Card.svelte";

    let { data } = $props();

</script>

<div class="flex flex-col pt-25 px-20">

    <h1 class="text-5xl font-extralight ">Bienvenido al blog👋</h1>
    <!-- <h2 class="mt-3 text-2xl">¿Quién soy?</h2>
    <div class="mt-3 card bg-base-100 p-20">

        <div class="flex justify-center">
            <img class="w-30 h-30 mb-6 rounded-3xl" alt="logotipo" src='https://ui-avatars.com/api/?name=Jose+Alfredo&background=0D8ABC&color=fff&size=128'/>
        </div>

        <p>
            Hola, me llamo <span class="font-semibold">José Alfredo López De La Cruz</span> y soy de México, del estado de Tabasco. 
            Actualmente estoy estudiando Ingeniería en Sistemas en el ITVH.
        </p><br>

        <p>
            Me estoy enfocando principalmente en el desarrollo backend, aunque también me interesa aprender otras áreas para tener una visión más completa del desarrollo de software. 
            Para ser sincero, el diseño de interfaces (UI) no es mi punto fuerte 😅, pero es una habilidad que estoy trabajando constantemente.
        </p><br>

        <p>
            He trabajado con tecnologías como Java y su ecosistema, especialmente con Spring Boot y Spring Security, desarrollando APIs y aplicaciones backend. También utilizo 
            herramientas como Git y GitHub para el control de versiones, y en el frontend he experimentado con SvelteKit junto con Tailwind CSS.
        </p><br>

        <p>
            Me gusta aprender construyendo proyectos reales y resolviendo problemas prácticos, por lo que la mayoría del contenido que comparto está basado en experiencias reales.
        </p><br>

        <p>
            En este blog compartiré mi experiencia en este camino como desarrollador, publicando tutoriales, proyectos y soluciones a problemas reales que me he encontrado. 
            La idea es ayudar a otros que están aprendiendo, así como yo también lo estoy haciendo.
        </p><br>

        <p>
            Mi objetivo es seguir creciendo como desarrollador backend y construir aplicaciones cada vez más completas y bien estructuradas.
        </p><br>

        <p>
            Gracias por tomarte el tiempo de visitar este espacio. Espero que el contenido te sea útil y que puedas aprender algo nuevo en cada artículo. 🚀
        </p>
    </div> -->
    
    <h2 class="text-lg mt-5 font-medium">Todos los articulos del blog</h2>

    <div class="flex flex-wrap mt-3 gap-5 md:justify-center mb-5">
        {#each data.posts as post}
            <Card 
                titulo={post.titulo}
                descripcion={post.descripcion} 
                fecha={post.fecha} 
                img={post.imagen}
                etiquetas={post.etiquetas}
                path={post.ruta}
            />
        {/each}
    </div>

</div>