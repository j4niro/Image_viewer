import type { RootState } from './stores/store';
import './Viewer.css'
import { useSelector } from 'react-redux'

function Viewer() {
  const image = useSelector((state: RootState) => state.viewer.imageList[state.viewer.currentImageIndex]);


  return (
    <div className="viewer">
      <img src={image} alt="Viewer" />
    </div>
  )
}

export default Viewer