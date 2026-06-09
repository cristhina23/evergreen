<script>
	import { Phone, MapPin, Clock, MessageCircle } from 'lucide-svelte';
	import { locations, sectionContent } from '../../data/site.js';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import LocationCard from '$lib/components/cards/LocationCard.svelte';
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
	import { trackLocation, trackWhatsapp } from '$lib/utils/metaPixel.js';


	let activeIndex = $state(0);
	let active = $derived(locations[activeIndex]);
</script>

<section class="py-10 sm:py-14">
	<Container >
		<div class="rounded-3xl bg-(--color-surface) p-4 sm:p-6">
			<SectionTitle
			
				title={sectionContent.locations.title}
				description={sectionContent.locations.description}
			/>

			<div class="lg:hidden">
	<!-- Selector -->
	<div class="mb-5 flex flex-col gap-2">
		{#each locations as location, index}
			<button
				onclick={() => (activeIndex = index)}
				class={`rounded-2xl border p-4 text-left transition ${
					activeIndex === index
						? 'border-[var(--color-secondary)] bg-[var(--color-secondary-soft)]'
						: 'border-[var(--color-border)] bg-white'
				}`}
			>
				<div class="font-semibold">
					{location.name}
				</div>

				<div class="mt-1 text-xs text-[var(--color-text-secondary)]">
					{location.badge}
				</div>
			</button>
		{/each}
	</div>

	<!-- Imagen -->
	<img
		src={active.image}
		alt={active.name}
		class="h-64 w-full rounded-3xl object-cover"
	/>

	<!-- Información -->
	<div class="mt-5 rounded-3xl bg-white p-5 shadow-[0_10px_30px_rgba(15,39,68,0.06)]">
		<h3
			class="font-heading text-2xl font-bold text-[var(--color-secondary)]"
		>
			{active.name}
		</h3>

		<div class="mt-2">
			<Badge label={active.badge} />
		</div>

		<div class="mt-5 space-y-4 text-sm">
			<div class="flex gap-3">
				<MapPin
					size={18}
					class="shrink-0 text-[var(--color-secondary)]"
				/>
				<p>{active.address}</p>
			</div>

			<div class="flex gap-3">
				<Phone
					size={18}
					class="shrink-0 text-[var(--color-secondary)]"
				/>
				<p>{active.phone}</p>
			</div>

			<div class="flex gap-3">
				<MessageCircle
					size={18}
					class="shrink-0 text-[var(--color-secondary)]"
				/>
				<p>{active.whatsapp}</p>
			</div>

			<div class="flex gap-3">
				<Clock
					size={18}
					class="shrink-0 text-[var(--color-secondary)]"
				/>
				<p>{active.schedule}</p>
			</div>
		</div>

		<div class="mt-6 flex flex-col gap-3">
			<Button
				label="Cómo llegar"
				icon="MapPin"
				href={active.map}
				target="_blank"
				rel="noopener noreferrer"
			/>

			<Button
				label="WhatsApp"
				icon="MessageCircle"
				variant="secondary"
				href={active.whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</div>

	<!-- Delivery -->
	<div
		class="mt-5 rounded-3xl bg-(--color-primary-soft) p-5"
	>
		<div
			class="mb-3 flex size-10 items-center justify-center rounded-full bg-white text-(--color-primary)"
		>
			<MessageCircle size={20} />
		</div>

		<h3 class="font-bold">
			{sectionContent.locations.deliveryTitle}
		</h3>

		<p
			class="mt-2 text-sm text-(--color-text-secondary)"
		>
			{sectionContent.locations.deliveryText}
		</p>
	</div>
</div>



			<div class="hidden mt-6 md:grid gap-5 lg:grid-cols-[0.9fr_1.3fr_0.9fr]">
	<!-- SIDEBAR -->
	<div class="grid gap-3">
		{#each locations as location, index}
			<button onclick={() => (activeIndex = index)} class="text-left">
				<LocationCard {location} active={activeIndex === index} />
			</button>
		{/each}

		<div class="rounded-2xl bg-(--color-primary-soft) p-4">
			<div
				class="mb-2 flex size-10 items-center justify-center rounded-full bg-white text-(--color-primary)"
			>
				<MessageCircle size={22} />
			</div>

			<h3 class="text-sm font-bold text-(--color-text-primary)">
				{sectionContent.locations.deliveryTitle}
			</h3>

			<p class="mt-1 text-sm leading-5 text-(--color-text-secondary)">
				{sectionContent.locations.deliveryText}
			</p>

		</div>
	</div>

	<!-- FOTO -->
	<div>
		<img
			class="h-80 w-full rounded-3xl object-cover shadow-[0_15px_40px_rgba(15,39,68,0.12)] sm:h-125"
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
			class="font-heading text-3xl font-bold text-(--color-secondary)"
		>
			{active.name}
		</h3>

		<div class="mt-3">
			<Badge label={active.badge} />
		</div>

		<div class="mt-6 space-y-5 text-sm text-(--color-text-secondary)">
			<div class="flex gap-3">
				<MapPin
					class="mt-0.5 shrink-0 text-(--color-secondary)"
					size={18}
				/>
				<p>{active.address}</p>
			</div>

			<div class="flex gap-3">
				<Phone
					class="mt-0.5 shrink-0 text-(--color-secondary)"
					size={18}
				/>
				<p>{active.phone}</p>
			</div>

			<div class="flex gap-3">
				<MessageCircle
					class="mt-0.5 shrink-0 text-(--color-secondary)"
					size={18}
				/>
				<p>{active.whatsapp}</p>
			</div>

			<div class="flex gap-3">
				<Clock
					class="mt-0.5 shrink-0 text-(--color-secondary)"
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
				href={active.map}
				target="_blank"
				rel="noopener noreferrer"
				onclick={trackLocation}
			/>

			<Button
				label={sectionContent.locations.whatsappCta}
				icon="MessageCircle"
				variant="secondary"
				class="w-full"
				href={active.whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				onclick={track}
			/>
		</div>
	</div>
</div>
		</div>
	</Container>
</section>
