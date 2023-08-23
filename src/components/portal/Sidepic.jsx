import { useLocation } from "react-router-dom";

function Sidepic() {
  const location = useLocation();

  return (
    <div className='flex h-full w-full'>
      <div className='relative h-full w-full overflow-hidden'>
        <img src={`./assets/images${location.pathname=== "/"? "/menu" : location.pathname}bg.png`} className='h-full w-full object-cover bg-no-repeat bg-fixed md:rounded-tr-[40px] md:rounded-br-[40px]' />
        <img src={`./assets/images${location.pathname=== "/"? "/logowithtext" : location.pathname}lt.png`} className='logo absolute bottom-9 left-12 w-[80%]' />
      </div>
    </div>
  );
}

export default Sidepic
