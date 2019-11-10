<style lang="scss">
    @import 'components/post/post.scss';
</style>

<script>
    import Heading from '../../components/heading/Heading.svelte';
    export let title = 'Post title';
    export let html = 'Post content';
</script>

<Heading>{title}</Heading>

<div class='content'>
	{@html html}
</div>