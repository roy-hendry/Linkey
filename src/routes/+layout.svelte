<script lang="ts">
	import { user, userData } from "$lib/firebase";
	import "../app.css";

	// Preloading global data
	$user;
	$userData;
</script>

<div class="min-h-screen flex flex-col">
	<slot />
</div>
