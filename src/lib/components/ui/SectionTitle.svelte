<script>
	let {
		eyebrow = '',
		title,
		description = '',
		align = 'left',
		class: className = ''
	} = $props();
</script>

<div class={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-4xl ${className}`}>
	{#if eyebrow}
		<p class="mb-3 text-xs font-bold tracking-[0.14em] uppercase text-[var(--color-primary)]">
			{eyebrow}
		</p>
	{/if}

	<h2
		class="font-heading text-3xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
	>
		{title}
	</h2>

	{#if description}
		<p class="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
			{description}
		</p>
	{/if}
</div>