<script>
  import Counter from "../components/Counter.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&family=Space+Grotesk:wght@700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <div class="server-container">
    <div class="server-content">
      <div class="server-badge">Server Component</div>
      <div class="client-wrapper">
        <Counter initial={5} />
      </div>
    </div>
    <p class="version">Bun v1.2</p>
  </div>
</main>

<style>
  :global(body) {
    font-family: "Inter", sans-serif;
    margin: 0;
    background: #1e293b;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 2rem;
    position: relative;
  }

  .server-container {
    width: 100%;
    max-width: 64rem;
    text-align: center;
    color: #94a3b8;
  }

  .server-content {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 3rem;
    margin: 0 auto;
    position: relative;
    max-width: 48rem;
  }

  .client-wrapper {
    margin-top: 3rem;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .server-badge {
    position: absolute;
    top: 0;
    right: 0;
    background: #475569;
    color: #e2e8f0;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0 24px 0 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h1 {
    font-family: "Space Grotesk", sans-serif;
    color: #e2e8f0;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .version {
    color: #64748b;
    display: block;
    font-weight: bold;
    margin: 3rem auto 0;
  }
</style>
