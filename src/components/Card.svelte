<script>
    let {
            titulo,
            descripcion,
            fecha,
            img,
            etiquetas,
            path='#'
        } = $props();
</script>

<a href={`/blog/${path}`} class="card cursor-pointer bg-base-100 md:w-90 md:h-105 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-200 ">

    {#if img != null}
        <figure>
            <img src={img} alt={titulo} />
        </figure>
    {:else}
        <figure>
            <div class="skeleton h-50 w-full rounded rounded-b-3xl"></div>
        </figure>
    {/if}

    <div class="card-body">

        <div class="flex flex-wrap justify-center gap-4">
            {#if etiquetas == null}
                {#each [1,2,3,4,5] as esqueleto}
                    <div class="skeleton h-5 w-20"></div>
                {/each}
            {:else}
                {#each etiquetas as etiqueta}
                    <div class={`badge badge-neutral badge-dash`}>{etiqueta}</div>
                {/each}
            {/if}
        </div>


        {#if titulo != null}
            <h1 class="card-title text-2xl hover:underline">{titulo}</h1>
        {:else}
            <div class="mt-2 skeleton h-9 w-full"></div>
        {/if}

        {#if descripcion != null}
            <p>{descripcion}</p>
        {:else}
            <div class="flex flex-col gap-2">
                <div class="skeleton h-4 w-full"></div>
                <div class="skeleton h-4 w-full"></div>
                
            </div>
        {/if}

        <div class="card-actions items-center">
            <div class="flex flex-row gap-2">
                <p class="font-extrabold hover:underline">Leer ahora</p>
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z" clip-rule="evenodd"/>
                </svg>
            </div>

            {#if fecha != null}
                <p class="text-end text-sm font-light ">{fecha}</p>
            {:else}
                <p class="ml-20 text-end text-sm skeleton h-4  md:w-20"></p>
            {/if}
        </div>
    </div>
</a>