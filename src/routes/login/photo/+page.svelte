<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { user, userData, storage, db } from "$lib/firebase";
  import { doc, updateDoc } from "firebase/firestore";
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

  let previewURL: string;
  let uploading = false;
  $: href = `/${$userData?.username}/edit`;

  async function upload(e: any) {
    uploading = true;
    const file = e.target.files[0];
    // Create a URL that can be used to reference a file object for previewing it in the browser
    previewURL = URL.createObjectURL(file);
    // Create a reference to the file in Firebase Storage
    const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
    // Upload the file to the bucket via the "users/$uid/profile.png" path
    const result = await uploadBytes(storageRef, file);
    // Store the download URL in Firestore
    const url = await getDownloadURL(result.ref);

    // Update the user's photoURL in Firestore
    await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
    uploading = false;
  }
</script>

<AuthCheck>
  <h2 class="card-title">Upload a profile photo</h2>
  <form class="max-w-screen-md w-full">
    <div class="form-control w-full max-w-xs my-10 mx-auto text-center">
      <img
        src={previewURL ?? $userData?.photoURL ?? "/src/lib/user.png"}
        alt="photoURL"
        width="256"
        height="256"
        class="mx-auto"
      />
      <label for="photoURL" class="label">
        <span class="label-text">Pick a file</span>
      </label>
      <input
        on:change={upload}
        name="photoURL"
        type="file"
        class="file-input file-input-bordered w-full max-w-xs"
        accept="image/png, image/jpeg, image/gif, image/webp"
      />
      {#if uploading}
        <p>Uploading...</p>
        <progress class="progress progress-info w-56 mt-6" />
      {/if}
    </div>
  </form>

  <a {href} class="btn btn-primary"> Finish </a>
</AuthCheck>
