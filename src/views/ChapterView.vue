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

    <ion-content :fullscreen="true" v-if="chapter" class="ion-padding chapter-text">
      <h2>{{ arabic2hindi(chapter.chapterTitle) }}</h2>
      <div class="remarkable" v-html="chapterHtml()"></div>
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

<style>
.remarkable ol li {
  list-style-type: arabic-indic;
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
