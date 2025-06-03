import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import SeedButton from "@/components/home/SeedButton";
import { Suspense } from "react";

export default async function HomePage({ searchParams }: any) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : undefined;
  const search = typeof params.search === "string" ? params.search : undefined;

  return (
    <section>
      <CategoriesList category={category} search={search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={category} search={search} />
      </Suspense>
      <SeedButton />
    </section>
  );
}
