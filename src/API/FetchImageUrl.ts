export const fetchImageUrls = async () => {
    const response = await fetch('http://localhost:3001/underdogs');
    const data = await response.json();
    return data;
  };