<script lang="ts">
	let className: string;

	export { className as class };
</script>

<main class="w-full {className}">
	<slot />
</main>
