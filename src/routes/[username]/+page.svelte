<script lang="ts">
  import type { PageData } from "./$types";
  import UserLink from "$lib/components/UserLink.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>@{data.username} Links</title>
  <meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8">
  <h1 class="text-7xl my-8 text-purple-500">@{data.username}</h1>
  <img
    src={data.photoURL ?? "user.png"}
    alt="photoURL"
    width="256"
    class="mx-auto"
  />

  <p class="text-xl my-8">{data.bio ?? "No bio yet..."}</p>
  <ul class="flex flex-col items-center justify-center h-full">
    {#each data.links as item}
      <li class="w-56 my-2">
        <UserLink {...item} />
      </li>
    {/each}
  </ul>

  <button
    class="btn bg-purple-500 text-white px-4 py-2 rounded-lg my-8"
    on:click={() => {
      navigator.clipboard.writeText(window.location.href);
    }}
    >Copy link 📜
  </button>
</main>
