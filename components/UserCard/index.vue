<template>
  <div @click="$emit('openModal')">
    <div class="card">
      <div class="card__image fill-height">
        <img :src="image" :alt="name" class="fill-height">
      </div>
      <div class="card__info d-flex justify-center align-items-center">
        <span class="card__info__icon">
          <ion-icon name="mail-outline"></ion-icon>
        </span>
        <span class="card__info__username" v-text="name" />
        <span class="card__info__location" v-text="location"/>
      </div>
    </div>
  </div>
</template>

<script src="./index.script.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
