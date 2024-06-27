export const useApi = () => {
  const config = useRuntimeConfig();
  const { API_BASE } = config.public;

  const getAllPhotoPackages = () =>
    useFetch(`${API_BASE}/photoPackages`, {
      method: 'GET',
    });

  const getPortfolio = () =>
    useFetch(`${API_BASE}/portfolios`, {
      method: 'GET',
    });

  return {
    getAllPhotoPackages,
    getPortfolio,
  };
};