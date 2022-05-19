import { Button } from './components/ui-kit'
import './sass/main.scss'

const App = () => {
  return (
    <div className="App">
      <Button 
        text='Aproval' 
        className='palette-success-400 dark-h' 
      />
       <Button 
        text='Aproval' 
        className='palette-primary-600 light-h' 
      />
      <span className='color-primary-600'>
        U!
      </span>
    </div>
  )
}

export default App
