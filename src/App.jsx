import './App.css'
import Background from './components/Background';
import Foreground from './components/Foreground';
function App() {  

  return (
    <>
    <div className="fixed h-screen w-full">
      <Background /> 
      <Foreground></Foreground>     
    </div>
    </>
  )
}

export default App
