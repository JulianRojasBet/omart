<script lang="ts">
	import layer1 from '$static/artwork1/layer_1.png';
	import layer2 from '$static/artwork1/layer_2.png';
	import layer3 from '$static/artwork1/layer_3.png';
	import layer4 from '$static/artwork1/layer_4.png';
	import layer5 from '$static/artwork1/layer_5.png';

	import Page from '$lib/layout/Page.svelte';
	import Button from '$lib/components/UI/Button.svelte';
	import Thumbnails from '$lib/components/Artwork/Thumbnails.svelte';
	import Artwork from '$lib/components/Artwork/Artwork.svelte';

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
		<section class="h-auto sm:h-artwork flex flex-col sm:flex-row justify-center items-center">
			<Artwork {layers} />
			<Thumbnails {layers} />
		</section>
		<Button class="w-full my-3" label="Mezclar" on:click={shuffle} />
	</div>
</Page>
