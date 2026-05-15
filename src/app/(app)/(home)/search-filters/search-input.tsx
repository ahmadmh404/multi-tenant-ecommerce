import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
  disable?: boolean;
}

export function SearchInput({ disable }: Props) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1.5 translate-y-1.5 size-4 text-neutral-400" />
        <Input
          className="pl-8"
          disabled={disable}
          placeholder="Search Products"
        />
      </div>
      {/* TODO: Categories View All Button */}
      {/* TODO: Categories Library Button */}
    </div>
  );
}
