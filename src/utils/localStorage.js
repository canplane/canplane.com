export const getValueFromLocalStorage = key => {
  if (typeof window === "undefined") return;
  return JSON.parse(window.localStorage.getItem(key));
};

export const setValueToLocalStorage = (key, value) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
};
