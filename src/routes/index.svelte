<style lang="scss">

</style>

<script>  
	import Heading from '../components/heading/Heading.svelte';
	import Icon from '../components/icon/Icon.svelte';
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<article>
	<Heading>
		Heading h1
	</Heading>
	<Heading as="h2" size="h2" weight="regular" color="spot">
		Heading h2
	</Heading>
	<Heading as="div" size="h3" weight="light">
		Heading h3
	</Heading>
	<Icon type="chevron-right" />
	<Icon type="chevron-left" theme="spot" />
</article>