import {
  SearchArea,
  SearchBar,
  SearchContainer,
  SearchIcon,
} from "./styles/Search.styled";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate("");
  return (
    <SearchContainer>
      <SearchArea>
        <SearchBar type="text" placeholder="Search..." />
        <SearchIcon onClick={() => navigate(`/`)}>
          <IoClose />
        </SearchIcon>
      </SearchArea>
    </SearchContainer>
  );
};

export default SearchPage;
