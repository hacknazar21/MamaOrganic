import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import useHttp from "../hooks/hooks.http";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { request, loading, error, isOk } = useHttp();
  const [resultsShow, setResultsShow] = useState(false);
  useEffect(() => {}, []);
  const inputSearchHandler = (event) => {
    setSearch(event.target.value);
  };
  const searchButtonHandler = async (event) => {
    if (search !== "") {
      try {
        const data = await request("/api/products/?search=" + search);
        document.documentElement.classList.add("lock");
        if (data) {
          setResults(data.results);
          setResultsShow(true);
        }
      } catch (e) {}
    }
  };
  return (
    <>
      {resultsShow && (
        <div
          onClick={() => {
            setResultsShow(false);
            document.documentElement.classList.remove("lock");
          }}
          className={"basket__close-wrapper"}
        ></div>
      )}
      <input
        type="text"
        onInput={inputSearchHandler}
        placeholder="Поиск"
        className="header__search-input"
      />
      <button
        onClick={searchButtonHandler}
        type="submit"
        className="header__search-submit _icon-search"
      ></button>
      {resultsShow ? <SearchResults results={results} /> : ""}
    </>
  );
}
