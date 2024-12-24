import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon } from "lucide-react";

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <BellIcon size={20} className="hidden sm:block cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-background">
        <div className="grid gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index * 4}>
              <h3 className="text-sm relative before:absolute before:top-2 before:right-4 before:size-1.5 before:bg-green-500 before:rounded-full">
                New notification for you
              </h3>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
