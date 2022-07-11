<template>
  <NtmCategories
      v-bind="data"
  />
</template>
<script setup>
const {data} = await useFetch(`/api/market/categories`)
</script>