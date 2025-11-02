import './ThumbnailViewer.css'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveThumbnail } from './slices/slice';
import type { RootState } from './stores/store';
import { useAppDispatch, useAppSelector } from './storeHooks/storeHooks';

// Composant ThumbnailViewer pour afficher les miniatures des images et gérer la sélection

function ThumbnailViewer() {

  const dispatch = useAppDispatch();
  const imageList = useAppSelector((state: RootState) => state.viewer.imageList); // Récupère la liste des images depuis le store
  const activeThumbnail = useAppSelector((state: RootState) => state.viewer.activeThumbnail); // Récupère l'index de la miniature active depuis le store

// Gestion du clic sur une miniature pour la sélectionner

  const handleThumbnailClick = (index: number) => {
    dispatch(setActiveThumbnail(index));
  };

// Rendu des miniatures avec gestion de la sélection
  return (
    <div className="thumbnailViewer">
      {imageList.map((image, index) => (
        <div key={index} className={`thumbnail-item ${activeThumbnail === index ? 'active' : ''}`} 
        onClick={() => handleThumbnailClick(index)}>
          <img src={image} alt={`Image ${index + 1}`} height={120} width={120}/>
          <span className="thumbnail-label">{`Image ${index + 1}`}</span>
        </div>
      ))}
    </div>
  )
}

export default ThumbnailViewer