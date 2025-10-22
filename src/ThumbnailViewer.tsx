import './ThumbnailViewer.css'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveThumbnail } from './slices/slice';
import type { RootState } from './stores/store';

function ThumbnailViewer() {

  const dispatch = useDispatch();
  const imageList = useSelector((state: RootState) => state.viewer.imageList);
  const activeThumbnail = useSelector((state: RootState) => state.viewer.activeThumbnail);

  const handleThumbnailClick = (index: number) => {
    dispatch(setActiveThumbnail(index));
  };


  return (
    <div className="thumbnailViewer">
      {imageList.map((image, index) => (
        <div key={index} className='thumbnail-item' onClick={() => handleThumbnailClick(index)} style={{ border: activeThumbnail === index ? '2px solid blue' : '2px solid transparent' }}>
          <img src={image} alt={`Image ${index + 1}`} height={120} width={120}/>
          {`Image ${index + 1}`}
        </div>
      ))}
    </div>
  )
}

export default ThumbnailViewer