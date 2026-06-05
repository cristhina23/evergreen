<script>
	import './layout.css';
	import favicon from '/icon.png';

	let { children } = $props();

	const siteName = 'Evergreen Lavanderías';
	const title =
		'Evergreen Lavanderías | Más de 15 años cuidando lo que más valoras';

	const description =
		'Lavandería profesional en Lima con más de 15 años de experiencia. Lavado de prendas, edredones, pickup & delivery y atención especializada para hogares y empresas.';

	const url = 'https://evergreenlavanderias.com';
	const image = `${url}/social.png`;
</script>

<svelte:head>
	<title>{title}</title>

	<link rel="icon" href={favicon} />

	<meta name="description" content={description} />
	<meta name="keywords" content="lavandería, lavandería en Lima, lavado de ropa, lavado de edredones, lavandería profesional, pickup delivery, Evergreen Lavanderías" />
	<meta name="author" content="Evergreen Lavanderías" />
	<meta name="creator" content="CC Tech Solutions | Cristhina Chacon" />
	<meta name="publisher" content="CC Tech Solutions" />
	<meta name="robots" content="index, follow" />
	<meta name="designer" content="CC Tech Solutions | Cristhina Chacon" />
	<meta name="developer" content="CC Tech Solutions | Cristhina Chacon" />

	<meta name="geo.region" content="PE-LMA" />
<meta name="geo.placename" content="Lima, Perú" />
<meta name="ICBM" content="-12.0464, -77.0428" />

	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Evergreen Lavanderías - Más de 15 años de trayectoria" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<!-- Mobile -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#069057" />
</svelte:head>

{@render children()}