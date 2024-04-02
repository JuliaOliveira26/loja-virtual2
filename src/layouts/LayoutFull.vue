<script setup> 
import {useLayout} from '@/components/layout';
const {layout} = useLayout();
</script>

<template>
<component :is="layout"/>

</template>