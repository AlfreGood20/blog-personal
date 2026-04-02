
<script>
    let {imagen, nombre} = $props();
</script>

<img  src={imagen} 
    class=
    "active:-translate-y-6 
    rounded-lg 
    hover:-translate-y-2 
    hover:shadow-2xl 
    transition-all 
    duration-200"
     
    alt={nombre}/>