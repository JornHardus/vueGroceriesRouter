import { ref, computed } from "vue";

// state
const groceries = ref([
  { Name: "brood", Price: 2.66, Quantity: 1 },
  { Name: "kaas", Price: 1.5, Quantity: 1 },
  { Name: "ei", Price: 0.5, Quantity: 6 },
]);

export default groceries;

export const getAllGroceries = () => computed(() => groceries.value);
export const getProductById = (id) => () =>
  computed(() => groceries.value.find((grocery) => grocery.id == id));

// Actions
export const addGrocery = (groceryAdd) => groceries.value.push(groceryAdd);
export const editGrocery = () => groceries.value.push();

export const deleteGrocery = (i) =>
  groceries.value.splice(groceries.value.indexOf(i), 1);
