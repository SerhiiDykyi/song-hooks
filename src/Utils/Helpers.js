export const saveToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error();
  }
};
export const getFromLS = key => {
  try {
    const query = localStorage.getItem(key);
    return query ? JSON.parse(query) : null;
  } catch (error) {
    throw new Error();
  }
};
