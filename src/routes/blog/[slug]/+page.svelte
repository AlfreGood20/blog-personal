<svelte:head>
    <title>{titulo}</title>
    <meta name="description" content={descripcion} />

    <meta property="og:type" content="article" />
    <meta property="og:title" content={titulo} />
    <meta property="og:description" content={descripcion}/>
    <meta property="og:image" content={imagen} />
    <meta property="og:url" content={$page.url.href} />
    <meta property="og:site_name" content="afyStack" />

</svelte:head>

<script>
    import { page } from "$app/stores";

    let {data} = $props();

    const titulo = data.titulo;
    const descripcion = data.descripcion;
    const imagen = data.imagen;
    const Post = data.contenido;
</script>

<div class="flex pt-20 p-4 pb-10 justify-center md:pb-15 md:px-4">
    <article class="w-full prose max-w-3xl prose-h1:text-center">
        <Post />
    </article>
</div>