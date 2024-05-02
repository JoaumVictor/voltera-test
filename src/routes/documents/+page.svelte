<script lang="ts">
  import { files } from '../../mock/files';
  import Link from '../../lib/Link.svelte';

  const links = files.map((file) => ({
    id: file.id,
    label: file.title,
  }));
</script>

<main>
  <header>
    <h1>Meus documentos:</h1>
  </header> 
  <nav>
    {#each links as link}
    <a href="/documents/{link.id}">
      <div class="document-card">
        <p>
          {link.label}
        </p>
      </div>
    </a>
    {/each}
  </nav>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    align-items: center;
    justify-content: start;
    height: 100vh;
    width: 100%;
  }

  header {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    width: 100%;
  }

  .document-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #c9c9c9;
    cursor: pointer;
  }

  .document-card:hover {
    transition: 0.2s;
    transform: scale(1.01);
    background: #000;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    min-width: 30%;
  }
</style>