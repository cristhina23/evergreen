<script>
	import { Phone, MapPin, Clock, MessageCircle } from 'lucide-svelte';
	import { locations, sectionContent } from '../../data/site.js';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import LocationCard from '$lib/components/cards/LocationCard.svelte';
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';

	let activeIndex = $state(0);
	let active = $derived(locations[activeIndex]);
</script>

<section class="py-10 sm:py-14">
	<Container >
		<div class="rounded-3xl bg-(--color-surface) p-4 sm:p-6">
			<SectionTitle
			class="text-4"
				title={sectionContent.locations.title}
				description={sectionContent.locations.description}
			/>
			<div class="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.3fr_0.9fr]">
	<!-- SIDEBAR -->
	<div class="grid gap-3">
		{#each locations as location, index}
			<button onclick={() => (activeIndex = index)} class="text-left">
				<LocationCard {location} active={activeIndex === index} />
			</button>
		{/each}

		<div class="rounded-2xl bg-[var(--color-primary-soft)] p-4">
			<div
				class="mb-2 flex size-10 items-center justify-center rounded-full bg-white text-[var(--color-primary)]"
			>
				<MessageCircle size={22} />
			</div>

			<h3 class="text-sm font-bold text-[var(--color-text-primary)]">
				{sectionContent.locations.deliveryTitle}
			</h3>

			<p class="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">
				{sectionContent.locations.deliveryText}
			</p>

			<a
				href="/"
				class="mt-2 inline-flex text-xs font-bold text-[var(--color-primary)]"
			>
				{sectionContent.locations.deliveryLink}
			</a>
		</div>
	</div>

	<!-- FOTO -->
	<div>
		<img
			class="h-80 w-full rounded-3xl object-cover shadow-[0_15px_40px_rgba(15,39,68,0.12)] sm:h-[500px]"
			src={active.image}
			alt={active.name}
		/>

		<div class="mt-3 grid grid-cols-3 gap-2">
			{#each locations as location}
				<button
					onclick={() => (activeIndex = locations.indexOf(location))}
					class="overflow-hidden rounded-xl"
				>
					<img
						class="h-20 w-full object-cover transition duration-300 hover:scale-105"
						src={location.image}
						alt={location.name}
					/>
				</button>
			{/each}
		</div>
	</div>

	<!-- INFORMACION -->
	<div class="rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(15,39,68,0.06)]">
		<h3
			class="font-heading text-3xl font-bold text-[var(--color-secondary)]"
		>
			{active.name}
		</h3>

		<div class="mt-3">
			<Badge label={active.badge} />
		</div>

		<div class="mt-6 space-y-5 text-sm text-[var(--color-text-secondary)]">
			<div class="flex gap-3">
				<MapPin
					class="mt-0.5 shrink-0 text-[var(--color-secondary)]"
					size={18}
				/>
				<p>{active.address}</p>
			</div>

			<div class="flex gap-3">
				<Phone
					class="mt-0.5 shrink-0 text-[var(--color-secondary)]"
					size={18}
				/>
				<p>{active.phone}</p>
			</div>

			<div class="flex gap-3">
				<MessageCircle
					class="mt-0.5 shrink-0 text-[var(--color-secondary)]"
					size={18}
				/>
				<p>{active.whatsapp}</p>
			</div>

			<div class="flex gap-3">
				<Clock
					class="mt-0.5 shrink-0 text-[var(--color-secondary)]"
					size={18}
				/>
				<p>{active.schedule}</p>
			</div>
		</div>

		<div class="mt-8 flex flex-col gap-3">
			<Button
				label={sectionContent.locations.directionsCta}
				icon="MapPin"
				class="w-full"
			/>

			<Button
				label={sectionContent.locations.whatsappCta}
				icon="MessageCircle"
				variant="secondary"
				class="w-full"
			/>
		</div>
	</div>
</div>
		</div>
	</Container>
</section>
