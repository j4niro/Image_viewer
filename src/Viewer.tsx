import { useAppSelector } from './storeHooks/storeHooks';
import type { RootState } from './stores/store';
import './Viewer.css'
import { useSelector } from 'react-redux'

// Composant Viewer pour afficher l'image actuelle avec le niveau de zoom

function Viewer() {
  const currentImageIndex = useAppSelector((state: RootState) => state.viewer.currentImageIndex); // Récupère l'index de l'image actuelle depuis le store
  const image = useAppSelector((state: RootState) => state.viewer.imageList[state.viewer.currentImageIndex]); // Récupère l'URL de l'image actuelle depuis le store
  const zoom = useAppSelector((state : RootState) => state.viewer.zoomLevel[currentImageIndex] || 100); // Récupère le niveau de zoom pour l'image actuelle depuis le store


  return (
    <div className="viewer">
      <img src={image} alt="Viewer" style={{zoom : `${zoom}%`}} />
    </div>
  )
}

export default Viewer