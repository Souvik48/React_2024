import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
  return (
    <>
      <h1 className='text-3xl bg-violet-500 p-3 rounded-md'>
        Vite with Tailwind
      </h1>
      <Card username = "Souvik" role='SDE,Fin'/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
