<style lang="scss">
    @import 'components/heading/heading.scss';
</style>

<script>
    export let as = 'h1';
    export let size = 'h1';
    export let weight = 'bold';
    export let color = 'black';

    const classNames = `${size} ${weight} ${color}`;
</script>

{#if as === 'h1'}
    <h1 class={classNames}>
        <slot></slot>
    </h1>
{/if}

{#if as === 'h2'}
    <h2 class={classNames}>
        <slot></slot>
    </h2>
{/if}

{#if as === 'div'}
    <div class={classNames}>
        <slot></slot>
    </div>
{/if}