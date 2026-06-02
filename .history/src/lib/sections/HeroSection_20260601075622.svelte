<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { Leaf } from 'lucide-svelte';
	import { heroContent } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section
	class="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft)_0%,#fff_48%,var(--color-secondary-soft)_100%)]"
>
	<Container
		class="grid min-h-[720px] items-center gap-8 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:py-0"
	>
		<div class="relative z-10 max-w-2xl" in:fly={{ y: 18, duration: 500 }}>
			<p class="mb-4 text-xs font-bold tracking-[0.16em] text-[var(--color-primary)] uppercase">
				{heroContent.eyebrow}
			</p>
			<h1
				class="font-heading text-4xl leading-tight font-extrabold text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl"
			>
				{heroContent.titleBeforeHighlight}
				<span class="text-[var(--color-secondary)]">{heroContent.highlight}</span>.
			</h1>
			<p class="mt-5 max-w-xl text-base leading-8 text-[var(--color-text-secondary)]">
				{heroContent.description}
			</p>
			<div class="mt-7 flex flex-col gap-3 min-[380px]:flex-row">
				<Button label={heroContent.primaryCta} />
				<Button label={heroContent.secondaryCta} variant="secondary" icon="MessageCircle" />
			</div>
		</div>

		<div class="relative min-h-[360px] lg:min-h-[640px]" in:fade={{ duration: 500 }}>
			<img
				class="absolute inset-0 h-full w-full rounded-[2rem] object-cover lg:rounded-none"
				src={heroContent.image}
				alt={heroContent.title}
			/>
			<div
				class="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-white/45 via-white/5 to-transparent lg:rounded-none"
			></div>
			<div
				class="absolute top-8 left-5 rounded-3xl bg-white/88 p-5 shadow-[0_24px_70px_rgba(15,39,68,0.18)] backdrop-blur sm:top-24 sm:left-1/3"
				in:scale={{ duration: 450 }}
			>
				<p class="font-heading text-2xl font-bold text-[var(--color-secondary)]">
					{heroContent.experienceCard.value}
				</p>
				<p class="mt-2 max-w-44 text-sm leading-6 text-[var(--color-text-primary)]">
					{heroContent.experienceCard.text}
				</p>
				<div
					class="mt-4 flex size-12 items-center justify-center rounded-full bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]"
				>
					<Leaf size={27} />
				</div>
			</div>
			<div
				class="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-white/92 px-4 py-3 shadow-[0_22px_55px_rgba(15,39,68,0.18)] backdrop-blur sm:right-8 sm:left-auto"
			>
				<div class="flex -space-x-3">
					{#each heroContent.customerCard.avatars as avatar}
						<img
							class="size-10 rounded-full border-2 border-white object-cover"
							src={avatar}
							alt={heroContent.customerCard.value}
						/>
					{/each}
				</div>
				<p class="max-w-32 text-sm leading-5 font-bold text-[var(--color-text-primary)]">
					{heroContent.customerCard.value}
				</p>
			</div>
		</div>
	</Container>
</section>
