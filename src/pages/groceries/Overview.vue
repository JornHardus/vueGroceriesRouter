<script setup>
import { computed } from "vue";
import groceries from "./../../data/groceries.js";

const calculateTotal = computed(() => {
  return groceries.reduce(
    (totalPrice, item) => totalPrice + item.Price * item.Quantity,
    0
  );
});
</script>

<template>
  <tr>
    Groceries:
  </tr>
  <li v-for="groc in groceries">
    Product: {{ groc.Name }} Price: {{ groc.Price }} Quantity:
    {{ groc.Quantity }}
    <input type="number" v-model="groc.Quantity" />
  </li>
  <td>Total Cost: {{ calculateTotal }} Euro</td>
</template>
