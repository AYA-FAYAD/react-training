import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItems";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const renderedResult = searchResults.map((result) => {
    return <PackageListItem pack={result} />;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedResult}</div>
    </div>
  );
}
