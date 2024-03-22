<script setup></script>

<template>
  <div class="PostList" m-1rem bg-white p-1.5rem rounded flex-grow>
    <div class="container-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.PostList {
  flex-grow: 1;
  flex-shrink: 0;
  margin: var(--vp-layout-top-height, 0px) auto 0;
  width: 100%;
}

.VPContent.has-sidebar {
  margin: 0;
}

@media (min-width: 960px) {
  .PostList {
    padding-top: var(--vp-nav-height);
    margin: var(--vp-layout-top-height, 0px) 0 0;
    padding-left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .PostList {
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 2);
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}
</style>
