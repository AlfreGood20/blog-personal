<script>
    let {
        titulo="Crea tu primera api rest con java spring boot",
        descripcion="Contruye una api rest por primera vez usando el framework spring.",
        fecha="29 de marzo de 2026",
        img="https://e4developer.com/wp-content/uploads/2018/01/spring-boot.png",
        etiquetas = [
            { tipo: "warning", titulo: "SQL" },    
            { tipo: "info", titulo: "Base de datos" }, 
            { tipo: "primary", titulo: "Fundamentos" }, 
            { tipo: "success", titulo: "Spring" },
            { tipo: "error", titulo: "Java" }
        ]

        } = $props();
</script>

<a href="#" class="cursor-pointer card bg-base-100 md:w-90 md:h-105 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-200 ">
    <figure>
        <img src={img} alt={titulo} />
    </figure>
    <div class="card-body">

        <div class="flex flex-wrap gap-4">
            {#each etiquetas as etiqueta}
                <div class={`badge badge-neutral badge-dash`}>{etiqueta.titulo}</div>
            {/each}
        </div>

        
        <h1 class="card-title text-2xl hover:underline">{titulo}</h1>
        <p>{descripcion}</p>

        <div class="card-actions justify-start">
            <div class="flex flex-row gap-2">
                <p class="font-extrabold hover:underline">Leer ahora</p>
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z" clip-rule="evenodd"/>
                </svg>
            </div>

            <p class="text-end text-sm font-light ">{fecha}</p>
        </div>
    </div>
</a>