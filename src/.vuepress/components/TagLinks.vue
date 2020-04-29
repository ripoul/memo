<!-- .vuepress/components/TagLinks.vue -->
<template lang="html">
  <div>
    Tags:
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/cuisine/index.html#${tag}`}">
      {{tag}}
    </router-link>
  </div>
</template>