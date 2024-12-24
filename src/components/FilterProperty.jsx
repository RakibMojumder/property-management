import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { getProperties } from "./Properties";

const FilterProperty = ({ setProperties }) => {
  const [category, setCategory] = useState("");

  const handleFilterProperties = (value) => {
    const allProperties = getProperties();
    setCategory(value);

    if (value === "all") {
      return setProperties(allProperties);
    }

    const filteredProperties = allProperties.filter(
      (property) => property.category === value
    );

    setProperties(filteredProperties);
  };

  return (
    <Select
      value={category}
      onValueChange={(value) => handleFilterProperties(value)}
    >
      <SelectTrigger className="w-40 bg-background">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent className="bg-background">
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Apartment">Apartment</SelectItem>
          <SelectItem value="Bungalow">Bungalow</SelectItem>
          <SelectItem value="Penthouse">Penthouse</SelectItem>
          <SelectItem value="Residences">Residences</SelectItem>
          <SelectItem value="Villas">Villas</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterProperty;
