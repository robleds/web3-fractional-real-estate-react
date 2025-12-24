import { StyledHeader } from "./styles";
import { HeaderProps } from "./types";
import { FiSearch } from "react-icons/fi";
import { Wrapper } from "../Wrapper";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const Header = (props: HeaderProps) => {
  const { title, height, search, horizontal, align, url, searchTerm, setSearchTerm } = props;
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const setSearch = setSearchTerm as Dispatch<SetStateAction<string>>
    setSearch(event.target.value);
  }

  return (
    <StyledHeader height={height} url={url}>
      <Wrapper horizontal={horizontal} align={align}>
      <h2 className="bold">{ title }</h2>
      <div className="backdrop"></div>
      <div className={`search-bar${search ? "" : " hidden"}`}>
        <div className="icon">
          <FiSearch size={20} />
        </div>
        <input value={searchTerm} onChange={handleSearch} type="text" />
      </div>
      </Wrapper>
    </StyledHeader>
  );
};

export { Header };
