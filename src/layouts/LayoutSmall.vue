<script setup>

import SmallFooter from '../components/templates/Small/SmallFooter.vue';
import SmallHeader from '../components/templates/Small/SmallHeader.vue';
</script>

<template>
<header>
    <SmallHeader/>
</header>

<main>
    <router-view />
</main>

<footer>
    <SmallFooter />
</footer>

</template>