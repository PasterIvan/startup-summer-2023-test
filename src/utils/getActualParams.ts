export const getActualSearchParams = (
  searchParams: URLSearchParams,
): SearchParamsType => {
  return {
    page: searchParams.get("page") || "0",
    count: searchParams.get("count") || "4",
    keyword: searchParams.get("keyword") || undefined,
    catalogues: searchParams.get("catalogues") || undefined,
    payment_from: searchParams.get("payment_from") || undefined,
    payment_to: searchParams.get("payment_to") || undefined,
    published: searchParams.get("published") || "1",
  };
};
export type SearchParamsType = {
  page?: string;
  count?: string;
  keyword?: string;
  catalogues?: string;
  payment_from?: string;
  payment_to?: string;
  published?: string;
};
