export const getToken = () => {
  const token = localStorage.getItem('@brix/token') || '';
  return token;
}