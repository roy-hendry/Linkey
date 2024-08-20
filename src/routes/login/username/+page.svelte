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

	async function confirmUsername() {}
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
		/>
		<p>{isAvailable ? "Available" : "Not available"}</p>

		<button class="btn btn-success">Confirm username @{username}</button>
	</form>
</AuthCheck>
