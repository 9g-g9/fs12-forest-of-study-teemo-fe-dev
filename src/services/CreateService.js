export const createStudy = async (data) => {
  const response = await fetch('http://localhost:8080/api/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};
