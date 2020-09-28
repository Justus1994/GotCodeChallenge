const API_URL = 'https://anapioficeandfire.com/api';
const pageSize = 4;

async function gotFetch(endpoint, page) {
  const config = {
    method: 'GET',
    mode: 'cors',
  };

  const response = await window
    .fetch(`${API_URL}/${endpoint}?page=${page}&pageSize=${pageSize}`, config);

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  return Promise.reject(data);
}

export default gotFetch;
