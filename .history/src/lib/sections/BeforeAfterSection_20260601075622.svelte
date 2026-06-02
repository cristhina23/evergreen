<script>
	import { beforeAfter } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let { children } = $props();
</script>

<section class="py-8">
	<Container>
		<div class="grid gap-5 lg:grid-cols-[0.9fr_1.35fr_1.65fr]">
			<div class="rounded-3xl bg-white p-5 shadow-[0_18px_50px_rgba(15,39,68,0.06)]">
				<h2 class="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
					{beforeAfter.title}
				</h2>
				<p class="mt-3 text-sm text-[var(--color-text-secondary)]">{beforeAfter.description}</p>
				<Button label={beforeAfter.cta} variant="secondary" class="mt-5" />
			</div>

			<div
				class="grid grid-cols-2 overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(15,39,68,0.08)]"
			>
				<div class="relative">
					<img
						class="h-72 w-full object-cover"
						src={beforeAfter.beforeImage}
						alt={beforeAfter.beforeLabel}
					/>
					<span
						class="absolute top-3 left-3 rounded-full bg-[var(--color-text-primary)] px-3 py-1 text-xs font-bold text-white"
						>{beforeAfter.beforeLabel}</span
					>
				</div>
				<div class="relative">
					<img
						class="h-72 w-full object-cover"
						src={beforeAfter.afterImage}
						alt={beforeAfter.afterLabel}
					/>
					<span
						class="absolute top-3 right-3 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white"
						>{beforeAfter.afterLabel}</span
					>
				</div>
			</div>

			{@render children?.()}
		</div>
	</Container>
</section>
