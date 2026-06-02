<script>
	import { MapPin } from 'lucide-svelte';

	let { location, active = false } = $props();
</script>

<article
	class={`flex items-center gap-3 rounded-2xl border p-3 transition ${
		active
			? 'border-[var(--color-secondary)] bg-[var(--color-secondary)] text-white shadow-[0_16px_30px_rgba(76,175,80,0.22)]'
			: 'border-[var(--color-border)] bg-white text-[var(--color-text-primary)]'
	}`}
>
	<img class="size-14 shrink-0 rounded-xl object-cover" src={location.image} alt={location.name} />
	<div class="min-w-0 flex-1">
		<h3 class="truncate text-sm font-bold">{location.name}</h3>
		<p
			class={`truncate text-xs ${active ? 'text-white/85' : 'text-[var(--color-text-secondary)]'}`}
		>
			{location.address}
		</p>
	</div>
	<div
		class={`flex size-8 shrink-0 items-center justify-center rounded-full ${
			active
				? 'bg-white/20 text-white'
				: 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
		}`}
	>
		<MapPin size={16} />
	</div>
</article>
