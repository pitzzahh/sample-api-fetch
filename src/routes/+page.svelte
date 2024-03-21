<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let products = data.products.products;

  onMount(() => {
    console.log(products);
  });
</script>

{#each products as product}
  <h1>{product.title}</h1>
  <p>{product.description}</p>
  <p>{product.price}</p>
  <img src={product.images[4]} alt={product.title} />
  <hr />
{/each}
