import instance from "../axiosApi";

const BASE_URL = "/interview";

export const getInterviewList = async (page, size, memberNo) => {
  try {
    const response = await instance.get(`${BASE_URL}/list?page=${page}&size=${size}&memberNo=${memberNo}`);
    return response.data;
  } catch (error) {
    console.error("면접 리스트 가져오기 실패", error);
    throw error;
  }
};

export const getInterview = async (itvNo) => {
  try {
    const response = await instance.get(BASE_URL + "/" + itvNo);
    return response.data;
  } catch (error) {
    console.error("면접 가져오기 실패", error);
    throw error;
  }
};

export const getInterviewScore = async () => {
  try {
    const response = await instance.get(BASE_URL + "/score");
    return response;
  } catch (error) {
    console.error("면접 총점수 가져오기 실패", error);
    throw error;
  }
};

export const totalVoice = async (itvNo) => {
  try {
    console.log(itvNo)
    const response = await instance.get(BASE_URL + "/totalVoice", {params: { itvNo: itvNo }});
    return response.data;
  } catch (error) {
    console.error(" 분석결과점수 불러오기 실패", error);
    throw error;
  }
}
export const deleteInterview = async (itvNo) => {
  try {
    console.log(itvNo);
    const res = instance.delete(BASE_URL + "/list", {params: {itvNo}});
    return res
  } catch (error) {
    console.error("면접삭제 실패", error);
    console.debug("에러 위치>>");
  }
};

export const addInterview = async (memberNo, title, info) => {
  try {
    console.log("res::::", info);
    const response = await instance.get(`${BASE_URL}?memberNo=${memberNo}&title=${title}&category=${info}`);
    console.log("response::", response);
    return response;
  } catch (error) {
    console.error("인터뷰 추가 실패", error);
  }
};

export const analsisText = async (score, itvNo) => {
  try {
    console.log(score, itvNo);
    const res = instance.get(BASE_URL + "/analysis", {  params: { score: score, itvNo:itvNo }});
    return res
  } catch (error) {
    console.error("면접분석멘트 조회성공", error);
    
  }
};
