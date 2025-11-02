import './InfoView.css'
import { useSelector } from 'react-redux'
import type { RootState } from './stores/store';
import { useAppSelector } from './storeHooks/storeHooks';

// Composant InfoView pour afficher les informations détaillées de l'image actuelle

function InfoView() {
  const currentImageIndex = useAppSelector((state: RootState) => state.viewer.currentImageIndex); // Récupère l'index de l'image actuelle depuis le store
  const zoom = useAppSelector((state: RootState) => state.viewer.zoomLevel[currentImageIndex] || 100); // Récupère le niveau de zoom pour l'image actuelle depuis le store
  const imageList = useAppSelector((state: RootState) => state.viewer.imageList); // Récupère la liste des images depuis le store

// Rendu des informations détaillées de l'image actuelle
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