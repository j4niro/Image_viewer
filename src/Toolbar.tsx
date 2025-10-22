import './Toolbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { firstImage, lastImage, nextImage, previousImage } from './slices/slice';

function Toolbar() {

  const currentImageIndex =  useSelector((state : any) => state.viewer.currentImageIndex);
  const imageList = useSelector((state: any) => state.viewer.imageList);

  const dispatch = useDispatch();

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
                    <input type="range" min="1" max="300" defaultValue="100" />
                </fieldset>
            </div>
        </div>
        <label style={{color : "black"}}>{imageList[currentImageIndex]}</label>
        <button><img src="icon/details.png" alt="Details" /></button>
    </div>
  )
}

export default Toolbar