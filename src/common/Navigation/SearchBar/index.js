import { Search, SearchWrapper, SearchIcon } from "./styled";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../../../features/queryParameter";
import { changeSearchPeopleValue } from "../../../features/Slices/peopleSlice";
import { changeSearchMoviesValue } from "../../../features/Slices/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchQueryParamName } from "../../../features/queryParamName";

const SearchBar = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    location.pathname === "/people"
      ? dispatch(changeSearchPeopleValue(query))
      : dispatch(changeSearchMoviesValue(query));
  }, [dispatch, location.pathname, query]);

  const onInputChange = ({ target }) => {
    replaceQueryParameter({ key: searchQueryParamName, value: target.value });
    if (location.pathname !== "/people" && location.pathname !== "/movie") {
      location.pathname.slice(0, 15) === "/people/details"
        ? history.push(`/people?query=${target.value}`)
        : history.push(`/movie?query=${target.value}`);
    }
  };

  return (
    <SearchWrapper>
      <SearchIcon />
      <Search
        placeholder={
          location.pathname === "/people" ||
          location.pathname.slice(0, 15) === "/people/details"
            ? "Search for people..."
            : "Search for movies..."
        }
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
