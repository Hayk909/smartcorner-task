<template>
  <div>
    <nav
      :class="{ open: isDrawerOpen }"
      class="navigation-drawer"
    >
      <div class="navigation-drawer__logo d-flex">
        <span class="d-flex">
          <ion-icon name="square"></ion-icon>
          <ion-icon name="ellipse"></ion-icon>
          <ion-icon name="ellipse"></ion-icon>
        </span>
        <span>logoipsum</span>
      </div>
      <div class="navigation-drawer__menu">
        <ul>
          <li class="navigation-drawer__menu__item">menu element</li>
          <li class="navigation-drawer__menu__item">menu element</li>
          <li class="navigation-drawer__menu__item">menu element</li>
        </ul>
      </div>
      <div class="navigation-drawer__bottom" @click="onLogout">
        <span class="d-flex align-items-center">
          <ion-icon name="exit-outline"></ion-icon>
          <span class="navigation-drawer__bottom--text">admin</span>
        </span>
      </div>
    </nav>
    <div
      class="background-overlay"
      @click="toggleDrawer"
    ></div>
  </div>
</template>

<script src="./index.script.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
