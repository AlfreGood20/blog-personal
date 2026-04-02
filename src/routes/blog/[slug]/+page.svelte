<svelte:head>
    <title>{titulo}</title>
</svelte:head>

<script>
    let {data} = $props();

    const titulo = data.titulo;
    const Post = data.contenido;
</script>

<div class="flex pt-30 justify-center pb-50">
    <article class="prose">
        <Post />
    </article>
</div>