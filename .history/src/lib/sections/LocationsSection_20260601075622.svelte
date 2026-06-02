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
	<Container>
		<div class="rounded-3xl bg-[var(--color-surface)] p-4 sm:p-6">
			<SectionTitle
				title={sectionContent.locations.title}
				description={sectionContent.locations.description}
			/>
			<div class="mt-6 grid gap-5 lg:grid-cols-[0.85fr_1.2fr_0.8fr_0.95fr]">
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
						<a href="/" class="mt-2 inline-flex text-xs font-bold text-[var(--color-primary)]"
							>{sectionContent.locations.deliveryLink}</a
						>
					</div>
				</div>

				<div>
					<img
						class="h-72 w-full rounded-2xl object-cover sm:h-full"
						src={active.image}
						alt={active.name}
					/>
					<div class="mt-3 grid grid-cols-3 gap-2">
						{#each locations as location}
							<img class="h-20 rounded-xl object-cover" src={location.image} alt={location.name} />
						{/each}
					</div>
				</div>

				<div class="rounded-2xl bg-white p-5">
					<h3 class="font-heading text-2xl font-bold text-[var(--color-secondary)]">
						{active.name}
					</h3>
					<Badge label={active.badge} />
					<div class="mt-5 grid gap-4 text-sm text-[var(--color-text-secondary)]">
						<p class="flex gap-2">
							<MapPin class="shrink-0 text-[var(--color-secondary)]" size={18} />
							{active.address}
						</p>
						<p class="flex gap-2">
							<Phone class="shrink-0 text-[var(--color-secondary)]" size={18} />
							{active.phone}
						</p>
						<p class="flex gap-2">
							<MessageCircle class="shrink-0 text-[var(--color-secondary)]" size={18} />
							{active.whatsapp}
						</p>
						<p class="flex gap-2">
							<Clock class="shrink-0 text-[var(--color-secondary)]" size={18} />
							{active.schedule}
						</p>
					</div>
					<div class="mt-5 flex flex-wrap gap-2">
						<Button label={sectionContent.locations.directionsCta} icon="MapPin" />
						<Button
							label={sectionContent.locations.whatsappCta}
							icon="MessageCircle"
							variant="secondary"
						/>
					</div>
				</div>

				<div>
					<div class="relative overflow-hidden rounded-2xl">
						<img class="h-72 w-full object-cover lg:h-[420px]" src={active.map} alt={active.name} />
						<div class="absolute inset-0 flex items-center justify-center">
							<div
								class="flex size-14 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white shadow-xl"
							>
								<MapPin size={28} />
							</div>
						</div>
					</div>
					<Button
						label={sectionContent.locations.mapsCta}
						icon="MapPin"
						variant="soft"
						class="mt-3 w-full"
					/>
				</div>
			</div>
		</div>
	</Container>
</section>
