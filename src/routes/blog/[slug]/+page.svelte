<svelte:head>
    <title>{titulo}</title>
</svelte:head>

<script>
    let {data} = $props();

    const titulo = data.titulo;
    const Post = data.contenido;
</script>

<div class="flex pt-20 p-4 pb-10 justify-center md:pb-15 md:px-4">
    <article class="w-full prose max-w-3xl prose-h1:text-center">
        <Post />
    </article>
</div>