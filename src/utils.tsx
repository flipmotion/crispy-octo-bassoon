import axios from "axios";

const API_URL = "https://swapi.dev/api/people/";
export const DEBOUNCE_DELAY = 1000;

export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor)
    })
}

export const searchFunction = (
  queryParam: string,
  setResults: (value: string[]) => void,
  setIsLoading: (value: boolean) => void
) => {
  axios
    .get(API_URL, {
      params: {
        search: queryParam
      }
    })
    .then(({
      data: {results}
    }: {data : {results: {name: string}[]}}) => {
      const isEmpty = results.length === 0;
      setIsLoading(false);
      setResults(!isEmpty ? results.map((i: any) => i.name) : []);
    });
};