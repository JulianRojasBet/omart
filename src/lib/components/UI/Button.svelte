<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		self.addEventListener('click', createRipple);
	});

	export let label: string;
	export let color: string = 'gray-900';
	export let textColor: string = 'white';
	export let rounded: string = 'md';

	let className: string;
	let self;

	export { className as class };

	function createRipple(event) {
		const button = event.currentTarget;

		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
		circle.classList.add('ripple');

		const ripple = button.getElementsByClassName('ripple')[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	}
</script>

<button
	bind:this={self}
	class="{className} p-3 text-{textColor} bg-{color} rounded-{rounded} hover:opacity-80 shadow relative overflow-hidden"
	on:click
>
	{label}
</button>
