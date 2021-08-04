import React, { useEffect } from "react";
import "../styles/main.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../store/actions";
import NotFound from "../components/NotFound";
import { useHistory } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.reducer.input);
  const searchData = useSelector((state) => state.reducer.data);
  const loading = useSelector((state) => state.reducer.loading);

  useEffect(() => {
    dispatch(fetchSearch(data));
  }, [dispatch, data]);

  //   function toWebSection(link) {
  //     history.push(`/section/${link}`);
  //   }

  return (
    <section id="main">
      {loading ? (
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="loading"
          className="mx-auto"
        />
      ) : (
        <div className="text-gray-900">
          <div className="p-4 flex">
            <h1 className="text-3xl">Search Results</h1>
          </div>
          <div className="px-3 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left px-5">No.</th>
                  <th className="text-left p-3 px-5">Title</th>
                  <th className="text-left p-3 px-5">Link</th>
                  <th />
                </tr>
                {searchData.results && searchData.results.length ? (
                  searchData.results.map((result, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-orange-100 bg-gray-100"
                    >
                      <td className="px-5">
                        <p className="bg-transparent">{index + 1}</p>
                      </td>
                      <td className="p-3 px-5">
                        <p className="bg-transparent">{result.title}</p>
                      </td>
                      <td className="p-3 px-5">
                        <a
                          href={result.link}
                          target="_blank"
                          //   onClick={() => toWebSection(result.link)}
                          className="bg-transparent"
                        >
                          {result.link}
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <NotFound></NotFound>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

export default Main;
