<script>
	import { getIcon } from '$lib/iconRegistry.js';

	let { stat } = $props();
	let Icon = $derived(getIcon(stat.icon));
</script>

<article
	class="flex items-center gap-3 border-b border-(--color-border) py-4 last:border-b-0 sm:border-r sm:border-b-0 sm:px-4 sm:last:border-r-0"
>
	<div
		class="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--color-secondary-soft) text-(--color-secondary)"
	>
		<Icon size={22} />
	</div>
	<div>
		<p class="font-heading text-xl font-bold text-(--color-text-primary)">{stat.value}</p>
		<p class="text-xs leading-5 font-medium text-(--color-text-secondary)">{stat.label}</p>
	</div>
</article>
