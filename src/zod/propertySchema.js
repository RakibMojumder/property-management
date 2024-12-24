import { z } from "zod";

const propertySchema = z.object({
  propertyName: z.string().min(1, { message: "Property name is required." }),
  category: z.string().min(1, { message: "Category is required." }),
  image: z.string().min(1, { message: "Image is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  price: z.number({ message: "Price is required." }),
  beds: z.number({ message: "Bedroom is required." }),
  bathroom: z.number({ message: "Bathroom is required." }),
  squareFoot: z.number({ message: "Square foot is required." }),
  floor: z.number({ message: "Floor is required." }),
});

export default propertySchema;
