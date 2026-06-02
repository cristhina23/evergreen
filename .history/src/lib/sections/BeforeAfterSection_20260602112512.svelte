<script>
	import { CheckCircle } from 'lucide-svelte';
	import { beforeAfter } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="py-12 lg:py-20">
	<Container>
		<div
			class="grid items-center gap-8 overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,39,68,0.08)] lg:grid-cols-2 lg:p-10"
		>
			<!-- CONTENT -->
			<div>
				<span
					class="inline-flex rounded-full bg-[var(--color-secondary-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]"
				>
					Resultados reales
				</span>

				<h2
					class="mt-4 font-heading text-3xl font-bold leading-tight text-[var(--color-text-primary)] lg:text-5xl"
				>
					{beforeAfter.title}
				</h2>

				<p
					class="mt-5 text-base leading-8 text-[var(--color-text-secondary)] lg:text-lg"
				>
					{beforeAfter.description}
				</p>

				<div class="mt-8 grid gap-4">
					{#each beforeAfter.benefits as benefit}
						<div class="flex items-start gap-3">
							<CheckCircle
								size={22}
								class="mt-0.5 shrink-0 text-[var(--color-secondary)]"
							/>

							<p class="text-[var(--color-text-primary)]">
								{benefit}
							</p>
						</div>
					{/each}
				</div>

				<Button
					label={beforeAfter.cta}
					class="mt-8"
				/>
			</div>

			<!-- IMAGE -->
			<div
				class="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(15,39,68,0.12)]"
			>
				<img
					src={beforeAfter.beforeImage}
					alt={beforeAfter.title}
					class="w-full object-cover"
				/>
			</div>
		</div>
	</Container>
</section>