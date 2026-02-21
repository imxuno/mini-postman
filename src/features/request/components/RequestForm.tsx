/**
 * RequestForm Component
 * --
 * 작성자 - keddmon
 * 작성일 - 2026 02 21 토요일
 * 마지막 수정일 - 2026 02 21 토요일
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// Schemas
import { requestSchema } from '../schemas/requestSchema';
import type { RequestSchemaType } from '../schemas/requestSchema';
// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

export interface RequestFormProps {
  [key: string]: any;
}
const RequestForm: React.FC<RequestFormProps> = (props) => {
  /**
   * SECTION - Props
   */
  const {} = props;
  /**!SECTION - Props */

  /**
   * SECTION - Init
   */
  /**
   * [React Hook Form (RHF) + Zod 엔진 초기화]
   * --
   * - useForm: RHF의 핵심 훅. 폼의 상태, 에러, 제출 등을 관리
   * - <RequestSchemaType>: 타입스크립트에게 "이 폼은 이 Zod 스키마 타입대로 생김"라고 알려줌
   * - resolver: RHF는 원래 자체적인 검증 규칙을 쓰지만, zodResolver를 끼워 넣으면
   *             "검증은 Zod(requestSchema) 네가 대신 해줘" 하고 외주를 맡기게 됨
   */
  /* RHF 엔진 장착 (resolver에 만들어둔 Zod 규칙을 물려줌) */
  const {
    register,
    /* register: HTML의 <input>에 이름(name), onChange, onBlur, ref 등을
                일일이 달아주지 않아도, { ...register("필드명")} 하나만 쓰면 RHF가 알아서
                입력값을 추적하게 해줌. (비제어 컴포넌트 방식으로 렌더링 최적화)
    */
    handleSubmit,
    /* handleSubmit: form의 onSubmit 이벤트에 들어가는 래퍼(Wrapper) 함수.
                    사용자가 버튼을 누르면 → Zod 검증을 먼저 싹 돌리고 → 통과하면 우리가
                    만든 함수(아래의 onSubmit)을 실행시켜 줌
    */
    formState: { errors },
    /*
      errors: Zod에서 정의한 에러 메시지("URL을 입력해주세요")가 실시간으로 담기는 객체
    */
  } = useForm<RequestSchemaType>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      method: 'GET',
      url: '',
    },
  });
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
  /* 유효성 검사를 통과했을 때만 실행되는 순수 로직 */
  const onSubmit = (data: RequestSchemaType) => {
    // 여기서 data는 Zod의 검사를 모두 통과한, 100% 안전한 데이터
    console.log('검증 완료된 데이터: ', data);
    alert(
      `[${data.method}] ${data.url} 로 요청을 보낼 준비 완료!\nBody 데이터: ${data.body || '없음'}`,
    );
  };
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
  return (
    // handleSubmit이 Zod 검사를 먼저 돌리고, 통과하면 onSubmit을 실행
    <form
      onSubmit={handleSubmit(onSubmit)}
      /* Tailwind CSS 설명:
          - flex: display: flex; (내부 요소들을 가로로 배치)
          - flex-col: flex-direction: column;
          - space-y-6: 요소들 사이의 세로 여백을 24px(1.5rem)로 설정 (margin-top 남발 방지)
          - w-full: width: 100%; (부모 너비만큼 꽉 채움)
          - max-w-4xl: max-width: 56rem; (최대 너비를 896px로 제한하여 너무 안 퍼지게 함)
          - mx-auto: margin-left/right: auto; (가운데 정렬)
      */
      className='flex flex-col space-y-6 w-full max-w-4xl mx-auto'
    >
      {/* 상단: Method와 URL 입력 영역 */}
      <div
        /* Tailwind CSS 설명:
          - items-start: align-items: flex-start; (내부 요소들을 세로 방향으로 위쪽 정렬)
          - gap-2: gap: 0.5rem; (내부 요소들 사이의 간격을 8px로 설정)
          - w-full: width: 100%; (부모 너비만큼 꽉 채움)
        */
        className='flex items-start gap-2 w-full'
      >
        <select
          {...register('method')}
          /* Tailwind CSS 설명:
            - h-10: height: 2.5rem; (높이 40px)
            - px-3 py-2: padding-left/right 12px, padding-top/bottom 8px
            - bg-white: background-color: white;
            - border border-gray-300: 1px 실선 테두리, 색상은 옅은 회색
            - rounded-md: border-radius: 0.375rem; (모서리 살짝 둥글게)
            - focus:outline-none: 클릭(포커스)했을 때 브라우저 기본 파란 테두리 제거
            - focus:ring-2 focus:ring-black: 클릭 시 검은색 그림자 테두리 2px 추가 (세련된 포커스 효과)
          */
          className='h-10 px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
        >
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>

        {/* URL 입력창 (에러 메시지 처리 포함) */}
        <div
          /* Tailwind CSS 설명:
            - flex-1: flex: 1 1 0%; (남은 가로 여백을 이 div가 모두 차지하도록 쫙 늘림)
            - relative: position: relative; (자식 요소 중 absolute를 쓸 녀석의 기준점이 됨. 여기선 에러 메시지용)
          */
          className='flex-1 relative'
        >
          <Input
            {...register('url')}
            placeholder='https://api.github.com/users/defunkt'
            className={errors.url ? 'border-red-500' : ''}
          />

          {/* Zod에서 정의한 에러 메시지가 여기에 자동으로 뜸 */}
          {errors.url && (
            <span
              /* Tailwind CSS 설명:
                - absolute: position: absolute; (정상 흐름에서 벗어나 부모(relative) 기준으로 위치 고정)
                - -bottom-6: bottom: -1.5rem; (아래쪽으로 24px 삐져나오게 위치시킴)
                - left-1: left: 0.25rem; (왼쪽에서 4px 띄움)
                - text-sm: font-size: 0.875rem; (글자 크기를 약간 작게)
                - text-red-500: color: (빨간색);
              */
              className='absolute -bottom-6 left-1 text-sm text-red-500'
            >
              {errors.url.message}
            </span>
          )}
        </div>

        <Button type='submit'>SEND</Button>
      </div>

      {/* 하단: Tabs를 이용한 상세 설정 영역 */}
      <Tabs
        defaultValue='params' // 처음 렌더링될 때 기본으로 열려있을 탭
        /* Tailwind CSS 설명:
          - w-full: width: 100%; (부모 너비만큼 꽉 채움)
          - border: border: 1px solid gray; (테두리 1px 실선)
          - rounded-md: border-radius: 0.375rem; (모서리 살짝 둥글게)
          - p-4: padding: 1rem; (내부 여백 16px)
          - bg-gray-50/50: background-color: gray-50 (50% 투명도); (배경색을 반투명한 회색으로)
        */
        className='w-full border rounded-md p-4 bg-gray-50/50'
      >
        <TabsList className='mb-4'>
          <TabsTrigger value='params'>Params</TabsTrigger>
          <TabsTrigger value='headers'>Headers</TabsTrigger>
          <TabsTrigger value='body'>Body</TabsTrigger>
        </TabsList>

        {/* TabsContent: 각 탭이 선택되었을 때 보여질 실제 화면들 */}
        <TabsContent value='params' className='text-sm text-gray-500'>
          <p>여기에 URL 쿼리 파라미터를 입력하는 UI가 들어갈 예정</p>
        </TabsContent>

        <TabsContent value='headers' className='text-sm text-gray-500'>
          <p>
            여기에 HTTP 헤더를 입력하는 UI가 들어갈 예정입니다. (예:
            Authorization: Bearer token...)
          </p>
        </TabsContent>

        <TabsContent value='body'>
          <Textarea
            {...register('body')}
            placeholder='{ "key": "value" } 형태의 JSON 데이터를 입력하세요.'
            /* Tailwind CSS 설명:
              - font-mono: font-family: monospace;
              - min-h-[200px]: 최소 높이를 200px로 고정 (임의값 사용 시 대괄호[] 사용)
              - resize-y: 세로 방향으로만 크기 조절 가능
             */
            className='font-mono min-h-[200px] resize-y'
          />
        </TabsContent>
      </Tabs>
    </form>
  );
  /**!SECTION - Render */
};

export default RequestForm;
