<script>
    let {imgs} = $props();

</script>

<div class="carousel w-full">
  {#each imgs as img, i}
    <div id="item{i + 1}" class="carousel-item w-full flex justify-center">
      <img alt="Slide {i + 1}" src={img} class="w-md" />
    </div>
  {/each}
</div>

<div class="flex w-full justify-center gap-2 py-2">
  {#each imgs as _, i}
    <a href="#item{i + 1}" class="btn btn-xs">{i + 1}</a>
  {/each}
</div>