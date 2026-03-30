<script>
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";

    let { children } = $props();
</script>



<Navbar />

<main class="bg-[#EFEAE6] h-auto ">
    {@render children?.()}
</main>

<Footer/>

