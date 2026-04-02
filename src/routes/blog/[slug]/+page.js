export async function load({ params }) {
	const post = await import(`$lib/posts/${params.slug}.md`);
	const { titulo, descripcion, fecha } = post.metadata;
	const contenido = post.default;

	return {
		contenido,
		titulo,
		descripcion,
        fecha
	};
}