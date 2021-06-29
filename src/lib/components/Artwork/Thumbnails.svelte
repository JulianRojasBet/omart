<script>
    import { flip } from 'svelte/animate';

    export let layers;
</script>

<div class="w-full sm:w-auto h-auto sm:h-full m-1 flex flex-row sm:flex-col flex-wrap justify-around">
    {#each layers as { id, src }, i (id)}
        <img animate:flip={{ duration: 500 }} class="w-thumbnail" {src} alt="layer{i}" />
    {/each}
</div>