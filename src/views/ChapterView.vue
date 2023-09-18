<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ book.title }} <span class="chapter-num">{{ arabic2hindi(chapterNum)}}</span>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="chapter" class="chapter-text">
      <h2>{{ chapter.chapterTitle }}</h2>
      <div class="remarkable" v-html="chapterHtml()"></div>    </ion-content>
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
import {FwgData} from "@/classes/fwg-data";
import {arabic2hindi, markdownHtml} from "@/lib/markdown";

const route = useRoute();
const bookNum = parseInt(route.params.bookNum as string, 10);
const chapterNum = parseInt(route.params.chapterNum as string, 10);

const book = new FwgData().getBook(bookNum);
const chapter = new FwgData().getChapter(bookNum, chapterNum)

const chapterHtml = () => {
  return markdownHtml(chapter.text)
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

.chapter-text {
  margin-right: 5px;
  margin-left: 5px;
}

.chapter-text h2 {
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}

.chapter-num {
  font-weight: bolder;
}

p {
  line-height: 22px;
}
</style>
