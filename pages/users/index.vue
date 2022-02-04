<template>
  <div>
    <div class="toolbar d-flex align-items-center">
      <div
        class="toolbar__icon"
        @click="toggleDrawer"
      >
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div class="toolbar__title">
        <h1>users</h1>
      </div>
    </div>
    <div class="users-card-container">
      <user-card
        v-for="user in users"
        :key="user.id"
        :image="user.image"
        :name="user.name"
        :location="user.address.city"
        @openModal="toggleShowModal(user)"
      />
    </div>
    <user-details-modal
      :is-open="isOpen"
      @close="toggleShowModal"
    />
  </div>
</template>

<script src="./index.script.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
