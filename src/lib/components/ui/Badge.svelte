<script>
	let { label, tone = 'green' } = $props();
</script>

<span
	class={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold ${
		tone === 'blue'
			? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
			: 'border-[var(--color-secondary)] bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]'
	}`}
>
	{label}
</span>
