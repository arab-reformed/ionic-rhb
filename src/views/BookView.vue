<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ book.title }}
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding" v-if="book">
      <chapter-button-item v-for="chap in chaptersList(book)" :key="chap" :book="book" :chapter-num="chap"></chapter-button-item>
<!--      <ChapterListItem v-for="chap in chaptersList(book)" :key="chap" :book="book" :chapter-num="chap"></ChapterListItem>-->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/vue';
import {FwgBookIface, FwgData} from "@/classes/fwg-data";
import ChapterListItem from "@/components/ChapterListItem.vue";
import ChapterButtonItem from "@/components/ChapterButtonItem.vue";

const route = useRoute();

const book = new FwgData().getBook(parseInt(route.params.id as string, 10));

const chaptersList = (book: FwgBookIface) => {
  const l : number[] = [];
  for (let i = 1; i <= book.chapters; i++) { l.push(i)}
  return l;
}

const getBackButtonText = () => {
  const win = window as any;
  const mode = win && win.Ionic && win.Ionic.mode;
  return mode === 'ios' ? 'Books' : '';
};
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h1 {
  text-align: center;
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>
