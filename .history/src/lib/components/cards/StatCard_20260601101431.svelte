<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let { value = 0, suffix = '' } = $props();

	const count = tweened(0, {
		duration: 1800,
		easing: cubicOut
	});

	onMount(() => {
		count.set(value);
	});
</script>

<span>
	{Math.round($count)}{suffix}
</span>