<script>
	import { Leaf } from 'lucide-svelte';
	import { processSteps, sectionContent } from '../../data/site.js';
	import { getIcon } from '$lib/iconRegistry.js';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="py-12 lg:py-16">
	<Container>
		<div
			class="rounded-[32px] bg-white p-6 shadow-[0_18px_50px_rgba(15,39,68,0.06)] lg:p-8"
		>
			<div class="mb-8 text-center lg:mb-12">
				<h2
					class="font-heading text-3xl font-bold text-[var(--color-text-primary)] lg:text-4xl"
				>
					{sectionContent.process.title}
				</h2>

				<Leaf
					class="mx-auto mt-2 text-[var(--color-secondary)]"
					size={22}
				/>
			</div>

			<div class="grid gap-5 lg:grid-cols-4">
				{#each processSteps as step, index}
					{@const Icon = getIcon(step.icon)}

					<article
						class="group relative rounded-[24px] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(15,39,68,0.08)] lg:min-h-[200px]"
					>
						<!-- Número -->
						<div
							class="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-secondary)] text-sm font-bold text-white shadow-lg"
						>
							{index + 1}
						</div>

						<!-- Flecha desktop -->
						{#if index < processSteps.length - 1}
							<div
								class="absolute top-1/2 -right-5 hidden -translate-y-1/2 text-[var(--color-secondary)] opacity-40 lg:block"
							>
								→
							</div>
						{/if}

						<!-- Icono -->
						<div
							class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-[0_6px_20px_rgba(15,39,68,0.06)]"
						>
							<Icon size={30} />
						</div>

						<!-- Título -->
						<h3
							class="text-base font-bold text-[var(--color-text-primary)] lg:text-lg"
						>
							{step.title}
						</h3>

						<!-- Texto -->
						<p
							class="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]"
						>
							{step.text}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</Container>
</section>