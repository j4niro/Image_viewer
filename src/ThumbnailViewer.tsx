import './ThumbnailViewer.css'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveThumbnail } from './slices/slice';
import type { RootState } from './stores/store';
import { useAppDispatch, useAppSelector } from './storeHooks/storeHooks';


function ThumbnailViewer() {

  const dispatch = useAppDispatch();
  const imageList = useAppSelector((state: RootState) => state.viewer.imageList);
  const activeThumbnail = useAppSelector((state: RootState) => state.viewer.activeThumbnail);

  const handleThumbnailClick = (index: number) => {
    dispatch(setActiveThumbnail(index));
  };


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