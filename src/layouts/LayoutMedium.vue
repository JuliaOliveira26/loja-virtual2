<script setup>
import MediumAside from '../components/templates/mediumMediumAside.vue';
import MediumFooter from '../components/templates/mediumLargeFooter.vue';
import MediumHeader from '../components/templates/mediumMediumHeader.vue';
</script>

<template>
<header>
    <MediumHeader/>
</header>

<aside>
    <MediumAside />
</aside>

<main>
    <router-view />
</main>

<footer>
    <MediumFooter />
</footer>

</template>