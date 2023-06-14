<script setup>
// 1. import groceryform
// 2. maak hier een leeg grocery template
import GroceryForm from "/src/components/GroceryForm.vue";
import { editGrocery } from "/src/store/Groceries.js";
import { getProductById } from "/src/store/Groceries.js";
import { useRoute } from "vue-router";

const route = useRoute();
// TODO: kies goede naam, bijv. productId
const prod = route.params.id;
// TODO: kies goede naam, bijv.: productCopy. Maak direct een deepcopy, zodat edit hier onder weg kan.
// bijv.: const productCopy = JSON.parse(JSON.stringifygetProductById(prod).value));
// (deepcopy in form component kan dan weg)
const getProd = getProductById(prod).value;

const edit = {
  Name: getProd.Name,
  Price: getProd.Price,
  Quantity: getProd.Quantity,
  id: getProd.id,
};

const editProduct = (y) => {
  // roep je hier de functie aan uit de store die de grocery aanpast
  console.log(editGrocery(y));
  editGrocery(y);
};
</script>

<template>
  <GroceryForm :grocery="edit" @product-change="editProduct" />
</template>
