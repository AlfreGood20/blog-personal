<script>
    let {fecha, tiempoLectura} = $props();
</script>

<div class="flex flex-row text-xs gap-5 items-center justify-between">

     <div class="flex items-center gap-1">
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <label for="tiempo">{tiempoLectura}</label>
    </div>

    <label for="fecha">Ultima actulización: {fecha}</label>

</div>