import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { SearchFilters } from "./search-filters";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types";

interface LayoutProps {
  children: ReactNode;
}

async function Layout({ children }: LayoutProps) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    pagination: false,
    depth: 1, // For the sub categories record to be populated not flat array.
    where: { parent: { exists: false } },
  });

  const formatData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((sub) => ({
      // We are confident of the type cuz of the depth in the query.
      ...(sub as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formatData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
