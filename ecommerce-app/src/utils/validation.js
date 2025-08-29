
import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  price: z.number().min(0.01, "Price must be greater than 0"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  image: z.string().url("Please enter a valid URL")
});

export const defaultValues = {
  title: "",
  price: 0,
  description: "",
  category: "",
  image: ""
};
