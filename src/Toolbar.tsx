import './Toolbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { firstImage, lastImage, nextImage, previousImage, setZoomLevel } from './slices/slice';
import InfoView from './InfoView';
import { useState } from 'react';

function Toolbar() {

  const currentImageIndex =  useSelector((state : any) => state.viewer.currentImageIndex);
  const imageList = useSelector((state: any) => state.viewer.imageList);
  const zoom = useSelector((state : any) => state.viewer.zoomLevel[currentImageIndex] || 100);

  const dispatch = useDispatch();

  const [showInfo, setShowInfo] = useState(false);

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