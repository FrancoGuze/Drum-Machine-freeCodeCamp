import { useEffect } from "react"
import PropTypes from 'prop-types'
import './DrumKey.css'

export const DrumKey = ({ url1, keyName, id }) => {

    useEffect(() => {
        const handlekeyPress = (event) => {
            if (event.key.toLowerCase() === keyName.toLowerCase()) {
                play()
            }

        }
        window.addEventListener('keydown', handlekeyPress)
        return () => {
            window.removeEventListener('keydown', handlekeyPress)
        }
    })

    const play = () => {
        const pad = document.getElementById(id)
        pad.classList.add('actived')
        setTimeout(() => pad.classList.remove('actived'), 100)

        pad.children[0].volume = document.getElementById('volume').value / 100
        
        
        
        pad.children[0].play()
        const displayText = id.replace(/-/g, ' ')
        document.getElementById('display').textContent = displayText;

    }




    return (
        <button id={id} onClick={play} style={{width:'100px',height:'100px'}} className="drum-pad btn btn-danger d-inline-block rounded-3">
            <audio src={url1} className="clip" id={keyName}></audio>
            {keyName}
        </button>
    )
}
DrumKey.propTypes = {
    url1: PropTypes.string,
    keyName: PropTypes.string,
    id: PropTypes.string
}