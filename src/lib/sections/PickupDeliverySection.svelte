<script>
	import { MapPin } from 'lucide-svelte';
	import { pickupDelivery } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<article
	class="relative overflow-hidden rounded-3xl bg-[var(--color-primary-soft)] p-6 shadow-[0_18px_50px_rgba(15,39,68,0.06)]"
>
	<div class="relative z-10 max-w-sm">
		<p class="font-heading text-xl font-bold text-[var(--color-primary)]">{pickupDelivery.title}</p>
		<h2 class="mt-2 font-heading text-2xl leading-tight font-bold text-[var(--color-text-primary)]">
			{pickupDelivery.subtitle}
		</h2>
		<ul class="mt-5 grid gap-2 text-sm text-[var(--color-text-secondary)]">
			{#each pickupDelivery.points as point}
				<li class="flex items-center gap-2">
					<span class="size-2 rounded-full bg-[var(--color-secondary)]"></span>{point}
				</li>
			{/each}
		</ul>
		<Button label={pickupDelivery.cta} variant="soft" class="mt-5" />
	</div>
	<img
		class="mt-6 h-48 w-full rounded-2xl object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:rounded-none"
		src={pickupDelivery.image}
		alt={pickupDelivery.title}
	/>
	<div
		class="absolute top-8 right-8 hidden size-14 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white shadow-lg lg:flex"
	>
		<MapPin size={28} />
	</div>
</article>
