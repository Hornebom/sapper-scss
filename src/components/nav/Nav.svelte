<style lang="scss">
    @import 'components/nav/nav.scss';
</style>

<script>
	import pages from '../../config/pages';
	export let segment;
</script>

<nav>
	<ul>
		{#each pages as page}
			<li>
				<a rel={page.rel} class='{segment === page.segment ? "selected" : ""}' href={page.href}>
					{page.label}
				</a>	
			</li>
		{/each}
	</ul>
</nav>