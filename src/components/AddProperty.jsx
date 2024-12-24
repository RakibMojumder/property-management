"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
import { toast } from "react-toastify";
import propertySchema from "@/zod/propertySchema";
import { PlusIcon } from "lucide-react";

// default value for add property
const defaultValues = {
  propertyName: "",
  category: "",
  image: "https://techzaa.in/lahomes/admin/assets/images/properties/p-2.jpg",
  address: "",
  price: "",
  beds: "",
  bathroom: "",
  squareFoot: "",
  floor: "",
};

const AddProperty = ({ setProperties }) => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues,
  });

  // Form submit handler
  const onSubmit = (data) => {
    setProperties((prev) => {
      const newProperties = [...prev, data];
      localStorage.setItem("properties", JSON.stringify(newProperties));
      return newProperties;
    });
    setOpen(false);
    toast.success("Property added");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon /> Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl h-[500px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Property</DialogTitle>
        </DialogHeader>
        <div className="bg-background">
          <Form {...form}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {/* Property name field */}
                <FormField
                  control={form.control}
                  name="propertyName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Property Name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Property category field */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Property Category</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Category</SelectLabel>
                              <SelectItem value="Apartment">
                                Apartment
                              </SelectItem>
                              <SelectItem value="Bungalow">Bungalow</SelectItem>
                              <SelectItem value="Penthouse">
                                Penthouse
                              </SelectItem>
                              <SelectItem value="Residences">
                                Residences
                              </SelectItem>
                              <SelectItem value="Villas">Villas</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* property image link field */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Image Link</FormLabel>
                    <FormControl>
                      <Input placeholder="link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* address field */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* price field */}
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="price"
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(
                              e.target.value ? Number(e.target.value) : ""
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* bedrooms field */}
                <FormField
                  control={form.control}
                  name="beds"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Bedroom</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="bedroom"
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(
                              e.target.value ? Number(e.target.value) : ""
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* bathrooms field */}
                <FormField
                  control={form.control}
                  name="bathroom"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Bathroom</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="bathroom"
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(
                              e.target.value ? Number(e.target.value) : ""
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* square foot field */}
                <FormField
                  control={form.control}
                  name="squareFoot"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Square Foot</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="square foot"
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(
                              e.target.value ? Number(e.target.value) : ""
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* floor field */}
                <FormField
                  control={form.control}
                  name="floor"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Floor</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="floor"
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(
                              e.target.value ? Number(e.target.value) : ""
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
        <DialogFooter className="sm:justify-end mt-5">
          <DialogClose asChild>
            <div>
              <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProperty;
