/**
 * 앱 진입점 (Providers를 감싸는 곳)
 * --
 */
import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='text-center space-y-4'>
        <h1 className='text-3xl font-bold text-gray-800'>Mini Postman</h1>
        <Button onClick={() => alert('작동 확인')}>1. API</Button>
      </div>
    </div>
  );
};

export default App;
