
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCategory } from "../utils/api";
import useFilterStore from "../stores/useFilterStore";

export const useProducts = () => {
  const { category } = useFilterStore();

  return useQuery({
    queryKey: ["products", category],
    queryFn: () =>
      category ? fetchProductsByCategory(category) : fetchProducts(),
    staleTime: 5 * 60 * 1000 // 5 minutes
  });
};
