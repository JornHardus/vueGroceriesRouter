<script setup>
import { computed } from "vue";
import groceries from "/src/store/Groceries.js";
import { deleteGrocery } from "/src/store/Groceries.js";
import { useRouter } from "vue-router";

const router = useRouter();

const calculateTotal = computed(() => {
  return groceries.value.reduce(
    (totalPrice, item) => totalPrice + item.Price * item.Quantity,
    0
  );
});

const deleteGroc = (groc) => {
  deleteGrocery(groc);
};

const goToEditPage = (groc) => {
  router.push({
    name: "edit",
    params: {
      id: groc.id,
    },
  });
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

    <hr />
    <button @click="deleteGroc(groc)">Delete</button>
    <button @click="goToEditPage(groc)">Edit</button>
  </div>
  <td class="header">Total Cost: {{ calculateTotal }} Euro</td>
</template>
