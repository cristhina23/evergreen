<script>
	let { eyebrow = '', title, description = '', align = 'left', class: className = '' } = $props();
</script>

<div class={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
	{#if eyebrow}
		<p class="mb-2 text-xs font-bold tracking-[0.14em] text-[var(--color-primary)] uppercase">
			{eyebrow}
		</p>
	{/if}
	<h2
		class="font-heading text-3xl leading-tight font-bold text-[var(--color-text-primary)] sm:text-3xl"
	>
		{title}
	</h2>
	{#if description}
		<p class="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{description}</p>
	{/if}
</div>
