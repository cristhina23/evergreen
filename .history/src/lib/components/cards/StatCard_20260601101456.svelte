<script>
	import { ShieldCheck } from "lucide-svelte";

</script>
<div
	class="grid grid-cols-2 gap-4 rounded-[32px] bg-white p-6 shadow-[0_10px_40px_rgba(15,39,68,0.08)] md:grid-cols-4"
>
	<div class="flex items-center gap-4">
		<ShieldCheck />
		<div>
			<p class="text-3xl font-extrabold">
				<Counter value={15} suffix="+" />
			</p>
			<p class="text-sm text-(--color-text-secondary)">
				Años de experiencia
			</p>
		</div>
	</div>

	<div class="flex items-center gap-4">
		<Camera />
		<div>
			<p class="text-3xl font-extrabold">
				<Counter value={100} suffix="K" />
			</p>
			<p class="text-sm text-(--color-text-secondary)">
				Prendas lavadas
			</p>
		</div>
	</div>

	<div class="flex items-center gap-4">
		<MapPin />
		<div>
			<p class="text-3xl font-extrabold">
				<Counter value={3} />
			</p>
			<p class="text-sm text-(--color-text-secondary)">
				Sedes en Lima
			</p>
		</div>
	</div>

	<div class="flex items-center gap-4">
		<Users />
		<div>
			<p class="text-3xl font-extrabold">
				<Counter value={98} suffix="%" />
			</p>
			<p class="text-sm text-(--color-text-secondary)">
				Clientes satisfechos
			</p>
		</div>
	</div>
</div>