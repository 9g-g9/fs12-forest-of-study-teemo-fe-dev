export const getTotalPoint = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/points/${id}`);
    if (!res.ok) {
      throw new Error('데이터 로딩에 실패했습니다');
    }
    const { data } = await res.json();

    return data.totalPoint;
  } catch (error) {
    console.error(error);
  }
};
