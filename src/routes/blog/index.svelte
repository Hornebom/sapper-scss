<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Heading from '../../components/heading/Heading.svelte';
	import PostList from '../../components/postList/PostList.svelte';

	export let posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Heading>Recent posts</Heading>
<PostList posts={posts}/>