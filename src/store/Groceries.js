import { ref, computed } from "vue";

// state
const groceries = ref([
  { Name: "brood", Price: 2.66, Quantity: 1, id: 1 },
  { Name: "kaas", Price: 1.5, Quantity: 1, id: 2 },
  { Name: "ei", Price: 0.5, Quantity: 6, id: 3 },
]);

export default groceries;

export const getAllGroceries = () => computed(() => groceries.value);
export const getProductById = (id) =>
  computed(() => groceries.value.find((grocery) => grocery.id == id));
//
// Actions
export const addGrocery = (groceryAdd) => groceries.value.push(groceryAdd);
export const editGrocery = (y) =>
  groceries.value.splice(
    groceries.value.findIndex((x) => x.id == y.id),
    1,
    y
  );

export const deleteGrocery = (i) =>
  groceries.value.splice(groceries.value.indexOf(i), 1);
