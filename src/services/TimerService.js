export const upsertTimer = async (studyId) => {
  try {
    const res = await fetch(`http://localhost:8080/api/timers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studyId,
      }),
    });
    if (!res.ok) {
      throw new Error('데이터 로딩에 실패했습니다');
    }
    const { data } = await res.json();

    return data.timer;
  } catch (error) {
    console.error(error);
  }
};
