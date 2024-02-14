import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Item from "../../components/CarousalItem/Item";
import dayjs from "dayjs";
import poster from "/images/Poster.png";

import { SearchFor, Spinner, NotFound } from "./styles/SearchedResult.styled";
import spinner from "/gif/spinner.gif";
import { useSelector } from "react-redux";
import { MediaSection } from "../Explore/styles/Explore.styled";

const SearchedResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

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
        <div>
          {data?.results.length > 0 ? (
            <InfiniteScroll
              dataLength={data?.results.length || []}
              next={fetchNextDataset}
              hasMore={pageNum <= data?.total_pages}
              loader={<Spinner src={spinner} />}
            >
              <MediaSection>
                {data?.results.map((item) => {
                  if (item.media_type === "person") return;
                  const posterUrl = item.poster_path
                    ? url.poster + item.poster_path
                    : poster;
                  let mediaType = "";
                  if (item.media_type) {
                    if (item.media_type === "tv") {
                      mediaType = "TV";
                    } else {
                      mediaType = "Movie";
                    }
                  } else {
                    mediaType = null;
                  }
                  return (
                    <Item
                      key={item.id}
                      posterUrl={posterUrl}
                      posterName={item.title || item.name}
                      posterRelease={dayjs(
                        item.first_air_date || item.release_date
                      ).format("DD MMM, YYYY")}
                      mediaType={mediaType}
                      genres={item.genre_ids}
                      onClick={() => navigate(`/${item.media_type}/${item.id}`)}
                    />
                  );
                })}
              </MediaSection>
            </InfiniteScroll>
          ) : (
            <NotFound>Sorry, results not found :(</NotFound>
          )}
        </div>
      )}
    </SectionWrapper>
  );
};

export default SearchedResult;
