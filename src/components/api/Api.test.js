import { render, screen, waitFor } from "@testing-library/react";
import Api, { fetchJsonData } from "./Api";

import { mockData } from "../../../apidata";
it("should successfully fetch JSON data from the API endpoint", async () => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });

  await fetchJsonData();

  expect(global.fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users"
  );
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
