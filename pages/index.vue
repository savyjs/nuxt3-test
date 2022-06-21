<template>
  <div>
    <div class="">
      <div class="">
        <section class="w-full">
          <Slider />
        </section>
        <div class="container mx-auto block">
          <section class="w-full">
            <DigiBranchs />
          </section>
          <section class="w-full">
            <Incredible />
          </section>
          <section>
            <Banners />
          </section>
          <section>
            <Categories />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
definePageMeta({
  title: 'nuxt 3 tailwind marketplace theme',
  layout: 'ntm-market'
})
</script>
