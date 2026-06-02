<script>
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import HeroSection from '$lib/sections/HeroSection.svelte';
	import StatsSection from '$lib/sections/StatsSection.svelte';
	import LocationsSection from '$lib/sections/LocationsSection.svelte';
	import ProcessSection from '$lib/sections/ProcessSection.svelte';
	import BeforeAfterSection from '$lib/sections/BeforeAfterSection.svelte';
	import PickupDeliverySection from '$lib/sections/PickupDeliverySection.svelte';
	import TimelineSection from '$lib/sections/TimelineSection.svelte';
	import FranchiseSection from '$lib/sections/FranchiseSection.svelte';
	import FinalCtaSection from '$lib/sections/FinalCtaSection.svelte';
	import TestimonialsSection from '$lib/sections/TestimonialsSection.svelte';
	import FAQSection from '$lib/sections/FAQSection.svelte';
	import SocialSection from '$lib/sections/SocialSection.svelte';
	import PartnersSection from '$lib/sections/PartnersSection.svelte';
	import { businessInfo } from '../data/site.js';
</script>

<svelte:head>
	<title>{businessInfo.name} {businessInfo.subtitle} | {businessInfo.tagline}</title>
	<meta name="description" content={businessInfo.topMessage} />
</svelte:head>

<Navbar />
<main>
	<section id="inicio" class="scroll-mt-[88px]" data-nav-section>
		<HeroSection />
	</section>
	<StatsSection />
	<section id="sedes" class="scroll-mt-[88px]" data-nav-section>
		<LocationsSection />
	</section>
	<section id="servicios" class="scroll-mt-[88px]" data-nav-section>
		<ProcessSection />
		<div class="space-y-8 lg:space-y-12">
			<BeforeAfterSection />
			<PickupDeliverySection />
		</div>
		
	</section>
	<section id="nosotros" class="scroll-mt-[88px]" data-nav-section>
		<TimelineSection />
	</section>
	<section id="franquicia" class="scroll-mt-[88px]" data-nav-section>
		<FranchiseSection />
	</section>
	<div class="space-y-12 lg:space-y-16 py-6">
		<TestimonialsSection />

		<Container>
		<div clas>
			<FAQSection />
		</div>
			
		</Container>
	</div>
	<Container class="grid gap-5 pb-10">
		<SocialSection />
		<PartnersSection />
	</Container>
	<FinalCtaSection />
</main>
<Footer />
