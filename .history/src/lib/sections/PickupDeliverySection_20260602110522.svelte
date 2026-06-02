<script>
	import { MapPin } from 'lucide-svelte';
	import { pickupDelivery } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<article
	class="relative overflow-hidden rounded-3xl bg-[var(--color-primary-soft)] p-6 shadow-[0_18px_50px_rgba(15,39,68,0.06)] lg:p-8"
>
	<div class="relative z-10 max-w-sm">
		<p
			class="font-heading text-2xl font-bold text-[var(--color-primary)] lg:text-3xl"
		>
			{pickupDelivery.title}
		</p>

		<h2
			class="mt-3 font-heading text-3xl leading-tight font-bold text-[var(--color-text-primary)] lg:text-4xl"
		>
			{pickupDelivery.subtitle}
		</h2>

		<ul
			class="mt-6 grid gap-3 text-base text-[var(--color-text-secondary)]"
		>
			{#each pickupDelivery.points as point}
				<li class="flex items-center gap-3">
					<span
						class="size-2.5 rounded-full bg-[var(--color-secondary)]"
					></span>
					{point}
				</li>
			{/each}
		</ul>

		<Button
			label={pickupDelivery.cta}
			variant="soft"
			class="mt-7"
		/>
	</div>

	<img
		class="mt-6 h-56 w-full rounded-2xl object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[45%] lg:rounded-none"
		src={pickupDelivery.image}
		alt={pickupDelivery.title}
	/>

	<div
		class="absolute top-8 right-8 hidden size-14 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white shadow-lg lg:flex"
	>
		<MapPin size={28} />
	</div>
</article>
