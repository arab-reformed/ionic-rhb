<template>
  <ion-button
      v-if="book"
      :routerLink="'/book/' + book.bookNum"
      color="light"
      class="book-button"
  >{{ arabic2hindi(book.abbrev) }}</ion-button>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import { FwgBookIface } from "@/classes/fwg-data";
import {PropType} from "vue";
import {arabic2hindi} from "../lib/markdown";

defineProps({
  book: Object as PropType<FwgBookIface>
});

const isIos = () => {
  const win = window as any;
  return win && win.Ionic && win.Ionic.mode === 'ios';
};
</script>

<style scoped>

.book-button {
  width: 60px;
  height: 60px;
  padding: 2px;
  background-color: lightgrey;
  color: white;
  font-size: 120%;
}


.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  padding-right: 5px;
  padding-left: 5px;
}

.list-item ion-label {
  margin-top: 8px;
  margin-bottom: 8px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>
