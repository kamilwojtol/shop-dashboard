import { ref } from "vue";

export default function useProducts() {
  const products = ref([
    {
      code: "P001",
      name: "Product 1",
      category: "Electronics",
      quantity: 10,
    },
    {
      code: "P002",
      name: "Product 2",
      category: "Clothing",
      quantity: 20,
    },
    {
      code: "P003",
      name: "Product 3",
      category: "Home & Kitchen",
      quantity: 5,
    },
  ]);

  return {
    products,
  };
}
