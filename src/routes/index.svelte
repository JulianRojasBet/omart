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
		{ index: 0, id: 1, src: layer1, lock: true },
		{ index: 1, id: 2, src: layer2, lock: false },
		{ index: 2, id: 3, src: layer3, lock: false },
		{ index: 3, id: 4, src: layer4, lock: false },
		{ index: 4, id: 5, src: layer5, lock: false }
	];

	function shuffle() {
		let _layers = [];
		const old = JSON.stringify(layers);
		const lockLayers = layers.filter(({ lock }) => lock);
		const noLockLayers = layers.filter(({ lock }) => !lock);
		do {
			_layers = [...noLockLayers.sort(() => Math.random() - 0.5)];
			lockLayers.forEach((l) => _layers.splice(l.index, 0, l));
			_layers = _layers.map((l, index) => ({ ...l, index }));
		} while (old === JSON.stringify(_layers));
		layers = [..._layers];
	}
</script>

<Page class="flex flex-col items-center">
	<div class="m-10">
		<section class="h-auto sm:h-artwork flex flex-col sm:flex-row justify-center items-center">
			<Artwork {layers} />
			<Thumbnails bind:layers />
		</section>
		<Button class="w-full my-3" label="Mezclar" on:click={shuffle} />
	</div>
</Page>
