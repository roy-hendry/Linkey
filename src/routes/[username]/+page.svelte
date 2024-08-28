<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>@{data.username} Links</title>
  <meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8">
  <h1 class="text-7xl my-8 text-purple-500">@{data.username}</h1>
  <img
    src={data.photoURL ?? "/src/lib/user.png"}
    alt="photoURL"
    width="256"
    class="mx-auto"
  />

  <p class="text-xl my-8">{data.bio ?? "No bio yet..."}</p>
  <ul class="list-none">
    {#each data.links as item}
      <!-- Automatically console log each item -->
      {@debug item}
    {/each}
  </ul>
</main>
