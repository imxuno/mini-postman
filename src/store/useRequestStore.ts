import { create } from 'zustand';
import type { RequestSchemaType } from '@/features/request/schemas/requestSchema';

/**
 * 전역으로 관리할 상태(State)와 함수(Action)들의 타입을 정의
 */
interface RequestStore {
  // 상태 (State): 폼에서 입력받은 데이터를 보관할 변수
  requestData: RequestSchemaType | null;

  // 액션 (Action): 데이터를 스토어에 저장하는 함수
  setRequestData: (data: RequestSchemaType) => void;

  // 액션 (Action): 스토어를 초기화(리셋)하는 함수
  clearRequestData: () => void;
}

/**
 * Zustand 스토어 생성
 * - create 훅을 사용하여 상태와 액션을 하나로 묶어줌
 * - set 함수를 통해 상태를 안전하게 변경할 수 있음
 */
export const useRequestStore = create<RequestStore>((set) => ({
  requestData: null, // 초기값은 빈 상태 (null)

  // 데이터를 받아서 state의 requestData를 덮어씌움
  setRequestData: (data) => set({ requestData: data }),

  // 상태를 다시 null로 돌려놓음
  clearRequestData: () => set({ requestData: null }),
}));
