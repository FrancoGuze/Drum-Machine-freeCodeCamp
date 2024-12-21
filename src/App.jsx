import './app.css'
import { DrumKey } from './DrumKey'
import { Alert } from 'react-bootstrap'
function App() {





  return (
      
        <main id='drum-machine' className='col-xl-5 mx-auto bg-main rounded-4 px-3 py-2'>
       
       <h3 className='text-light'>Drum Machine</h3>
        <div className="row justify-content-around">
          <div className="col-8 my-2 ">
            <div className="row gap-1 justify-content-center">
              <DrumKey keyName='Q' id='Heater-1' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' />
              <DrumKey keyName='W' id='Heater-2' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' />
              <DrumKey keyName='E' id='Heater-3' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' />
            </div>
            <div className="row gap-1 my-1 justify-content-center">
            <DrumKey keyName='A' id='Heater-4' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' />
            <DrumKey keyName='S' id='Clap' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' />
            <DrumKey keyName='D' id='Open-HH' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' />
            </div>
            <div className="row gap-1 justify-content-center">
            <DrumKey keyName='Z' id="Kick-n'-Hat" url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' />
            <DrumKey keyName='X' id='Kick' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' />
            <DrumKey keyName='C' id='Closed-HH' url1='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' />
            </div>
           
            </div>
      
           <div className="col my-auto">
            <div className="row w-75 mb-5 mx-auto">
           <div id="display" className=' px-2 rounded bg-light'> </div>

            </div>
            <div className="row mx-auto w-75">
            <label htmlFor="volume" className='text-light p-0 mb-1'>Volumen</label>
            <input id="volume" type="range" />
            </div>
           
           </div>
            
            </div>
        </main>
    
  )
}

export default App
