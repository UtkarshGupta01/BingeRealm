import { useEffect, useState } from "react";
import {
  SearchArea,
  SearchBar,
  SearchContainer,
  SearchIcon,
} from "./styles/Search.styled";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchPage = ({ showSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        showSearch(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch]);

  const handleSearchData = (event) => {
    if (event.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      showSearch(false);
    }
  };
  return (
    <SearchContainer>
      <SearchArea>
        <SearchBar
          type="text"
          placeholder="Search any movie or tv show"
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearchData}
        />
        <SearchIcon onClick={() => showSearch(false)}>
          <IoClose />
        </SearchIcon>
      </SearchArea>
    </SearchContainer>
  );
};

export default SearchPage;
