export const QUERY_STRING_EXP =
  /^(eq|cn|sw|ew|neq|ncn|nsw|new)::[0-9\w ]{1,30}$/;
  
export const QUERY_NUMBER_EXP = /^(eq|mt|lt|lte|mte|neq)::\d{1,30}$/;

export function isQueryString(queryString: string) {
  return (
    QUERY_STRING_EXP.test(queryString) || QUERY_NUMBER_EXP.test(queryString)
  );
}
