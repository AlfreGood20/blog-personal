export function load() {
	const files = import.meta.glob('$lib/posts/*.md', { eager: true });

	const posts = Object.entries(files).map(([path, mod]) => {
		const ruta = path.split('/').pop().replace('.md', '');
		return {
			ruta,
			...(mod.metadata ?? {})
		};
	});

	return { posts };
}