<div
	class="absolute top-6 right-4 rounded-[32px] border border-white/30 bg-white/70 px-6 py-5 shadow-[0_20px_60px_rgba(15,39,68,0.12)] backdrop-blur-xl lg:top-14 lg:right-14"
	in:scale={{ duration: 450 }}
>
	<p
		class="font-heading text-4xl font-extrabold tracking-tight text-(--color-secondary)"
	>
		{heroContent.experienceCard.value}
	</p>

	<div
		class="mt-4 flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/50 text-(--color-secondary)"
	>
		<Leaf size={22} strokeWidth={2.2} />
	</div>

	<div
		class="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/30 via-transparent to-transparent"
	></div>
</div>