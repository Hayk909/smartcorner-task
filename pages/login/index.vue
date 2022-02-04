<template>
  <div class="container fill-height d-flex align-items-center justify-center">
    <form class="form" @submit.prevent="onSubmit">
      <h1 class="form__title">sign in to your account</h1>
      <div class="form__controls">
        <div class="form__controls__input">
          <input
            v-model.trim="form.login"
            type="text"
            placeholder="login"
          >
        </div>
        <div class="form__controls__input d-flex align-items-center">
          <input
            v-model.trim="form.password"
            :type="type"
            placeholder="password"
          />
          <ion-icon
            :name="icon"
            class="form__controls__icon"
            @click="toggleShow"
          ></ion-icon>
        </div>
      </div>
      <button
        :class="{ 'ripple--active': showRipple }"
        type="submit"
        class="form__button"
        @click="toggleShowRipple"
      >sign in</button>
    </form>
  </div>
</template>

<script src="./index.script.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
