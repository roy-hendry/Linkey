<script lang="ts">
  import type { PageData } from "./$types";
  import { userData } from "$lib/firebase";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";

  export let data: PageData;
</script>

<main class="max-w-lg prose text-center mx-auto my-6">
  <a href="/{$userData?.username}/edit" class="btn btn-primary fixed left-5">
    Edit page
  </a>

  <p>Current Bio: <span class="text-info">{data.bio}</span></p>

  <!-- Using stores to display status code and form errors -->
  <p>Status Code: {$page.status}</p>
  <!-- We check for problems which we set on the page.server.ts file if the length is too high -->
  <p class="text-error">{$page.form?.problem ?? ""}</p>

  <!-- This is a POST instead of an onSubmit event handler as we want to send this to the server to be handled by a SvelteKit action -->
  <form method="POST" use:enhance>
    <div class="form-control">
      <label for="bio" class="label">
        <span class="label-text">Your bio</span>
      </label>
      <textarea
        name="bio"
        class="textarea textarea-bordered textarea-accent"
        value={data.bio}
      />
    </div>
    <button class="btn btn-primary my-5">Update Bio</button>
  </form>
</main>
