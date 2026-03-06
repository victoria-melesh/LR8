async function fetchData(url) {
  const result = {
    data: [],
    isLoading: true,
    error: null
  };

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    result.data = await response.json();
  } catch (err) {
    result.error = err;
  } finally {
    result.isLoading = false;
  }

  return result;
}

module.exports = {
  fetchData
};