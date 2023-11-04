import './App.css';
import Info from './components/info/Info';
import Input from './components/input/Input';
import ProgressBar from './components/progressBar/ProgressBar';

function App() {
  return (
    <>
      <ProgressBar />

      <div className='container col-xl-8 pt-5'>
        <h2 className='mb-4 text-center'>Zip Code Info App</h2>

        <Input />
        <Info />
      </div>
    </>
  );
}

export default App;
