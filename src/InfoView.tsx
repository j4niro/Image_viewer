import './InfoView.css'
import { useSelector } from 'react-redux'
import type { RootState } from './stores/store';
import { useAppSelector } from './storeHooks/storeHooks';

function InfoView() {
  const currentImageIndex = useAppSelector((state: RootState) => state.viewer.currentImageIndex);
  const zoom = useAppSelector((state: RootState) => state.viewer.zoomLevel[currentImageIndex] || 100);
  const imageList = useAppSelector((state: RootState) => state.viewer.imageList);

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