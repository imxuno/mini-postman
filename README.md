# Mini Postman

## 설치 패키지

- zustand
- @tanstack/react-query
- @tanstack/react-router
- react-hook-form
- @hookform/resolvers
- zod
- axios

## 의존 패키지

- types/node
- tailwindcss@3
- postcss
- autoprefixer

## Tailwind CSS 설치

```bash
npx tailwindcss init
```

## shadcn 설치

```bash
npx shadcn@latest init
```

## shadcn 컴포넌트 설치

```bash
npx shadcn@latest add [컴포넌트명]
```

## React Hook Form + Zod

```plaintext
- React Hook Form
  : 입력할 때 렌더링을 일으키지 않고, 마지막에 '제출(Submit)' 버튼을 누를 때만 데이터를 뽑아옴
- Zod
  : 폼 데이터의 유효성을 검사하는 라이브러리
  : 예) URL은 반드시 http:// 또는 https://로 시작, Empty 금지
```
