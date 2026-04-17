const apiUrl = import.meta.env.VITE_API_URL;

export const getTotalPoint = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/api/points/${id}`);
    if (!res.ok) {
      throw new Error('데이터 로딩에 실패했습니다');
    }
    const { data } = await res.json();

    return data.totalPoint;
  } catch (error) {
    console.error(error);
  }
};
