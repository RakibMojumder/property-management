import Properties from "@/components/Properties";
import userImg from "../../public/user.png";
import Image from "next/image";
import { TicketsPlaneIcon } from "lucide-react";
import { CircleArrowOutDownRightIcon } from "lucide-react";
import { LandPlotIcon } from "lucide-react";
import { ShieldCheckIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-5 mb-12">
      {/* Welcome user part */}
      <div className="flex items-center gap-x-3">
        <Image
          src={userImg}
          alt="user image"
          className="size-12 border rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Welcome !</h1>
          <p className="text-sm font-medium text-muted-foreground">
            Here is an overview of your properties
          </p>
        </div>
      </div>

      {/* Some key numbers of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="border p-5 flex justify-between items-center bg-background">
          <div className="space-y-2.5">
            <p className="text-sm text-muted-foreground">Check in</p>
            <h2>18</h2>
          </div>
          <TicketsPlaneIcon className="text-violet-500" />
        </div>

        <div className="border p-5 flex justify-between items-center bg-background">
          <div className="space-y-2.5">
            <p className="text-sm text-muted-foreground">Check out</p>
            <h2>24</h2>
          </div>
          <CircleArrowOutDownRightIcon className="text-orange-500" />
        </div>

        <div className="border p-5 flex justify-between items-center bg-background">
          <div className="space-y-2.5">
            <p className="text-sm text-muted-foreground">Property</p>
            <h2>14</h2>
          </div>
          <LandPlotIcon className="text-indigo-500" />
        </div>

        <div className="border p-5 flex justify-between items-center bg-background">
          <div className="space-y-2.5">
            <p className="text-sm text-muted-foreground">Revenue</p>
            <h2>2443</h2>
          </div>
          <ShieldCheckIcon className="text-purple-500" />
        </div>
      </div>

      {/* Properties */}
      <Properties />
    </div>
  );
}
