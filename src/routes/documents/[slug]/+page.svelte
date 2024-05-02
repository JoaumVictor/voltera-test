<script lang="ts">
  import Link from '../../../lib/Link.svelte';
  import { onMount } from 'svelte';
  import { writable, get } from 'svelte/store';
  import { files } from '../../../mock/files';
  import { marked } from 'marked';

  let screenLoading = true;
  export let data;
  const documentId = data.props.slug;
  let documentMarkdown;

  let markdownContent = writable('');
  let inputText = '';
  let numberOfOccurrences = 0;

  const handleInputChange = (event) => {
    inputText = event.target.value;
    numberOfOccurrences = countOccurrences(get(markdownContent), inputText);
    updateQueryString();
  };

  function updateQueryString() {
    const url = new URL(window.location.href);
    url.searchParams.set('q', inputText);
    window.history.replaceState({}, '', url);
  }

  const countOccurrences = (text, searchString) => {
    if (!searchString) return 0;
    const plainText = text.replace(/<[^>]*>/g, '');
    const regex = new RegExp(searchString, 'gi'); 
    const matches = plainText.match(regex);
    return matches ? matches.length : 0;
  };

  onMount(async () => {
    // simula a requisição de ir buscar meu documento num banco de dados
    documentMarkdown = files.find((file) => file.id === documentId);
    if (!documentMarkdown) {
      screenLoading = false;
      return;
    }
    const response = await fetch(documentMarkdown.documentPath);
    const markdownText = await response.text();
    const htmlContent = await marked(markdownText);
    markdownContent.set(htmlContent);
    
    // verifica se tem query string e seta no meu campo de input
    const url = new URL(window.location.href);
    const query = url.searchParams.get('q');
    if (query) {
      inputText = query;
      countOccurrences(htmlContent, query);
    }
    screenLoading = false;
  });
</script>

<main>
  {#if screenLoading}
    <div class="container-center">Carregando...</div>
  {/if}

  {#if !documentMarkdown && !screenLoading}
    <div class="container-center">
      <h1>Documento não encontrado</h1>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-4064375-3363936.png" alt="Erro" />
      <Link path="/documents">Voltar</Link>
    </div>
  {/if}

  {#if documentMarkdown && !screenLoading}
  <nav>
    <div class="search-container">
      <p>Buscar no texto</p>
      <input type="text" bind:value={inputText} on:input={handleInputChange}>
      {#if numberOfOccurrences > 0}
        <span>Quantidade de ocorrências: {numberOfOccurrences}</span>
      {/if}
    </div>
  </nav>
  <h1>
    Documento: {documentMarkdown.title}
  </h1>
  <div class="md-container">
    {@html $markdownContent}
  </div>
  {/if}

</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
    width: 100%;
    gap:1rem;
    padding: 5rem;
    margin-bottom: 20px;
  }

  .search-container {
    display: flex;
    height: 40px;
    flex-direction: column;
    gap: 5px;
  }

  nav {
    width: 60%;
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
  }

  input {
    color: black;
    padding: 3px;
    padding-left: 10px;
    border-radius: 5px;
    border: none;
    background-color: aliceblue;
    outline: none;
    font-weight: 700;
    width: 300px;
  }

  .md-container {
    padding-bottom: 200px;
    width: 60%;
  }

  .container-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>