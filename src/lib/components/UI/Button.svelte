<script lang="ts">
	export let label: string;
	export let color: string = 'gray-900';
	export let textColor: string = 'white';
	export let rounded: string = 'md';

	let className: string;

	export { className as class };
</script>

<button class="{className} p-3 text-{textColor} bg-{color} rounded-{rounded} hover:opacity-80 shadow" on:click>
	{label}
</button>
