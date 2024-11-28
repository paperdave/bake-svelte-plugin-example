<script>
  "use client";
  let { initial } = $props();
  let count = $state(initial);
  function increment() {
    count += 1;
  }
</script>

<div class="counter">
  <div class="client-component">
    <div class="client-badge">
      <span class="dot"></span>
      Client Component
    </div>
    <p class="label">Interactive Counter</p>
    <button onclick={increment}>
      Clicked {count}
      {count === 1 ? "time" : "times"}
    </button>
  </div>
</div>

<style>
  .counter {
    width: 100%;
    perspective: 1000px;
  }

  .client-component {
    background: #ff3e00;
    border-radius: 24px;
    padding: 3rem;
    text-align: center;
    position: relative;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.2),
      0 20px 25px -5px rgba(0, 0, 0, 0.15);
    transform-style: preserve-3d;
    transform: translateY(0);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .client-component:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 12px 20px -5px rgba(0, 0, 0, 0.3),
      0 30px 35px -10px rgba(0, 0, 0, 0.25);
  }

  .client-badge {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0 24px 0 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    backdrop-filter: blur(8px);
  }

  .dot {
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  .label {
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  button {
    background: white;
    color: #ff3e00;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 12px;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: "Inter", sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow:
      0 6px 8px rgba(0, 0, 0, 0.2),
      0 0 0 3px rgba(255, 255, 255, 0.4);
  }

  button:active {
    transform: translateY(0);
  }
</style>
