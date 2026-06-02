```svelte
<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { Leaf } from 'lucide-svelte';
	import { heroContent } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section
	class="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft)_0%,#ffffff_45%,var(--color-secondary-soft)_100%)]"
>
	<!-- Decorative Background -->
	<div
		class="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--color-primary-soft)] opacity-80 blur-3xl"
	></div>

	<div
		class="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary-soft)] opacity-80 blur-3xl"
	></div>

	<Container
		class="grid min-h-[820px] items-center gap-12 py-16 lg:min-h-[900px] lg:grid-cols-[0.72fr_1.28fr] lg:gap-8 lg:py-0"
	>
		<!-- Content -->
		<div
			class="relative z-10 order-1 max-w-2xl"
			in:fly={{ y: 24, duration: 600 }}
		>
			<div
				class="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-secondary)] shadow-sm"
			>
				<Leaf size={16} />
				<span>{heroContent.eyebrow}</span>
			</div>

			<h1
				class="mt-6 font-heading text-5xl leading-[1.05] font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
			>
				{heroContent.titleBeforeHighlight}
				<span class="text-[var(--color-secondary)]">
					{heroContent.highlight}
				</span>.
			</h1>

			<p
				class="mt-7 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)]"
			>
				{heroContent.description}
			</p>

			<div class="mt-10 flex flex-col gap-4 sm:flex-row">
				<Button
					label={heroContent.primaryCta}
					class="min-h-14 px-8"
				/>

				<Button
					label={heroContent.secondaryCta}
					variant="secondary"
					icon="MessageCircle"
					class="min-h-14 px-8"
				/>
			</div>
		</div>

		<!-- Image -->
		<div
			class="relative order-2 min-h-[420px] lg:min-h-[760px]"
			in:fade={{ duration: 600 }}
		>
			<img
				class="absolute inset-0 h-full w-full rounded-[2.5rem] object-cover shadow-[0_30px_90px_rgba(15,39,68,0.18)]"
				src={heroContent.image}
				alt={heroContent.title}
			/>

			<div
				class="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-white/45 via-white/10 to-transparent"
			></div>

			<!-- Experience Card -->
			<div
				class="absolute top-6 left-4 rounded-3xl bg-white/92 p-6 shadow-[0_24px_70px_rgba(15,39,68,0.18)] backdrop-blur sm:top-10 sm:left-8 lg:top-20 lg:left-10"
				in:scale={{ duration: 500 }}
			>
				<p
					class="font-heading text-3xl font-extrabold text-[var(--color-secondary)]"
				>
					{heroContent.experienceCard.value}
				</p>

				<p
					class="mt-2 max-w-[180px] text-sm leading-6 text-[var(--color-text-primary)]"
				>
					{heroContent.experienceCard.text}
				</p>

				<div
					class="mt-4 flex size-12 items-center justify-center rounded-full bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]"
				>
					<Leaf size={24} />
				</div>
			</div>

			<!-- Customer Card -->
			<div
				class="absolute right-4 bottom-6 rounded-2xl bg-white/95 px-6 py-4 shadow-[0_22px_55px_rgba(15,39,68,0.18)] backdrop-blur sm:right-8 sm:bottom-8"
			>
				<div class="flex items-center gap-4">
					<div class="flex -space-x-3">
						{#each heroContent.customerCard.avatars as avatar}
							<img
								class="size-11 rounded-full border-2 border-white object-cover"
								src={avatar}
								alt={heroContent.customerCard.value}
							/>
						{/each}
					</div>

					<p
						class="max-w-[170px] text-sm leading-5 font-bold text-[var(--color-text-primary)]"
					>
						{heroContent.customerCard.value}
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>
```
