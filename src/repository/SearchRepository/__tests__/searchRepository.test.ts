import mockAxios from "../../../__mocks__/axios";
import searchRepository from "../searchRepository";
import { getSearchResponse } from "../mock";

describe("GET search", () => {
  test("search success ", async () => {
    const data = getSearchResponse;
    const value = "book";
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    const res = await searchRepository.search(value);

    expect(mockAxios.get).toBeCalledTimes(1);
    expect(mockAxios.get).toBeCalledWith("search", {
      params: { search: value },
    });
    expect(res.data).toEqual(data);
  });

  test("search failure", async () => {
    const value = "book";
    mockAxios.get.mockImplementationOnce(() => Promise.reject());

    expect(async () => await searchRepository.search(value)).toThrowError;

    expect(mockAxios.get).toBeCalledTimes(1);
    expect(mockAxios.get).toBeCalledWith("search", {
      params: { search: value },
    });
  });
});
