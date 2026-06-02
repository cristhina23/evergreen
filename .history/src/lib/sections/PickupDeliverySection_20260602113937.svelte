<script>
	import { CheckCircle, Truck } from 'lucide-svelte';
	import { pickupDelivery } from '../../data/site.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="pb-12 lg:pb-20">
	<Container>
		<div
			class="grid items-center gap-8 overflow-hidden rounded-[32px] bg-[var(--color-primary-soft)] p-6 shadow-[0_20px_60px_rgba(15,39,68,0.08)] lg:grid-cols-2 lg:p-10"
		>
			<!-- IMAGE -->
			<div
				class="relative overflow-hidden rounded-[28px] h-[380px] lg:h-[500px]"
			>
				<img
					src={pickupDelivery.image}
					alt={pickupDelivery.title}
					class="h-full w-full object-cover object-center"
				/>

				<div
					class="absolute top-6 left-6 flex size-14 items-center justify-center rounded-full bg-white shadow-xl"
				>
					<Truck
						size={28}
						class="text-[var(--color-secondary)]"
					/>
				</div>
			</div>

			<!-- CONTENT -->
			<div>
				<span
					class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]"
				>
					Servicio a domicilio
				</span>

				<h3
					class="mt-4 font-heading text-xl font-bold text-[var(--color-primary)] lg:text-2xl"
				>
					{pickupDelivery.title}
				</h3>

				<h2
					class="mt-2 font-heading text-3xl font-bold leading-tight text-[var(--color-text-primary)] lg:text-5xl"
				>
					{pickupDelivery.subtitle}
				</h2>

				<p
					class="mt-5 text-base leading-8 text-[var(--color-text-secondary)] lg:text-lg"
				>
					{pickupDelivery.description}
				</p>

				<div class="mt-8 grid gap-4">
					{#each pickupDelivery.points as point}
						<div class="flex items-start gap-3">
							<CheckCircle
								size={22}
								class="mt-0.5 shrink-0 text-[var(--color-secondary)]"
							/>

							<p class="text-[var(--color-text-primary)]">
								{point}
							</p>
						</div>
					{/each}
				</div>

				<Button
					label={pickupDelivery.cta}
					class="mt-8"
				/>
			</div>
		</div>
	</Container>
</section>