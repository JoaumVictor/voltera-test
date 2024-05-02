<script>
  import { goto } from '$app/navigation';
  if (typeof window !== 'undefined') {
    goto('/documents');
  }
</script>

<main>
  <p>Redirecionando...</p>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>