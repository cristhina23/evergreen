<script>
	import { MessageCircle, Sparkles } from 'lucide-svelte';
	import { businessInfo, sectionContent } from '../../data/site.js';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="py-10 sm:py-14">
	<Container>
		<div
			class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--color-secondary)] via-[#15956f] to-[var(--color-primary)] px-6 py-12 text-center text-white shadow-[0_24px_70px_rgba(15,39,68,0.16)] sm:px-10 sm:py-16"
		>
			<div class="absolute top-6 left-6 hidden text-white/20 sm:block">
				<Sparkles size={72} />
			</div>
			<div class="absolute right-6 bottom-6 hidden text-white/20 sm:block">
				<MessageCircle size={84} />
			</div>

			<div class="relative mx-auto max-w-3xl">
				<h2 class="font-heading text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
					{sectionContent.finalCta.title}
				</h2>
				<p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85">
					{sectionContent.finalCta.description}
				</p>
				<a
					href={businessInfo.whatsappUrl}
					target="_blank"
					rel="noreferrer"
					class="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-base font-bold text-[var(--color-secondary)] shadow-[0_18px_45px_rgba(15,39,68,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(15,39,68,0.28)]"
				>
					<MessageCircle size={22} strokeWidth={2.4} />
					{businessInfo.whatsappCtaLabel}
				</a>
			</div>
		</div>
	</Container>
</section>
