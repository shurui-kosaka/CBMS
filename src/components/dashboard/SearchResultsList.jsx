import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="w-full bg-white flex flex-col absolute shadow-lg rounded-[10px] mt-[3rem] max-h-[300px] overflow-y-auto">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
