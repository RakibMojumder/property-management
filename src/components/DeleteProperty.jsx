"use client";

import { TrashIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "react-toastify";
import { getProperties } from "./Properties";

const DeleteProperty = ({ propertyIndex, setProperties }) => {
  const [open, setOpen] = useState(false);

  const handleDeleteProperty = () => {
    const properties = getProperties();
    const filteredProperties = properties.filter(
      (property, index) => index !== propertyIndex
    );

    setProperties(filteredProperties);
    localStorage.setItem("properties", JSON.stringify(filteredProperties));
    setOpen(false);
    toast.success("Property deleted");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <TrashIcon size={18} className="text-red-400" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-52 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-sm">Delete Property</DialogTitle>
        </DialogHeader>
        <div className="bg-background flex flex-col items-center space-y-4">
          <h2>Are you sure want to delete this?</h2>
          <div className="space-x-5">
            <Button onClick={() => setOpen(false)}>No</Button>
            <Button
              onClick={handleDeleteProperty}
              variant="destructive"
              className="border"
            >
              Yes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProperty;
