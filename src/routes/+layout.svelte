<script>
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
    import '../app.css';
    
    let { children } = $props();
</script>



<Navbar />

<main class="h-auto">
    {@render children?.()}
</main>

<Footer/>

