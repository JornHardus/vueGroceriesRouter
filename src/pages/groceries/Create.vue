<script setup>
import GroceryForm from "/src/components/GroceryForm.vue";
import { addGrocery } from "/src/store/Groceries.js";
import groceries from "/src/store/Groceries.js";

const newGrocery = {
  Name: "",
  Price: "",
  Quantity: "",
  id: groceries.value.length + 1,
};

const add = (groc) => {
  addGrocery(groc);
};
</script>

<template>
  <GroceryForm :grocery="newGrocery" @product-change="add" />
</template>
