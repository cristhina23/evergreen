<script>
	import './layout.css';
	import favicon from '/icon.png';
	import { locations } from '../data/site.js';

	let { children } = $props();

	const siteName = 'Evergreen Lavanderías';

	const title =
		'Evergreen Lavanderías | Más de 15 años cuidando lo que más valoras';

	const description =
		'Lavandería profesional en Lima con más de 15 años de experiencia. Lavado de ropa, edredones, pickup & delivery y atención especializada para hogares y empresas.';

	const url = 'https://evergreenlavanderias.com';

	const image = `${url}/social.png`;

	const businessSchema = {
		'@context': 'https://schema.org',
		'@type': 'LaundryService',
		'@id': `${url}/#business`,
		name: 'Evergreen Lavanderías',
		url,
		logo: `${url}/icon.png`,
		image,
		telephone: '+51947947119',
		priceRange: '$$',

		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Av. Petit Thouars 4740',
			addressLocality: 'Miraflores',
			addressRegion: 'Lima',
			addressCountry: 'PE'
		},

		geo: {
			'@type': 'GeoCoordinates',
			latitude: '-12.1198',
			longitude: '-77.0288'
		},

		areaServed: [
			'Miraflores',
			'Surquillo',
			'San Isidro',
			'Barranco',
			'San Borja',
			'Santiago de Surco'
		],

		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday'
				],
				opens: '09:00',
				closes: '19:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Saturday'],
				opens: '09:00',
				closes: '18:00'
			}
		],

		sameAs: [
			'https://www.facebook.com/EvergreenLava',
			'https://www.instagram.com/evergreenlavanderias',
			'https://www.tiktok.com/@evergreenlavander',
			'https://www.youtube.com/channel/UCJrZayWeAHDnolOLClYz_PA',

			'https://maps.app.goo.gl/knMGb4gaTAJjBTiB6',
			'https://maps.app.goo.gl/V1nbWrEzEv7B3usM9',
			'https://maps.app.goo.gl/v2mh9E1dBBvWsBb96'
		]
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${url}/#website`,
		url,
		name: siteName,
		publisher: {
			'@id': `${url}/#business`
		}
	};

	const developerSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'CC Tech Solutions',
		url: 'https://cctechsolutions.dev'
	};

	const locationsSchema = locations.map((location) => ({
	'@context': 'https://schema.org',
	'@type': 'LaundryService',

	name: `Evergreen Lavanderías - ${location.badge}`,

	telephone: location.phone,

	hasMap: location.map,

	sameAs: [location.map],

	address: {
		'@type': 'PostalAddress',
		streetAddress: location.address,
		addressLocality: 'Lima',
		addressRegion: 'Lima',
		addressCountry: 'PE'
	}
}));
</script>

<svelte:head>
	<title>{title}</title>

	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href="/icon.png" />
	<link rel="canonical" href={url} />

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#069057" />

	<meta name="description" content={description} />

	<meta
		name="keywords"
		content="lavandería en Lima, lavandería Miraflores, lavandería Surquillo, lavandería San Isidro, lavandería a domicilio, lavandería delivery, lavado de ropa, lavado de edredones, tintorería, limpieza de prendas, Evergreen Lavanderías"
	/>

	<meta name="author" content="Evergreen Lavanderías" />
	<meta name="creator" content="CC Tech Solutions | Cristhina Chacon" />
	<meta name="publisher" content="CC Tech Solutions" />
	<meta name="designer" content="CC Tech Solutions | Cristhina Chacon" />
	<meta name="developer" content="CC Tech Solutions | Cristhina Chacon" />

	<meta
		name="robots"
		content="index, follow, max-image-preview:large"
	/>

	<meta name="geo.region" content="PE-LMA" />
	<meta name="geo.placename" content="Lima, Perú" />
	<meta name="ICBM" content="-12.0464,-77.0428" />

	<!-- Open Graph -->

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Evergreen Lavanderías - Más de 15 años de experiencia"
	/>
	<meta property="og:locale" content="es_PE" />

	<!-- Twitter -->

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<!-- Schema Principal -->

	<script type="application/ld+json">
		{@html JSON.stringify(businessSchema)}
	</script>

	<script type="application/ld+json">
		{@html JSON.stringify(websiteSchema)}
	</script>

	<script type="application/ld+json">
		{@html JSON.stringify(developerSchema)}
	</script>

	{#each locationsSchema as schema}
		<script type="application/ld+json">
			{@html JSON.stringify(schema)}
		</script>
	{/each}

	<!-- Google Analytics -->
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id=G-LWGV8FZ484"
	></script>

	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-LWGV8FZ484');
	</script>

	
</svelte:head>

{@render children()}