import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { EyeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { BathIcon } from "lucide-react";
import { BedIcon } from "lucide-react";
import { SquareIcon } from "lucide-react";
import { Building2Icon } from "lucide-react";

const PropertyDetails = ({ property }) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <EyeIcon size={20} className="text-violet-400" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="hidden">
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </div>
        </DrawerHeader>
        <div className="space-y-3">
          <Image
            src={property.image}
            alt="property image"
            width={450}
            height={450}
            className="w-full"
          />
          <h2 className="text-lg font-semibold">{property.propertyName}</h2>
          <p className="text-muted-foreground text-sm">{property.address}</p>
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center p-1 gap-x-1 border rounded text-muted-foreground">
              <BedIcon size={18} />
              <span className="text-xs font-semibold">{property.beds} bed</span>
            </div>
            <div className="inline-flex items-center p-1 gap-x-1 border rounded text-muted-foreground">
              <BathIcon size={18} />
              <span className="text-xs font-semibold">
                {property.bathroom} bath
              </span>
            </div>

            <div className="inline-flex items-center p-1 gap-x-1 border rounded text-muted-foreground">
              <SquareIcon size={18} />
              <span className="text-xs font-semibold">
                {property.squareFoot} ft
              </span>
            </div>

            <div className="inline-flex items-center p-1 gap-x-1 border rounded text-muted-foreground">
              <Building2Icon size={18} />
              <span className="text-xs font-semibold">
                {property.floor} floor
              </span>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PropertyDetails;
