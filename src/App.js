import './App.css';
import Alert from './components/alert/Alert';
import Info from './components/info/Info';
import Input from './components/input/Input';
import ProgressBar from './components/progressBar/ProgressBar';

function App() {

  return (
    <>
      <ProgressBar />
      <Alert/>
      <div className='container pt-5'>
        <h2 className='mb-5 text-center'>Zip Code Info App</h2>

        <Input />
        <Info />
      </div>
    </>
  );
}

export default App;
