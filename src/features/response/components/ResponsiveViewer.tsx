/**
 * ResponsiveViewer Component
 * --
 * 작성자 - kedd
 * 작성일 - 2026 02 22 일요일
 * 마지막 수정일 - 2026 02 22 일요일
 */
import React from 'react';

export interface ResponsiveViewerProps {
  isLoading: boolean;
  data: any;
  error: any;
}
const ResponsiveViewer: React.FC<ResponsiveViewerProps> = (props) => {
  /**
   * SECTION - Props
   */
  const { isLoading, data, error } = props;
  /**!SECTION - Props */

  /**
   * SECTION - Init
   */

  /**!SECTION - Init */

  /**
   * SECTION - Route
   */

  /**!SECTION - Route */

  /**
   * SECTION - Variables
   */

  /**!SECTION - Variables */

  /**
   * SECTION - Hooks
   */

  /**!SECTION - Hooks */

  /**
   * SECTION - Query Data
   */

  /**!SECTION - Query Data */

  /**
   * SECTION - Mutates
   */

  /**!SECTION - Mutates */

  /**
   * SECTION - States
   */

  /**!SECTION - States */

  /**
   * SECTION - Function
   */

  /**!SECTION - Function */

  /**
   * SECTION - Memos
   */

  /**!SECTION - Memos */

  /**
   * SECTION - Effects
   */

  /**!SECTION - Effects */

  /**
   * SECTION - Render
   */
  if (isLoading) {
    return (
      <div
        /* Tailwind CSS 설명:
          - w-full: 너비를 100%로 설정
          - max-w-4xl: 최대 너비를 4xl로 설정
          - mx-auto: 좌우 마진을 자동으로 설정하여 가운데 정렬
          - mt-8: 위쪽 마진을 8로 설정
          - p-8: 안쪽 여백을 8로 설정
          - border: 테두리를 설정
          - rounded-md: 모서리를 둥글게 설정
          - bg-white: 배경색을 흰색으로 설정
          - flex: flexbox 레이아웃 사용
          - justify-center: 가로축을 기준으로 가운데 정렬
          - items-center: 세로축을 기준으로 가운데 정렬
          - h-48: 높이를 48로 설정
        */
        className='w-full max-w-4xl mx-auto mt-8 p-8 border rounded-md bg-white flex justify-center items-center h-48'
      >
        <span className='text-gray-500 animate-pulse'>
          서버로 요청을 보내는 중...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full max-w-4xl mx-auto mt-8 p-6 border border-red-300 rounded-md bg-red-50 text-red-700'>
        <h3 className='font-bold text-lg mb-2'>요청 실패 (Error)</h3>
        <pre className='text-sm overflow-auto'>{error.message}</pre>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className='w-full max-w-4xl mx-auto mt-8 border rounded-md overflow-hidden bg-white shadow-sm'>
      {/* 상단: 상태 코드와 시간 */}
      <div
        /* Tailwind CSS 설명:
          - flex: flexbox 레이아웃 사용
          - items-center: 세로축을 기준으로 가운데 정렬
          - gap-4: 요소 간 간격을 4로 설정
          - bg-gray-100: 배경색을 회색으로 설정
          - p-4: 안쪽 여백을 4로 설정
          - border-b: 아래쪽 테두리를 설정
        */
        className='flex items-center gap-4 bg-gray-100 p-4 border-b'
      >
        <span className='font-semibold text-gray-700'>Status:</span>
        {/* 상태 코드가 200번대면 초록색, 아니면 빨간색으로 표시 */}
        <span
          className={`font-bold ${data.status >= 200 && data.status < 300 ? 'text-green-600' : 'text-red-600'}`}
        >
          {data.status} {data.statusText}
        </span>
        <span className='text-gray-400'>|</span>
        <span className='font-semibold text-gray-700'>Time:</span>
        <span className='text-blue-600 font-bold'>{data.time} ms</span>
      </div>

      {/* 하단: JSON 응답 결과 */}
      <div className='p-4 bg-gray-900 text-green-400 font-mono text-sm overflow-auto max-h-[400px]'>
        <pre>{JSON.stringify(data.data, null, 2)}</pre>
      </div>
    </div>
  );
  /**!SECTION - Render */
};

export default ResponsiveViewer;
