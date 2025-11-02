import { useAppSelector } from './storeHooks/storeHooks';
import type { RootState } from './stores/store';
import './Viewer.css'
import { useSelector } from 'react-redux'

function Viewer() {
  const currentImageIndex = useAppSelector((state: RootState) => state.viewer.currentImageIndex);
  const image = useAppSelector((state: RootState) => state.viewer.imageList[state.viewer.currentImageIndex]);
  const zoom = useAppSelector((state : RootState) => state.viewer.zoomLevel[currentImageIndex] || 100);


  return (
    <div className="viewer">
      <img src={image} alt="Viewer" style={{zoom : `${zoom}%`}} />
    </div>
  )
}

export default Viewer