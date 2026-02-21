import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 창을 왔다 갔다 할 때마다 재요청하는 기능 끄기
      retry: false, // 실패 시 재시도 끄기
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
