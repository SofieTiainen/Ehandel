import axios, { AxiosResponse } from "axios";

interface FetchDataResult<T> {
  data: T;
  error?: string;
}

const fetchData = async <T>(url: string): Promise<FetchDataResult<T>> => {
  try {
    const response: AxiosResponse<T | T[]> = await axios.get(url);
    const responseData = Array.isArray(response.data) ? response.data : [response.data] as T[];
    return { data: responseData as T };
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return { data: {} as T, error: 'Error fetching data' };
  }
};

export { fetchData };
