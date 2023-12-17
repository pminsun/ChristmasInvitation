import axios from "axios";
import { useSearchParams } from "next/navigation";

const url = "http://localhost:3000";
export async function fetchUsersList(
  searchFilterInput: string,
  selectFirstFilter: string,
  selectCategoryFilter: string,
  startDate: any,
  endDate: any
) {
  const params = {
    searchInput: searchFilterInput,
    selectFirstFilter: selectFirstFilter,
    selectCategoryFilter: selectCategoryFilter,
    startDate,
    endDate,
  };

  return axios({
    url: `${url}/api/auth/users`,
    method: "get",
    params,
  }).then((response) => response.data);
}
