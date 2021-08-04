import { FETCH_SEARCH, SET_INPUT, SET_LOADING } from "./actionType";

export function setSearch(input) {
  return {
    type: FETCH_SEARCH,
    payload: input,
  };
}

export function setInput(input) {
  return {
    type: SET_INPUT,
    payload: input,
  };
}

export function setLoading(input) {
  return {
    type: SET_LOADING,
    payload: input,
  };
}

export function fetchSearch(input) {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${input}&num=10`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "50b5a5a41cmshaa9d6f6f85311acp1e1c56jsn583d2ae36f86",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setSearch(data));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
