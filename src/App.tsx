/**
 * 앱 진입점 (Providers를 감싸는 곳)
 * --
 */
// Store
import { useRequestStore } from './store/useRequestStore';
// Components
import RequestForm from '@/features/request/components/RequestForm';

const App = () => {
  // Zustand 스토어에서 현재 저장된 데이터를 꺼내옴
  const requestData = useRequestStore((state) => state.requestData);

  return (
    <div
      /* Tailwind CSS 설명:
        - flex: flexbox 레이아웃 사용
        - h-screen: 화면 전체 높이 사용
        - items-center: 세로축 정렬 (가운데)
        - justify-center: 가로축 정렬 (가운데)
        - bg-gray-100: 배경색을 연한 회색으로 설정
      */
      className='flex h-screen items-center justify-center bg-gray-100'
    >
      <div className='text-center space-y-4'>
        <h1 className='text-3xl font-bold text-gray-800'>Mini Postman</h1>

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
          <RequestForm />
        </div>

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
