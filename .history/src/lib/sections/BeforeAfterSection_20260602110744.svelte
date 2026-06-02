<script>
	import { beforeAfter } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let { children } = $props();
</script>

<section class="py-10 lg:py-14">
	<Container>
		<div class="grid gap-5 lg:grid-cols-[1fr_1.4fr_1.6fr]">
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

			<div
				class="overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(15,39,68,0.08)]"
			>
				<div class="relative">
					<img
	class="h-80 w-full object-cover object-center lg:h-full"
	src={beforeAfter.beforeImage}
	alt={beforeAfter.title}
/>

					
				</div>
			</div>

			{@render children?.()}
		</div>
	</Container>
</section>
