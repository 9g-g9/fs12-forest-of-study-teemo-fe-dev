export const getTodayHabits = async (id) => {
  const response = await fetch(`http://localhost:8080/api/habits/${id}/today`);
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || '습관 조회를 실패했습니다');
  }

  return result.data;
};

export const postHabit = async (id, name) => {
  const response = await fetch(`http://localhost:8080/api/habits/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || '습관 생성을 실패했습니다.');
  }

  return result.data;
};
