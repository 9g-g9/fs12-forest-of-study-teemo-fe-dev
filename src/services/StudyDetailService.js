const STUDY_API_URL = 'http://localhost:8080/api/studies';
const EMOJI_API_URL = 'http://localhost:8080/api/emojis';

export const getStudyDetail = async (id) => {
  const res = await fetch(`${STUDY_API_URL}/${id}`);
  const data = await res.json();

  return data.data;
};

// emoji
export const getEmojis = async (id) => {
  const res = await fetch(`${EMOJI_API_URL}/${id}`);
  const data = await res.json();

  return data.data;
};

export const createEmojis = async (id, emoji) => {
  const res = await fetch(`${EMOJI_API_URL}/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emoji,
    }),
  });

  const data = await res.json();

  return data.data;
};

export const updateEmojis = async (id, emojiId) => {
  const res = await fetch(`${EMOJI_API_URL}/${id}/${emojiId}`, {
    method: 'PATCH',
  });

  const data = await res.json();

  return data.data;
};
