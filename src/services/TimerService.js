export const getTimer = async (studyId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/timers/${studyId}`);
    const { data } = await response.json();

    return data.timer;
  } catch (error) {
    console.error(error);
  }
};

export const createTimer = async (studyId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/timers/${studyId}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' } },
    );
    if (!response.ok) {
      throw new Error('데이터 응답에 실패했습니다');
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateTargetDuration = async (studyId, targetDuration) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/timers/${studyId}/target-duration`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetDuration,
        }),
      },
    );
    if (!response.ok) {
      throw new Error('데이터 응답에 실패했습니다');
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateStart = async (studyId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/timers/${studyId}/start`,
      { method: 'PATCH', headers: { 'Content-Type': 'application/json' } },
    );
    if (!response.ok) {
      throw new Error('데이터 응답에 실패했습니다');
    }
  } catch (error) {
    console.error(error);
  }
};

export const updatePause = async (studyId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/timers/${studyId}/pause`,
      { method: 'PATCH', headers: { 'Content-Type': 'application/json' } },
    );
    if (!response.ok) {
      throw new Error('데이터 응답에 실패했습니다');
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateReset = async (studyId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/timers/${studyId}/reset`,
      { method: 'PATCH', headers: { 'Content-Type': 'application/json' } },
    );
    if (!response.ok) {
      throw new Error('데이터 응답에 실패했습니다');
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateElapsedTime = async (studyId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/timers/${studyId}/elapsed-time`,
      { method: 'PATCH', headers: { 'Content-Type': 'application/json' } },
    );
    if (!response.ok) {
      throw new Error('데이터 응답에 실패했습니다');
    }
  } catch (error) {
    console.error(error);
  }
};
