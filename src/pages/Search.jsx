import Header from "../components/Header";

import { useLocation } from "react-router-dom";
const Search = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Header />
      Hellow WOrld
      {/* {location.state?.id}
      {location.state?.name} */}
    </div>
  );
};

export default Search;
