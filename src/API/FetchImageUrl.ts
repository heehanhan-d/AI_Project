export const fetchImageUrls = async () => {
    const response = await fetch('http://localhost:3001/underdogs');
    const data = await response.json();
    const limitedData = data.slice(0, 20);
    return limitedData;
  };