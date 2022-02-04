<template>
  <div class="d-flex justify-center align-items-center">
    <div
      :class="{ open: isOpen }"
      class="modal-window"
    >
      <div v-if="active" class="card d-flex">
        <div class="card__image">
          <img :src="active.image" :alt="active.name">
        </div>
        <div class="card__details">
          <div class="card__details__item d-flex align-items-center">
            <span class="card__details__item__icon d-flex justify-center align-items-center">
              <ion-icon name="person"></ion-icon>
            </span>
            <span class="card__details__item--typography" v-text="active.name" />
          </div>
          <div class="card__details__item d-flex align-items-center">
            <span class="card__details__item__icon d-flex justify-center align-items-center">
              <ion-icon name="mail"></ion-icon>
            </span>
            <a
              :href="`mailto:mail@${active.email}`"
              class="card__details__item--typography"
              v-text="active.email"
            />
          </div>
          <div class="card__details__item d-flex align-items-center">
            <span class="card__details__item__icon d-flex justify-center align-items-center">
              <ion-icon name="call"></ion-icon>
            </span>
            <span class="card__details__item--typography" v-text="active.phone" />
          </div>
          <div class="card__details__item d-flex align-items-center">
            <span class="card__details__item__icon d-flex justify-center align-items-center">
              <ion-icon name="home"></ion-icon>
            </span>
            <span class="card__details__item--typography">
              {{ active.address.city }},
              {{ active.address.street }}
            </span>
          </div>
          <div class="card__details__item d-flex align-items-center">
            <span class="card__details__item__icon d-flex justify-center align-items-center">
              <ion-icon name="globe"></ion-icon>
            </span>
            <a
              :href="active.website"
              class="card__details__item--typography"
              v-text="active.website"
            />
          </div>
        </div>
        <div
          class="card__icon"
          @click="$emit('close')"
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </div>
    <div
      class="modal-window-overlay"
      @click="$emit('close')"
    ></div>
  </div>
</template>

<script src="./index.script.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
