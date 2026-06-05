<script>
	import { Play } from 'lucide-svelte';
	import { franchiseInfo } from '../../data/site.js';
	import { getIcon } from '$lib/iconRegistry.js';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import FranchiseModal from '$lib/components/modals/FranchiseModal.svelte';

	let showModal = $state(false);
	
</script>

<section class="py-8">
	<Container>
		<div
			class="grid overflow-hidden rounded-3xl bg-linear-to-br from-(--color-secondary) via-[#07917b] to-(--color-primary) text-white shadow-[0_24px_70px_rgba(15,39,68,0.16)] lg:grid-cols-[1fr_1.15fr_1.05fr]"
		>
			<div class="p-6 sm:p-8">
				<p class="text-xs font-bold tracking-[0.16em] text-white/80 uppercase">
					{franchiseInfo.eyebrow}
				</p>
				<h2 class="mt-3 font-heading text-3xl leading-tight font-bold">{franchiseInfo.title}</h2>
				<p class="mt-4 text-sm leading-7 text-white/82">{franchiseInfo.description}</p>
				<Button label={franchiseInfo.cta} variant="soft" class="mt-5" />
			</div>
			<div class="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
				{#each franchiseInfo.benefits as benefit}
					{@const Icon = getIcon(benefit.icon)}
					<div class="flex gap-3">
						<div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15">
							<Icon size={18} />
						</div>
						<p class="text-sm leading-6 font-semibold">{benefit.title}</p>
					</div>
				{/each}
			</div>
			<div class="relative min-h-64">
				<img
					class="absolute inset-0 h-full w-full object-cover"
					src={franchiseInfo.image}
					alt={franchiseInfo.videoLabel}
				/>
				<div class="absolute inset-0 bg-linear-to-t from-black/45 to-transparent"></div>
				<div class="absolute inset-0 flex items-center justify-center">
					<button
						class="flex size-16 items-center justify-center rounded-full bg-white text-(--color-primary) shadow-xl"
						aria-label={franchiseInfo.videoLabel}
					>
						<Play size={30} fill="currentColor" />
					</button>
				</div>
				<p class="absolute right-5 bottom-5 left-5 text-center text-sm font-bold">
					{franchiseInfo.videoLabel}
				</p>
			</div>
		</div>
	</Container>
</section>
