// 습관 조회
export const getTodayHabits = async (id) => {
  const response = await fetch(`http://localhost:8080/api/habits/${id}/today`);
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || '습관 조회를 실패했습니다');
  }

  return result.data;
};

// 습관 생성
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

// 습관 토글
export const toggleHabit = async (studyId, habitId) => {
  const response = await fetch(
    `http://localhost:8080/api/habits/${studyId}/${habitId}/today`,
    {
      method: 'PATCH',
    },
  );

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || '습관 완료 상태 변경을 실패했습니다.');
  }

  return result.data;
};
