<script>
	import { beforeAfter } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let { children } = $props();
</script>

<section class="py-10 lg:py-14">
	<Container>
		<div class="grid gap-5 lg:grid-cols-[0.85fr_1.05fr_1.35fr]">
			<!-- TEXTO -->
			<div
				class="rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgba(15,39,68,0.06)] lg:p-8"
			>
				<h2
					class="font-heading text-3xl font-bold leading-tight text-[var(--color-text-primary)] lg:text-4xl"
				>
					{beforeAfter.title}
				</h2>

				<p
					class="mt-4 text-base leading-7 text-[var(--color-text-secondary)]"
				>
					{beforeAfter.description}
				</p>

				<Button
					label={beforeAfter.cta}
					variant="secondary"
					class="mt-6"
				/>
			</div>

			<!-- IMAGEN BEFORE/AFTER -->
			<div
				class="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(15,39,68,0.08)]"
			>
				<img
					class="h-[320px] w-full object-cover"
					src={beforeAfter.beforeImage}
					alt={beforeAfter.title}
				/>
			</div>

			<!-- PICKUP DELIVERY -->
			{@render children?.()}
		</div>
	</Container>
</section>