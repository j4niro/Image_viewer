import './Toolbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { firstImage, lastImage, nextImage, previousImage, setZoomLevel } from './slices/slice';
import InfoView from './InfoView';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './storeHooks/storeHooks';

// Composant Toolbar pour la navigation et le contrôle du zoom

function Toolbar() {

  const currentImageIndex =  useAppSelector((state : any) => state.viewer.currentImageIndex); // Récupère l'index de l'image actuelle depuis le store
  const imageList = useAppSelector((state: any) => state.viewer.imageList); // Récupère la liste des images depuis le store
  const zoom = useAppSelector((state : any) => state.viewer.zoomLevel[currentImageIndex] || 100); // Récupère le niveau de zoom pour l'image actuelle depuis le store

  const dispatch = useAppDispatch();

  // État local pour afficher ou masquer le panneau d'informations
  const [showInfo, setShowInfo] = useState(false);

  // Gestion des actions de navigation
  function handleFirst() {
    dispatch(firstImage());
  }

  function handlePrevious() {
    dispatch(previousImage());
  }

  function handleNext() {
    dispatch(nextImage());
  }

  function handleLast() {
    dispatch(lastImage());
  }
  function handleZoomChange(event: React.ChangeEvent<HTMLInputElement>) {
    const zoomLevel = Number(event.target.value);
    dispatch(setZoomLevel({ index: currentImageIndex, zoom: zoomLevel }));
  }

  // Rendu de la barre d'outils avec les boutons de navigation, le contrôle du zoom et le panneau d'informations
  return (
    <div className="toolbar">
        <div className="spacer">
            <div className="buttonbar">
                <button onClick={handleFirst} disabled={currentImageIndex === 0}><img src="icon/first.png" alt="First"/></button>
                <button onClick={handlePrevious} disabled={currentImageIndex === 0}><img src="icon/previous.png" alt="Previous" /></button>
                <button onClick={handleNext} disabled={currentImageIndex === imageList.length - 1}><img src="icon/next.png" alt="Next" /></button>
                <button onClick={handleLast} disabled={currentImageIndex === imageList.length - 1}><img src="icon/last.png" alt="Last" /></button>
                <fieldset className="zoom-slider">
                    <legend>Zoom</legend>
                    <input type="range" min="1" max="300" defaultValue="100" value={zoom} onChange={handleZoomChange} />
                </fieldset>
            </div>
        </div>
        <label style={{color : "black"}}>{imageList[currentImageIndex]}</label>
        <button><img src="icon/details.png" alt="Details" onClick = {() => setShowInfo(!showInfo)} /></button>
        {showInfo && <InfoView />}
    </div>
  )
}

export default Toolbar