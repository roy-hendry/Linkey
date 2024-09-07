<script lang="ts">
  import { page } from "$app/stores";
  import UserLink from "$lib/components/UserLink.svelte";
  import { db, userData, user } from "$lib/firebase";
  import {
    arrayRemove,
    arrayUnion,
    doc,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { writable } from "svelte/store";
  import SortableList from "$lib/components/SortableList.svelte";

  const icons = [
    "Twitter",
    "YouTube",
    "TikTok",
    "LinkedIn",
    "GitHub",
    "Custom",
  ];

  const formDefaults = {
    icon: "custom",
    title: "",
    url: "https://",
  };

  const formData = writable(formDefaults);

  let showForm = false;

  // Reactive form validation
  $: urlIsValid = $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $: titleIsValid = $formData.title.length < 20 && $formData.title.length > 0;
  $: formIsValid = urlIsValid && titleIsValid;

  function sortList(e: CustomEvent) {
    const newList = e.detail;
    const userRef = doc(db, "users", $user!.uid);
    setDoc(userRef, { links: newList }, { merge: true });
  }

  async function addLink(e: SubmitEvent) {
    const userRef = doc(db, "users", $user!.uid);

    await updateDoc(userRef, {
      links: arrayUnion({
        ...$formData,
        id: Date.now().toString(),
      }),
    });

    formData.set({
      icon: "",
      title: "",
      url: "",
    });

    showForm = false;
  }

  async function deleteLink(item: any) {
    const userRef = doc(db, "users", $user!.uid);
    await updateDoc(userRef, {
      links: arrayRemove(item),
    });
  }

  function cancelLink() {
    formData.set(formDefaults);
    showForm = false;
  }
</script>

<main class="max-w-xl mx-auto">
  {#if $userData?.username == $page.params.username}
    <h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center">
      Edit your Profile
    </h1>

    <!-- Slot props are user here to pass the item and index to the UserLink component -->
    <SortableList list={$userData?.links} on:sort={sortList} let:item let:index>
      <div class="group relative">
        <UserLink {...item} />
        <button
          on:click={() => deleteLink(item)}
          class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10"
          >Delete</button
        >
      </div>
    </SortableList>

    {#if showForm}
      <form
        on:submit|preventDefault={addLink}
        class="bg-base-200 p-6 w-full mx-auto rounded-xl"
      >
        <select
          name="icon"
          class="select select-sm"
          bind:value={$formData.icon}
        >
          {#each icons as icon}
            <option value={icon.toLowerCase()}>{icon}</option>
          {/each}
        </select>
        <input
          name="title"
          type="text"
          placeholder="Title"
          class="input input-sm"
          bind:value={$formData.title}
        />
        <input
          name="url"
          type="text"
          placeholder="URL"
          class="input input-sm"
          bind:value={$formData.url}
        />
        <div class="my-4">
          {#if !titleIsValid}
            <p class="text-error text-xs">Must have valid title</p>
          {/if}
          {#if !urlIsValid}
            <p class="text-error text-xs">Must have a valid URL</p>
          {/if}
          {#if formIsValid}
            <p class="text-success text-xs">Looks good!</p>
          {/if}
        </div>

        <button
          disabled={!formIsValid}
          type="submit"
          class="btn btn-success block">Add Link</button
        >

        <button type="button" class="btn btn-xs my-4" on:click={cancelLink}
          >Cancel</button
        >
      </form>
    {:else}
      <button
        on:click={() => (showForm = true)}
        class="btn btn-outline btn-info block mx-auto my-4"
      >
        Add a Link
      </button>
    {/if}
  {/if}
</main>
