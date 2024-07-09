export const useApi = () => {
  const config = useRuntimeConfig();
  const { API_BASE } = config.public;

  const getAllPhotoPackages = () =>
    useFetch(`${API_BASE}/photoPackages`, {
      method: 'GET',
    });

  const getPhotoPackages = (packagesId: string | string[]) =>
    useFetch(`${API_BASE}/photoPackages/${packagesId}`, {
      method: 'GET',
    });

  const getPortfolio = () =>
    useFetch(`${API_BASE}/portfolios`, {
      method: 'GET',
    });

  return {
    getAllPhotoPackages,
    getPhotoPackages,
    getPortfolio,
  };
};