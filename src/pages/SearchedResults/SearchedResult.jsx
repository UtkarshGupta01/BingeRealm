import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Cards from "../../components/Cards/Cards";
import {
  SearchFor,
  Spinner,
  ResultsFound,
} from "./styles/SearchedResult.styled";
import spinner from "/gif/spinner.gif";

const SearchedResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchData(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextDataset = () => {
    fetchData(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if (data.results) {
        setData({
          ...data,
          results: [...data.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <SectionWrapper>
      <SearchFor>
        Search results for &ldquo;<i>{`${query}`}</i>&rdquo;
      </SearchFor>
      {loading && <Spinner src={spinner} />}
      {!loading && (
        <ResultsFound>
          {data.results.length > 0 ? (
            <></>
          ) : (
            <span>Sorry, Results not Found</span>
          )}
        </ResultsFound>
      )}
    </SectionWrapper>
  );
};

export default SearchedResult;
