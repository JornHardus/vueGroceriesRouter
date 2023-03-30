import { reactive } from "vue";
const groceries = reactive([
  { Name: "brood", Price: 2.66, Quantity: 1 },
  { Name: "kaas", Price: 1.5, Quantity: 1 },
  { Name: "ei", Price: 0.5, Quantity: 6 },
]);

export default groceries;
