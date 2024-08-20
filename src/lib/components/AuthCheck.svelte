<script lang="ts">
	import { user } from "$lib/firebase";
</script>

{#if $user}
	<slot />
{:else}
	<p class="text-error my-5">You must be signed in to view this page</p>
	<a class="btn btn-primary" href="/login">Sign in</a>
{/if}
