<script lang="ts">
	import { flip } from 'svelte/animate';

	import layer1 from '$static/artwork1/layer_1.svg';
	import layer2 from '$static/artwork1/layer_2.svg';
	import layer3 from '$static/artwork1/layer_3.svg';
	import layer4 from '$static/artwork1/layer_4.svg';
	import layer5 from '$static/artwork1/layer_5.svg';

	import Page from '$lib/layout/Page.svelte';
	import Button from '$lib/components/UI/Button.svelte';

	let layers = [
		{ id: 1, src: layer1 },
		{ id: 2, src: layer2 },
		{ id: 3, src: layer3 },
		{ id: 4, src: layer4 },
		{ id: 5, src: layer5 }
	];

	function shuffle() {
		const old = JSON.stringify(layers);
		const background = layers[0];
		do {
			layers = layers.slice(1).sort(() => Math.random() - 0.5);
			layers = [background, ...layers];
		} while (old === JSON.stringify(layers));
	}
</script>

<Page class="flex flex-col items-center">
	<div class="m-10">
		<section class="flex flex-row">
			<div class="artwork relative top-0">
				{#each layers as { id, src }, i (id)}
					<img class="absolute" {src} alt="layer{i}" />
				{/each}
			</div>
			<div class="ml-5">
				{#each layers as { id, src }, i (id)}
					<img animate:flip={{ duration: 500 }} class="thumbnail mb-2" {src} alt="layer{i}" />
				{/each}
			</div>
		</section>
		<div class="mix-btn relative">
			<Button class="w-full" label="Mezclar" on:click={shuffle} />
		</div>
	</div>
</Page>

<style>
	.artwork {
		width: 500px;
		max-width: 500px;
		height: 500px;
	}
	.thumbnail {
		width: 93px;
	}
</style>
