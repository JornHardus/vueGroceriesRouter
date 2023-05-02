<script setup>
import GroceryForm from "/src/components/GroceryForm.vue";
import { addGrocery } from "/src/store/Groceries.js";

// 1. import groceryform
// 2. maak hier een leeg grocery template

const newGrocery = {
  Name: "",
  Price: "",
  Quantity: "",
};

const add = (groc) => {
  addGrocery(groc);
};
</script>

<template>
  <GroceryForm :grocery="newGrocery" @update-product="add" />
</template>
