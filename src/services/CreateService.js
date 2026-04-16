export const postStudy = async (data) => {
  const response = await fetch('http://localhost:8080/api/studies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

export const patchService = async (id, data) => {
  const response = await fetch(`http://localhost:8080/api/studies/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

export const getStudy = async (id) => {
  const response = await fetch(`http://localhost:8080/api/studies/${id}`);
  const result = await response.json();
  return result;
};
