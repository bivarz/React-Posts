export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    next: {
      revalidate: 60 * 60,
    },
  });
  if (!response.ok) {
    throw new Error("Somenting is wrong");
  }
  const data = await response.json();
  return data;
};
