<!--
  Full list of slots available in the default theme layout:

  When layout: 'doc' (default) is enabled via frontmatter:
    doc-top
    doc-bottom
    doc-footer-before
    doc-before
    doc-after
    sidebar-nav-before
    sidebar-nav-after
    aside-top
    aside-bottom
    aside-outline-before
    aside-outline-after
    aside-ads-before
    aside-ads-after
  When layout: 'home' is enabled via frontmatter:
    home-hero-before
    home-hero-info
    home-hero-image
    home-hero-after
    home-features-before
    home-features-after
  When layout: 'page' is enabled via frontmatter:
    page-top
    page-bottom
  On not found (404) page:
    not-found
  Always:
    layout-top
    layout-bottom
    nav-bar-title-before
    nav-bar-title-after
    nav-bar-content-before
    nav-bar-content-after
    nav-screen-content-before
    nav-screen-content-after
-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <NavAuth />
    </template>
  </Layout>
</template>
