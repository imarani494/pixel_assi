
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../utils/api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 60 * 60 * 1000 // 1 hour
  });
};
