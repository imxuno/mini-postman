/**
 * 서버로 HTTP 요청을 보내는 Custom Hook (useMutation 활용)
 */
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import type { RequestSchemaType } from '../schemas/requestSchema';

const useSendRequest = () => {
  return useMutation({
    // mutationFn: 실제로 비동기 작업을 수행하는 함수
    mutationFn: async (requestData: RequestSchemaType) => {
      // 통신 시작 시간 기록 (응답 시간 측정을 위해)
      const startTime = performance.now();

      // 만약 Body에 텍스트가 있다면 JSON으로 변환 시도
      let parsedBody = undefined;
      if (requestData.body) {
        try {
          parsedBody = JSON.parse(requestData.body);
        } catch (e) {
          throw new Error('Body 데이터가 올바른 JSON 형식이 아닙니다.: ' + e);
        }
      }

      // Axios를 이용해 실제 API 호출
      const response = await axios({
        method: requestData.method,
        url: requestData.url,
        data: parsedBody,
      });

      // 통신 종료 시간 기록
      const endTime = performance.now();

      // 성공 시 화면에 보여줄 응답 데이터 가공
      return {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
        headers: response.headers,
        time: Math.round(endTime - startTime),
      };
    },
    // 에러 발생 시 처리 (Axios 에러 가공)
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.error('API 요청 실패: ', error.response?.data || error.message);
      } else {
        console.error('알 수 없는 에러: ', error);
      }
    },
  });
};

export default useSendRequest;
