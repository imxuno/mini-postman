/**
 * 앱 진입점 (Providers를 감싸는 곳)
 * --
 */
// Hooks
import { useSendRequest } from '@/features/request/hooks';
// Store
import { useRequestStore } from './store';
// Components
import { RequestForm } from '@/features/request/components';
import { ResponsiveViewer } from '@/features/response/components';

const App = () => {
  /* Zustand 스토어에서 현재 저장된 데이터를 꺼내옴 */
  const requestData = useRequestStore((state) => state.requestData);

  /* useSendRequest 훅을 사용하여 API 요청을 보냄 */
  // mutate: API 요청을 보내는 함수 (실행 함수)
  // isPending: API 요청 중인지 여부 (로딩 상태)
  // data: API 요청 성공 시 응답 데이터 (성공 결과)
  // error: API 요청 실패 시 에러 정보 (실패 결과))
  const { mutate: sendRequest, isPending, data, error } = useSendRequest();

  return (
    <div
      /* Tailwind CSS 설명:
        - min-h-screen: 최소 화면 높이를 화면 전체 높이로 설정
        - bg-gray-50: 배경색을 연한 회색으로 설정
        - p-8: 내부 여백을 8만큼 설정
        - flex: flexbox 레이아웃 사용
        - flex-col: 세로 방향으로 자식 요소 배치
        - items-center: 자식 요소들을 가로축(세로 방향이므로 가로축) 정렬 (가운데)
      */
      className='min-h-screen bg-gray-50 p-8 flex flex-col items-center'
    >
      <div
        /* Tailwind CSS 설명:
          - w-full: 너비를 화면 전체 너비로 설정
          - max-w-5xl: 최대 너비를 5xl(약 1152px)로 설정
          - space-y-8: 자식 요소들 간의 수직 간격을 8만큼 설정
        */
        className='w-full max-w-5xl space-y-8'
      >
        <h1 className='text-3xl font-bold text-gray-900'>Mini Postman</h1>

        {/* RequestForm */}
        <div
          /* Tailwind CSS 설명:
            - bg-white: 배경색을 흰색으로 설정
            - p-6: 내부 여백을 6만큼 설정
            - rounded-lg: 모서리를 둥글게 설정
            - shadow-sm: 그림자를 작게 설정
            - border: 테두리를 설정
          */
          className='bg-white p-6 rounded-lg shadow-sm border'
        >
          {/* RequestForm에 통신 실행 함수(sendRequest)와 로딩 상태(isPending)을 넘겨줌 */}
          {/* (참고: RequestForm.tsx의 onSubmit 내부에 props.sendRequest(data)를 호출하도록 수정했음) */}
          <RequestForm onSubmitAction={sendRequest} isLoading={isPending} />
        </div>

        {/* 결과창 렌더링 */}
        <ResponsiveViewer isLoading={isPending} data={data} error={error} />

        {/* Zustand 스토어에 저장된 데이터를 확인하기 위한 임시 영역 */}
        {requestData && (
          <div
            /* Tailwind CSS 설명:
              - bg-gray-800: 배경색을 짙은 회색으로 설정
              - text-green-400: 텍스트 색상을 연한 녹색으로 설정
              - p-4: 내부 여백을 4만큼 설정
              - rounded-lg: 모서리를 둥글게 설정
              - font-mono: 고정폭 글꼴(Monospace) 사용
              - text-sm: 텍스트 크기를 작게 설정
              - overflow-auto: 내용이 넘칠 경우 스크롤바 표시
            */
            className='bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto'
          >
            <h3>현재 Zustand 스토어에 저장된 데이터:</h3>
            <pre>{JSON.stringify(requestData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
