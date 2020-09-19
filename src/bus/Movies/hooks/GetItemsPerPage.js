import { useCallback } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectTotalResults } from "../selectors";
import { selectCurrentPage } from "../../Searchbar/slectors";

export const GetItemsPerPage = () => {
  const totalResults = useSelector(selectTotalResults);
  const currentPage = useSelector(selectCurrentPage, shallowEqual);
  const itemsPerPage = 10;

  const counItemsOnPage = useCallback(() => {
    let startItemsNumber;
    const total = currentPage * itemsPerPage;
    if (totalResults < total) {
      const diff = totalResults % itemsPerPage;
      startItemsNumber = totalResults - diff + 1;
      return `${startItemsNumber}-${totalResults}`;
    }
    startItemsNumber = total - 9;
    return `${startItemsNumber}-${total}`;
  }, [currentPage, totalResults]);

  const checkTotalResult = useCallback(() => {
    const total = currentPage * itemsPerPage;
    if (totalResults < total) {
      return true;
    }
    return false;
  }, [currentPage, totalResults]);

  const checkFirstPage = useCallback(() => {
    if (currentPage === 1) {
      return true;
    }
    return false;
  }, [currentPage]);

  return { counItemsOnPage, checkTotalResult, checkFirstPage };
};
