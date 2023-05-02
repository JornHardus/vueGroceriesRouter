<script setup>
// 1. import groceryform
// 2. maak hier een leeg grocery template
import { reactive } from "vue";
import { editGrocery } from "/src/store/Groceries.js";
import groceries from "/src/store/Groceries.js";

const copyGrocery = reactive(Object.assign({}, groceries.value));

const editProduct = () => {
  // roep je hier de functie aan uit de store die de grocery aanpast
  editGrocery(copyGrocery);
};
</script>

<template>
  <form>
    <li v-for="groc in copyGrocery">
      <input type="text" v-model="groc.Name" />
      <input type="number" step="0.01" v-model="groc.Price" />
      <input type="number" step="0.01" v-model="groc.Quantity" />
    </li>
    <button type="button" @click="editProduct">Confirm Edit</button>
  </form>
</template>
