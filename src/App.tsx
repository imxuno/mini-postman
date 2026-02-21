/**
 * 앱 진입점 (Providers를 감싸는 곳)
 * --
 */
import RequestForm from '@/features/request/components/RequestForm';

const App = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='text-center space-y-4'>
        <h1 className='text-3xl font-bold text-gray-800'>Mini Postman</h1>

        {/* RequestForm */}
        <div className='bg-white p-6 rounded-lg shadow-sm border'>
          <RequestForm />
        </div>
      </div>
    </div>
  );
};

export default App;
