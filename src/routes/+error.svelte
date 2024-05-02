<script>
  import Link from '../lib/Link.svelte';
</script>

<main>
  <img src="/images/error404.png" alt="Página não encontrada">
  <Link path="/documents">Voltar para home</Link>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  img {
    width: 400px;
  }
</style>