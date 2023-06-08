<script setup>
import { reactive } from "vue";
// 1. props definieren
// 2. emits definieren

const props = defineProps(["grocery"]);

const emit = defineEmits(["productChange"]);
const copyGrocery = reactive(Object.assign({}, props.grocery));

// TODO: maak een ref / kopie van de grocery property, en deze kopie v-model je in je template zodat niet de state direct gewijzigd wordt, maar een kopie daarvan
</script>
<style>
form {
  text-align: right;
}
</style>
<template>
  <form
    @submit.prevent="
      $emit('productChange', copyGrocery), this.$router.push('/')
    "
  >
    Product Name: <input type="text" v-model="copyGrocery.Name" /><br />
    Price: <input type="number" step="0.01" v-model="copyGrocery.Price" /><br />
    Quantity:
    <input type="number" step="0.01" v-model="copyGrocery.Quantity" /><br />
    <input type="hidden" copyGrocery.id="4" /><br />
    <button>confirm</button>
  </form>
</template>
