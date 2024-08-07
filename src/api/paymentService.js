// api/paymentService.js
import axios from "axios";

export const confirmPayment = async (paymentData) => {
  try {
    const response = await axios.post(
      "https://nain.pe.kr:9999/api/payment/confirm",
      paymentData
    );
    return response.data;
  } catch (error) {
    console.error("결제 확인 요청에 실패했습니다.", error);
    throw error;
  }
};

export default confirmPayment;
