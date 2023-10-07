<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>أسفار</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">أسفار</ion-title>
        </ion-toolbar>
      </ion-header>

      <h1>العهد القديم</h1>
      <div>
        <book-button-item v-for="book in otBooks" :key="book.bookNum" :book="book"></book-button-item>
      </div>
      <h1>العهد الجديد</h1>
      <div>
        <book-button-item v-for="book in ntBooks" :key="book.bookNum" :book="book"></book-button-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

import { FwgData } from "@/classes/fwg-data";
import BookButtonItem from "@/components/BookButtonItem.vue";

const fwg = new FwgData()
const otBooks = fwg.getOtBooks();
const ntBooks = fwg.getNtBooks();
// const messages = ref<Message[]>(getMessages());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
