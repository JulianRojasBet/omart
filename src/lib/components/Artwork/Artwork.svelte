<script>
	export let layers;
</script>

<div class="w-artwork h-artwork m-1 relative top-0">
	{#each layers as { id, src }, i (id)}
		<img class="absolute" {src} alt="layer{i}" />
	{/each}
</div>
