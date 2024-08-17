<script>
	import { page } from "$app/stores";
	import { fly, fade } from "svelte/transition";
</script>

<!-- Key rebuilds all children onChange
 in this case we use it to subscribe to the page URL -->
{#key $page.url}
	<div in:fade={{ duration: 500 }}>
		<div in:fly={{ x: "-100%", duration: 750 }}>
			<slot />
		</div>
	</div>
{/key}
