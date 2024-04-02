<script setup>
import LargeAside from '../components/templates/large/LargeAside.vue';
import LargeFooter from '../components/templates/large/LargeFooter.vue';
import LargeHeader from '../components/templates/large/LargeHeader.vue';
</script>

<template>
<header>
    <LargeHeader/>
</header>

<aside>
    <LargeAside />
</aside>

<main>
    <router-view />
</main>

<footer>
    <LargeFooter />
</footer>

</template>