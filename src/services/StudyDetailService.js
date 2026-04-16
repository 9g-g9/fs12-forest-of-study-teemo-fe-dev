const STUDY_API_URL = 'http://localhost:8080/api/studies';
const EMOJI_API_URL = 'http://localhost:8080/api/emojis';

export const getStudyDetail = async (id) => {
  const res = await fetch(`${STUDY_API_URL}/${id}`);
  const data = await res.json();

  return data.data;
};

export const getEmojis = async (id) => {
  const res = await fetch(`${EMOJI_API_URL}/${id}`);
  const data = await res.json();

  return data.data;
};
