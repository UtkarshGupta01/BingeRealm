import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";
import useFetch from "../../hooks/useFetch";
import Select from "react-select";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Item from "../../components/CarousalItem/Item";
import dayjs from "dayjs";
import poster from "/images/Poster.png";
import spinner from "/gif/spinner.gif";
import { useSelector } from "react-redux";
import {
  ExploreTitle,
  Filters,
  MediaSection,
  Spinner,
  NotFound,
} from "./styles/Explore.styled";
import "./styles/Explore.css";

let filters = {};

const sortbyData = [
  { value: "popularity.asc", label: "Popularity - Ascending" },
  { value: "popularity.desc", label: "Popularity - Descending" },
  { value: "vote_average.asc", label: "Rating - Ascending" },
  { value: "vote_average.desc", label: "Rating - Descending" },
  { value: "primary_release_date.asc", label: "Release Date - Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date - Descending",
  },
  { value: "original_title.asc", label: "Title (A-Z)" },
  { value: "original_title.desc", label: "Title (Z-A)" },
];

const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const currentMedia = mediaType;

  const fetchInitialData = () => {
    setLoading(true);
    fetchData(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextDataset = () => {
    fetchData(`/discover/${mediaType}?page=${pageNum}`, filters).then((res) => {
      if (data?.results) {
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
    filters = {};
    setData(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPageNum(1);
    fetchInitialData();
  };

  return (
    <SectionWrapper>
      <ExploreTitle>
        {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
      </ExploreTitle>
      <Filters>
        <Select
          isMulti
          name="genres"
          value={genre}
          closeMenuOnSelect={false}
          options={genresData?.genres}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          onChange={onChange}
          placeholder="Select Genres"
          className="react-select-container genres"
          classNamePrefix="react-select"
        />
        <Select
          name="sortby"
          value={sortby}
          options={sortbyData}
          onChange={onChange}
          isClearable={true}
          placeholder="Sort by"
          className="react-select-container sort"
          classNamePrefix="react-select"
        />
      </Filters>
      {loading && <Spinner src={spinner} />}
      {!loading && (
        <>
          {data?.results?.length > 0 ? (
            <InfiniteScroll
              dataLength={data?.results?.length || []}
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
                      onClick={() =>
                        navigate(
                          `/${item.media_type || currentMedia}/${item.id}`
                        )
                      }
                    />
                  );
                })}
              </MediaSection>
            </InfiniteScroll>
          ) : (
            <NotFound>Sorry, results not found :(</NotFound>
          )}
        </>
      )}
    </SectionWrapper>
  );
};

export default Explore;
