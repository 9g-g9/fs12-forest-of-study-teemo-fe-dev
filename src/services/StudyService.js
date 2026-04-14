const STUDY_API_URL = 'http://localhost:3030/api/studies';
const RECENT_STUDY_LIST_KEY = 'recentStudyList';

const normalizeStudy = (study) => ({
  id: study.id,
  nickname: study.nickname ?? '',
  title: study.title ?? '',
  description: study.description ?? '',
  background: study.background ?? '',
  createdAt: study.createdAt ?? '',
  updatedAt: study.updatedAt ?? '',
  progressText: study.progressText ?? '',
  rewardPoint: study.rewardPoint ?? 0,
  commentCount: study.commentCount ?? 0,
  fireCount: study.fireCount ?? 0,
  heartCount: study.heartCount ?? 0,
});

// 스터디 목록 불러오기
export const getStudyList = async () => {
  const response = await fetch(STUDY_API_URL);

  if (!response.ok) {
    throw new Error('스터디 목록을 불러오지 못했습니다.');
  }

  const data = await response.json();

  return data.map(normalizeStudy);
};


// 로컬 스토리지 사용하여 최근 스터디 목록 불러오기
export const getRecentStudyList = () => {
  const storedValue = localStorage.getItem(RECENT_STUDY_LIST_KEY);

  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);

    return Array.isArray(parsedValue) ? parsedValue.map(normalizeStudy) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

//로컬스토리지에 최근 조회 목록 저장
export const saveRecentStudy = (study) => {
  const recentStudyList = getRecentStudyList();
  const filteredStudyList = recentStudyList.filter(
    (recentStudy) => recentStudy.id !== study.id
  );
  const nextRecentStudyList = [normalizeStudy(study), ...filteredStudyList].slice(
    0,
    3
  );

  localStorage.setItem(RECENT_STUDY_LIST_KEY, JSON.stringify(nextRecentStudyList));
};
