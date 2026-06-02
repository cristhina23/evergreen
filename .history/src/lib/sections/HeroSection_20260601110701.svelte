<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { Leaf } from 'lucide-svelte';
	import { heroContent } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section
	class="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft)_0%,#fff_45%,var(--color-secondary-soft)_100%)]"
>
	<!-- Decorative Background -->
	<div
		class="absolute -top-40 -right-40 h-125 w-125 rounded-full bg-(--color-primary-soft) opacity-60 blur-3xl"
	></div>

	<div
		class="absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-(--color-secondary-soft) opacity-60 blur-3xl"
	></div>

	<div
		class="relative grid min-h-screen lg:min-h-150 lg:grid-cols-[50%_50%]"
	>
		<!-- MOBILE IMAGE BACKGROUND -->
		<div
			class="absolute inset-0 lg:hidden"
			in:fade={{ duration: 500 }}
		>
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src={heroContent.image}
				alt={heroContent.title}
			/>

			<div
				class="absolute inset-0 bg-white/72"
			></div>

			<div
				class="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"
			></div>

			<!-- Mobile Experience Badge -->
			<div
				class="absolute w-[70vw] top-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/40 bg-white/85 px-4 py-2 backdrop-blur-xl"
			>
				<Leaf
					size={16}
					class="text-(--color-secondary)"
				/>

				<span
					class="text-sm font-bold text-(--color-secondary)"
				>
					15+ años de experiencia
				</span>
			</div>

			<!-- Mobile Customer Badge -->
			<div
				class="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/90 px-6 py-2 backdrop-blur-xl"
			>
				<div class="flex -space-x-2">
					{#each heroContent.customerCard.avatars.slice(0,3) as avatar}
						<img
							class="size-8 rounded-full border-2 border-white object-cover"
							src={avatar}
							alt={heroContent.customerCard.value}
						/>
					{/each}
				</div>

				<span
					class="text-xs font-bold text-(--color-text-primary)"
				>
					100K+
				</span>
			</div>
		</div>

		<!-- CONTENT -->
		<div
			class="relative z-20 flex items-center px-6 py-20 sm:px-8 lg:px-10 xl:px-16"
			in:fly={{ y: 18, duration: 500 }}
		>
			<div
				class="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-4xl lg:text-left"
			>
				<p
					class="mb-4 text-xs font-bold tracking-[0.18em] uppercase text-(--color-primary)"
				>
					{heroContent.eyebrow}
				</p>

				<h1
					class="font-heading text-[2.8rem] leading-[1.05] font-extrabold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl"
				>
					{heroContent.titleBeforeHighlight}

					<span class="text-(--color-secondary)">
						{heroContent.highlight}
					</span>.
				</h1>

				<p
					class="mx-auto mt-5 max-w-md text-base leading-7 text-(--color-text-secondary) lg:mx-0 lg:max-w-lg"
				>
					{heroContent.description}
				</p>

				<div
					class="mt-8 flex flex-col gap-3 min-[430px]:flex-row lg:flex-row"
				>
					<Button
						label={heroContent.primaryCta}
						class="min-h-14 flex-1 px-8"
					/>

					<Button
						label={heroContent.secondaryCta}
						variant="secondary"
						icon="MessageCircle"
						class="min-h-14 flex-1 px-8"
					/>
				</div>
			</div>
		</div>

		<!-- DESKTOP IMAGE -->
		<div
			class="relative hidden lg:block"
			in:fade={{ duration: 500 }}
		>
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src={heroContent.image}
				alt={heroContent.title}
			/>

			<div class="absolute inset-0 bg-gradient-to-r from-white via-white/15 via-[35%] to-transparent"
></div>

			<div
				class="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-transparent"
			></div>

			<!-- Decorative Leaf -->
			<div
				class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-15"
			>
				<Leaf
					size={110}
					strokeWidth={1.5}
					class="text-(--color-secondary)"
				/>
			</div>

			<!-- Desktop Experience Card -->
			<div
				class="absolute top-14 right-14 rounded-[32px] border border-white/30 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,39,68,0.12)] backdrop-blur-xl"
				in:scale={{ duration: 450 }}
			>
				<p
					class="font-heading text-3xl font-extrabold tracking-tight text-(--color-secondary)"
				>
					{heroContent.experienceCard.value}
				</p>

				<p
					class="mt-2 max-w-[180px] text-sm leading-6 text-(--color-text-primary)"
				>
					{heroContent.experienceCard.text}
				</p>

				<div
					class="mt-5 flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/50 text-(--color-secondary)"
				>
					<Leaf size={22} strokeWidth={2.2} />
				</div>

				<div
					class="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/30 via-transparent to-transparent"
				></div>
			</div>

			<!-- Desktop Customer Card -->
			<div
				class="absolute right-8 bottom-12 flex items-center gap-4 rounded-full bg-white/95 px-5 py-3 shadow-[0_20px_50px_rgba(15,39,68,0.15)] backdrop-blur"
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

				<p
					class="max-w-35 text-sm leading-5 font-bold text-(--color-text-primary)"
				>
					{heroContent.customerCard.value}
				</p>
			</div>
		</div>
	</div>
</section>