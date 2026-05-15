import { Categories } from "./categories";
import { SearchInput } from "./search-input";

interface Props {
  data: any;
}

export function SearchFilters({ data }: Props) {
  return (
    <div className="px-4 lg:px-12 flex flex-col gap-4 py-8 border-b w-full">
      <SearchInput />
      <Categories data={data} />
    </div>
  );
}
