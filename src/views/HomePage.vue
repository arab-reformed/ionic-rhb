<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>أسفار</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">أسفار</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <BookListItem v-for="book in books" :key="book.bookNum" :book="book" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';

// import Books from '@/data/fwg-books.json';
// import MessageListItem from '@/components/MessageListItem.vue';
// import { getMessages, Message } from '@/data/messages';
// import { ref } from 'vue';
import { FwgData } from "@/classes/fwg-data";
import BookListItem from "@/components/BookListItem.vue";

const books = new FwgData().getBooks();
// const messages = ref<Message[]>(getMessages());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};
</script>
