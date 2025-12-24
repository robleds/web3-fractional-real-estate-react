export const createConfig = (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return config;
}