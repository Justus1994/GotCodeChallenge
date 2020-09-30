const API_URL = 'https://anapioficeandfire.com/api';
const pageSize = 4;

const config = {
  method: 'GET',
  mode: 'cors',
};

export async function gotHouseFetcher(page) {
  const response = await window
    .fetch(`${API_URL}/houses?page=${page}&pageSize=${pageSize}`, config);

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  return Promise.reject(data);
}

export async function gotFetch(url) {
  const response = await window
    .fetch(url, config);

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  return Promise.reject(data);
}
