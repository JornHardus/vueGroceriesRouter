<script setup>
import { computed } from "vue";
import groceries from "/src/store/Groceries.js";
import { deleteGrocery } from "/src/store/Groceries.js";

const calculateTotal = computed(() => {
  return groceries.value.reduce(
    (totalPrice, item) => totalPrice + item.Price * item.Quantity,
    0
  );
});

const deleteGroc = (groc) => {
  deleteGrocery(groc);
};
</script>
<style>
.li {
  text-align: left;
}
.header {
  font-weight: bold;
}
</style>

<template>
  <div class="header">
    Grocery List:
    <hr />
  </div>

  <div class="li" v-for="groc in groceries">
    <tr>
      Product:
      {{
        groc.Name
      }}
    </tr>
    <tr>
      Price:
      {{
        groc.Price
      }}
      Euro
    </tr>
    Quantity:

    <input type="number" v-model="groc.Quantity" />
    <button @click="deleteGroc(groc)">Delete</button>
    <hr />
  </div>
  <td class="header">Total Cost: {{ calculateTotal }} Euro</td>
</template>
