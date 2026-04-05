<script>
    import { page } from "$app/state";
</script>


<div class="flex pt-60 pb-42  md:pt-40 md:pb-25 items-center justify-center p-4">
    <div class="flex flex-col items-center justify-center text-center">

        <h1 class="text-6xl font-extrabold text-error mb-2">{page.status}</h1>
        <p class="text-lg opacity-80 mb-6">{page.error.message}</p>
        
        <a class="btn btn-outline" href="/">Regresar</a>
    </div>
</div>