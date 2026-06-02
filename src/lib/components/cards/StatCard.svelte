<script>
	import {
		ShieldCheck,
		Camera,
		MapPin,
		Users
	} from 'lucide-svelte';

	import Counter from './Counter.svelte';

	let { stat } = $props();

	const icons = {
		ShieldCheck,
		Camera,
		MapPin,
		Users
	};

	const Icon = icons[stat.icon];
</script>

<div class="flex items-center gap-4 px-6 py-6 min-w-0">
	<div
		class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]"
	>
		{#if Icon}
			<Icon size={22} />
		{/if}
	</div>

	<div class="min-w-0">
		<p
			class="text-3xl font-extrabold leading-none text-[var(--color-text-primary)]"
		>
			{#if stat.value === '+15'}
				<Counter value={15} suffix="+" />
			{:else if stat.value === '+100K'}
				<Counter value={100} suffix="K" />
			{:else if stat.value === '3'}
				<Counter value={3} />
			{:else if stat.value === '98%'}
				<Counter value={98} suffix="%" />
			{:else}
				{stat.value}
			{/if}
		</p>

		<p
			class="mt-1 text-sm leading-5 text-[var(--color-text-secondary)]"
		>
			{stat.label}
		</p>
	</div>
</div>