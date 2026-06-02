<script>
	import Counter from './Counter.svelte';

	let { stat } = $props();

	const Icon = stat.icon;
</script>

<div class="flex items-center gap-4 px-5 py-6 min-w-0">
	<div
		class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]"
	>
		<Icon size={22} />
	</div>

	<div class="min-w-0">
		{#if stat.value}
			<p
				class="text-3xl font-extrabold leading-none text-[var(--color-text-primary)]"
			>
				<Counter
					value={stat.value}
					suffix={stat.suffix ?? ''}
				/>
			</p>
		{/if}

		<p
			class="mt-1 text-sm leading-5 text-[var(--color-text-secondary)]"
		>
			{stat.label}
		</p>
	</div>
</div>