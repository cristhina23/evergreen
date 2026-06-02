<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { Leaf } from 'lucide-svelte';
	import { heroContent } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section
	class="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft)_0%,#fff_45%,var(--color-secondary-soft)_100%)]"
>
	<!-- Decoraciones -->
	<div
		class="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--color-primary-soft)] opacity-70 blur-3xl"
	></div>

	<div
		class="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[var(--color-secondary-soft)] opacity-70 blur-3xl"
	></div>

	<div
		class="grid min-h-[760px] lg:min-h-[860px] lg:grid-cols-[42%_58%]"
	>
		<!-- CONTENIDO -->
		<div
			class="relative z-10 flex items-center px-6 py-16 sm:px-8 lg:px-12 xl:px-20"
			in:fly={{ y: 20, duration: 500 }}
		>
			<div class="max-w-xl">
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
					class="mt-7 text-lg leading-8 text-[var(--color-text-secondary)]"
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
		</div>

		<!-- IMAGEN -->
		<div
			class="relative min-h-[420px] lg:min-h-full"
			in:fade={{ duration: 500 }}
		>
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src={heroContent.image}
				alt={heroContent.title}
			/>

			<!-- Fade lateral suave -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-white via-white/92 via-[15%] via-white/55 via-[30%] to-transparent"
			></div>

			<!-- Fade superior -->
			<div
				class="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent"
			></div>

			<!-- Hoja decorativa -->
			<div
				class="absolute top-1/2 left-0 hidden -translate-x-1/2 -translate-y-1/2 opacity-20 lg:block"
			>
				<Leaf
					size={140}
					strokeWidth={1.5}
					class="text-[var(--color-secondary)]"
				/>
			</div>

			<!-- Card experiencia -->
			<div
				class="absolute top-8 right-6 rounded-[28px] bg-white/95 p-6 shadow-[0_25px_80px_rgba(15,39,68,0.18)] backdrop-blur lg:top-20 lg:right-16"
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
				class="absolute right-4 bottom-6 flex items-center gap-4 rounded-full bg-white/95 px-5 py-3 shadow-[0_25px_60px_rgba(15,39,68,0.18)] backdrop-blur lg:right-10 lg:bottom-10"
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
	</div>
</section>