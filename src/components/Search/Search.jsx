import { useEffect } from "react";
import {
  SearchArea,
  SearchBar,
  SearchContainer,
  SearchIcon,
} from "./styles/Search.styled";
import { IoClose } from "react-icons/io5";

const SearchPage = ({ showSearch }) => {
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
  return (
    <SearchContainer>
      <SearchArea>
        <SearchBar type="text" placeholder="Search any movie or tv show" />
        <SearchIcon onClick={() => showSearch(false)}>
          <IoClose />
        </SearchIcon>
      </SearchArea>
    </SearchContainer>
  );
};

export default SearchPage;
