<script>
	import { Leaf } from 'lucide-svelte';
	import { processSteps, sectionContent } from '../../data/site.js';
	import { getIcon } from '$lib/iconRegistry.js';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section>
	<Container>
		<div class="rounded-3xl bg-white p-5 shadow-[0_18px_50px_rgba(15,39,68,0.06)]">
			<div class="mb-6 text-center">
				<h2 class="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
					{sectionContent.process.title}
				</h2>
				<Leaf class="mx-auto mt-1 text-[var(--color-secondary)]" size={20} />
			</div>
			<div class="grid gap-4 md:grid-cols-4">
				{#each processSteps as step, index}
					{@const Icon = getIcon(step.icon)}
					<article class="relative flex gap-4 rounded-2xl bg-[var(--color-surface)] p-4">
						<div
							class="absolute -top-3 left-9 flex size-6 items-center justify-center rounded-full bg-[var(--color-secondary)] text-xs font-bold text-white"
						>
							{index + 1}
						</div>
						<div
							class="flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-sm"
						>
							<Icon size={24} />
						</div>
						<div>
							<h3 class="text-sm font-bold text-[var(--color-text-primary)]">{step.title}</h3>
							<p class="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">{step.text}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</Container>
</section>
