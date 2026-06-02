<script>
	import { Star } from 'lucide-svelte';

	let { testimonial } = $props();
</script>

<article
	class="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_45px_rgba(15,39,68,0.06)]"
>
	<div class="mb-4 flex text-[var(--color-secondary)]">
		{#each Array(5) as _}
			<Star size={15} fill="currentColor" />
		{/each}
	</div>
	<p class="min-h-20 text-sm leading-7 text-[var(--color-text-secondary)]">{testimonial.text}</p>
	<div class="mt-5 flex items-center gap-3">
		<img
			class="size-11 rounded-full object-cover"
			src={testimonial.avatar}
			alt={testimonial.name}
		/>
		<div>
			<h3 class="text-sm font-bold text-[var(--color-text-primary)]">{testimonial.name}</h3>
			<p class="text-xs text-[var(--color-text-secondary)]">{testimonial.location}</p>
		</div>
	</div>
</article>
