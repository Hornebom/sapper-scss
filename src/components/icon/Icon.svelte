<svelte:options namespace="svg" />

<style lang="scss">
    @import 'components/icon/icon.scss';
</style>

<script>
    import { chevronLeft, chevronRight } from './iconConfig' 

    export let type = 'chevron-right';
    export let theme = 'black';

    const types = {
        'chevron-left': chevronLeft,
        'chevron-right': chevronRight,
    }

    const classNames = `${theme}`;
</script>

<svg class={classNames} viewBox={types[type].viewBox}>
    {@html types[type].geometry}
</svg>
