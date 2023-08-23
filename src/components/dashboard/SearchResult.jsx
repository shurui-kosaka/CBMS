export const SearchResult = ({ result }) => {
  return (
    <div
      className="px-[10px] py-[20px] hover:bg-[#efefef]"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
