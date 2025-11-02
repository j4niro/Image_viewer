import './InfoView.css'
import { useSelector } from 'react-redux'
import type { RootState } from './stores/store';

function InfoView() {
  const currentImageIndex = useSelector((state: RootState) => state.viewer.currentImageIndex);
  const zoom = useSelector((state: RootState) => state.viewer.zoomLevel[currentImageIndex] || 100);
  const imageList = useSelector((state: RootState) => state.viewer.imageList);

  return (
    <div className="info-view">
      <p>Image detailed Informations</p>
      <p>Current Zoom Level: {zoom}%</p>
      <p>Current Image Index: {currentImageIndex}</p>
      <p>Current Image: {imageList[currentImageIndex]}</p>
    </div>
  )
}

export default InfoView