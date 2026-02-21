/**
 * Request 데이터 규칙
 * --
 */
import { z } from 'zod';

// 수신 데이터의 규칙을 정의
export const requestSchema = z.object({
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
  url: z
    .string()
    .min(1, { message: 'URL을 입력해주세요.' }) // 빈칸 방지
    .url({ message: '올바른 URL 형식이 압니다. (예: https://...' }), // URL 형식 강제
});

// 이 스키마를 바탕으로 TypeScript의 Type을 자동 생성 (타입 중복 선언 방지)
export type RequestSchemaType = z.infer<typeof requestSchema>;

// 이를 통해 'if (url.includes('http'))' 같은 코드를 작성하지 않아도,
// TypeScript가 자동으로 URL 형식을 검사해줌
