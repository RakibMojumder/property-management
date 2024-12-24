"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BathIcon } from "lucide-react";
import { BedSingleIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import PropertyDetails from "./PropertyDetails";
import DeleteProperty from "./DeleteProperty";
import defaultProperties from "../data/properties.json";
import { useEffect, useState } from "react";
import FilterProperty from "./FilterProperty";
import AddProperty from "./AddProperty";

export const getProperties = () => {
  if (typeof window === "undefined") return;
  const storedProperties = window.localStorage.getItem("properties");
  return storedProperties ? JSON.parse(storedProperties) : defaultProperties;
};

const Properties = () => {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    setProperties(getProperties());
  }, []);

  if (properties === null)
    return <div className="text-center mt-5">Loading...</div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-y-3 sm:gap-y-0 mb-5">
        <h1 className="text-lg font-semibold">Properties</h1>
        <div className="flex items-center gap-x-5 justify-between sm:justify-normal">
          <FilterProperty setProperties={setProperties} />
          <AddProperty setProperties={setProperties} />
        </div>
      </div>
      <Table>
        <TableCaption>A list of properties.</TableCaption>
        <TableHeader>
          <TableRow className="rounded-md bg-neutral-200/80 dark:bg-[#27272A] text-sm dark:text-muted-foreground">
            <TableHead className="w-[50px] pl-3 rounded-l-lg">
              <Checkbox />
            </TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Properties Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Property Types</TableHead>
            <TableHead>Bedrooms</TableHead>
            <TableHead>Bathrooms</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-left rounded-r-lg">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties?.map((property, index) => (
            <TableRow key={index}>
              <TableCell className="pl-3">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Image
                  src={property.image}
                  alt="property image"
                  height={100}
                  width={100}
                  className="size-12"
                />
              </TableCell>
              <TableCell>
                <h3 className="font-medium min-w-32">
                  {property.propertyName}
                </h3>
              </TableCell>
              <TableCell>{property.squareFoot}ft</TableCell>
              <TableCell>{property.category}</TableCell>
              <TableCell>
                <div className="inline-flex items-center px-1 py-0.5 gap-x-1">
                  <BedSingleIcon size={18} />
                  <span className="text-sm font-semibold">{property.beds}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="inline-flex items-center px-1 py-0.5 gap-x-1">
                  <BathIcon size={18} />
                  <span className="text-xs font-semibold">
                    {property.bathroom}
                  </span>
                </div>
              </TableCell>
              <TableCell>${property.price}</TableCell>
              <TableCell>
                <div className="flex items-center gap-x-4">
                  <PropertyDetails property={property} />
                  <DeleteProperty
                    propertyIndex={index}
                    setProperties={setProperties}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Properties;
