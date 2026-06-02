<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { Leaf } from 'lucide-svelte';
	import { heroContent } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section
	class="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft)_0%,#fff_45%,var(--color-secondary-soft)_100%)]"
>
	<!-- Decoraciones -->
	<div
		class="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--color-primary-soft)] blur-3xl"
	></div>

	<div
		class="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[var(--color-secondary-soft)] blur-3xl"
	></div>

	<!-- Hoja decorativa -->
	<div
		class="pointer-events-none absolute top-1/2 left-[45%] z-[2] hidden -translate-y-1/2 opacity-20 lg:block"
	>
		<Leaf
			size={120}
			strokeWidth={1.5}
			class="text-[var(--color-secondary)]"
		/>
	</div>

	<Container
		class="relative flex items-center justify-between gap-6 py-12 lg:py-24 flex"
	>
		<!-- Texto -->
		<div
			class="relative z-10 order-1 max-w-2xl"
			in:fly={{ y: 20, duration: 500 }}
		>
			<p
				class="mb-4 text-xs font-bold tracking-[0.18em] uppercase text-[var(--color-primary)]"
			>
				{heroContent.eyebrow}
			</p>

			<h1
				class="font-heading text-5xl leading-[1.05] font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
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

		<!-- Imagen -->
		<div
			class="relative order-2 min-h-[420px] lg:min-h-[760px]"
			in:fade={{ duration: 500 }}
		>
			<!-- Imagen ocupa toda la columna -->
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src={heroContent.image}
				alt={heroContent.title}
			/>

			<!-- Fade suave hacia el contenido -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-[18%] via-white/20 via-[32%] to-transparent"
			></div>

			<!-- Fade superior -->
			<div
				class="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent"
			></div>

			<!-- Card experiencia -->
			<div
				class="absolute top-8 right-6 z-10 rounded-[28px] bg-white/95 p-6 shadow-[0_25px_80px_rgba(15,39,68,0.18)] backdrop-blur"
				in:scale={{ duration: 450 }}
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
					<Leaf size={22} />
				</div>
			</div>

			<!-- Card clientes -->
			<div
				class="absolute right-6 bottom-8 z-10 flex items-center gap-4 rounded-full bg-white/95 px-5 py-3 shadow-[0_25px_60px_rgba(15,39,68,0.18)] backdrop-blur"
			>
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
					class="max-w-[150px] text-sm leading-5 font-bold text-[var(--color-text-primary)]"
				>
					{heroContent.customerCard.value}
				</p>
			</div>
		</div>
	</Container>
</section>