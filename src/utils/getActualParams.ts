export const getActualSearchParams = (searchParams: URLSearchParams) => {
  return {
    page: searchParams.get("page") || undefined,
    count: searchParams.get("count") || undefined,
    keyword: searchParams.get("keyword") || undefined,
    catalogues: searchParams.get("catalogues") || undefined,
    payment_from: searchParams.get("payment_from") || undefined,
    payment_to: searchParams.get("payment_to") || undefined,
  };
};
