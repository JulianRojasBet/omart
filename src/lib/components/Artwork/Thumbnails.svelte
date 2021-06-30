<script>
	import { flip } from 'svelte/animate';
	import { lock as lockIcon, unlock as unlockIcon } from 'svelte-awesome/icons';

	import Icon from 'svelte-awesome';

	export let layers;

	function toggleLock(id) {
		const index = layers.findIndex((l) => l.id === id);
		layers[index].lock = !layers[index].lock;
		layers = layers;
	}
</script>

<div
	class="w-full sm:w-auto h-auto sm:h-full m-1 flex flex-row sm:flex-col flex-wrap justify-around"
>
	{#each layers as { id, src, lock } (id)}
		<div
			animate:flip={{ duration: 500 }}
			class="w-thumbnail relative bg-white"
			on:click={() => toggleLock(id)}
		>
			<div
				class="w-4 h-4 m-1 right-0 text-white bg-black rounded-full absolute leading-none flex justify-center items-center"
			>
				<Icon data={lock ? lockIcon : unlockIcon} scale="0.75" />
			</div>
			<img class="w-full" {src} alt="layer{id}" />
		</div>
	{/each}
</div>
