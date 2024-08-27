<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { db, user } from "$lib/firebase";
  import { doc, getDoc, writeBatch } from "firebase/firestore";

  let username = "";
  let loading = false;
  let isAvailable = false;
  let debountTimer: NodeJS.Timeout;

  async function checkAvailability() {
    isAvailable = false;
    clearTimeout(debountTimer);

    loading = true;

    // This is a debouncing technique to prevent the function from being called too frequently
    // It will only call after the user has stopped typing for 500ms
    debountTimer = setTimeout(async () => {
      console.log("Checking availability of", username);

      // Check if the username already exists in the database
      const ref = doc(db, "usernames", username);
      // If the document exists, then the username is not available
      const exists = await getDoc(ref).then((doc) => doc.exists());

      isAvailable = !exists;
      loading = false;
    }, 500);
  }

  async function confirmUsername() {
    console.log("Confirming username", username);

    // As we are making writes to two different documents, we need to use a batch write
    // This ensures that both writes are successful, or none of them are
    const batch = writeBatch(db);
    batch.set(doc(db, "usernames", username), { uid: $user?.uid });
    batch.set(doc(db, "users", $user!.uid), {
      username,
      photoURL: $user?.photoURL ?? null,
      published: true,
      bio: "I am the Walrus",
      links: [
        {
          title: "Test Link",
          url: "https://kung.foo",
          icon: "custom",
        },
      ],
    });

    await batch.commit();

    username = "";
    isAvailable = false;
  }

  const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  // Validation checks via Svelte's reactive statements
  $: isValid =
    username?.length > 2 && username.length < 16 && re.test(username);
  $: isTouched = username.length > 0;
  $: isTaken = isValid && !isAvailable && !loading;
</script>

<AuthCheck>
  <h2>Username</h2>

  <form class="w-2/5" on:submit|preventDefault={confirmUsername}>
    <input
      type="text"
      placeholder="Username"
      class="input w-full"
      bind:value={username}
      on:input={checkAvailability}
      class:input-error={!isValid && isTouched}
      class:input-warning={isTaken}
      class:input-success={isAvailable && isValid && !loading}
    />

    <div class="my-4 min-h-16 px-8 w-full">
      {#if loading}
        <p class="text-secondary">
          Checking availability of @{username}...
        </p>
      {/if}

      {#if !isValid && isTouched}
        <p class="text-error text-sm">
          must be 3-16 characters long, alphanumeric only
        </p>
      {/if}

      {#if isValid && !isAvailable && !loading}
        <p class="text-warning text-sm">
          @{username} is not available
        </p>
      {/if}

      {#if isValid && isAvailable && !loading}
        <button class="btn btn-success">Confirm username @{username} </button>
      {/if}
    </div>
  </form>
</AuthCheck>
