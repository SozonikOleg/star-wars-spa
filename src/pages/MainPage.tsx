import { useEffect, useState } from "react";
import { HeroCard } from "../components/HeroCard";
import { HeroesSearch } from "../components/HeroesSearch";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { fetchHeroes } from "../store/actions/heroActions";
import ReactPaginate from "react-paginate";
import { HeroesFilter } from "../components/HeroesFilter";

const ITEMS_PER_PAGE = 10;

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { error, loading, heros, count } = useAppSelector(
    (state) => state.hero
  );

  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  const handlerChangePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  useEffect(() => {
    dispatch(fetchHeroes(page, ITEMS_PER_PAGE));
  }, [dispatch, page]);

  return (
    <div className="container mx-auto max-w-[760px] pt-5 ">
      <HeroesSearch />

      <HeroesFilter />

      {loading && (
        <p className="text-center text-lg text-blue-400">Loading ...</p>
      )}
      {heros?.length === 0 && !loading && (
        <p className="text-center text-lg text-blue-400">No heroes ...</p>
      )}
      {error && <p className="text-center text-lg text-red-600">{error}</p>}
      {heros?.map((hero) => {
        return <HeroCard key={hero.name} hero={hero} />;
      })}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlerChangePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="py-1 px-2 border mr-1 text-blue-400"
        containerClassName="flex py-1 px-2 border text-blue-400"
        previousClassName="py-1 px-2 border mr-1 text-blue-400"
        nextClassName="py-1 px-2 border mr-1 text-blue-400"
        activeClassName="bg-blue-50 text-blue-400"
      />
    </div>
  );
};
