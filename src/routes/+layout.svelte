<script>
  import '../global.css';
  import Link from '../lib/Link.svelte';

  const links = [
    { id: '1', label: 'Home', path: '/' },
    { id: '2', label: 'Documents', path: '/documents'},
    { id: '3', label: 'Linkedin', path: 'https://www.linkedin.com/in/victorfausto/', customColor: 'blue' },
    { id: '4', label: 'Github', path: 'https://github.com/JoaumVictor', customColor: 'green' },
  ];
</script>

<div class="container">
  <nav>
    <img src="/images/voltera.jpeg" alt="logotipo">
    {#each links as link}
      <Link customColor={link.customColor} path="{link.path}">{link.label}</Link>
    {/each}
  </nav>
  <div class="space-nav" />
  <slot />
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100vh;
  }

  .space-nav {
    width: 20vh;
  }

  nav {
    position: fixed;
    height: 100vh;
    width: 20vh;
    display: flex;
    padding: 1rem;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #0d0d0d;
  }

  img {
    width: 60%;
    border-radius: 50%;
    margin-bottom: 20px;
  }
</style>