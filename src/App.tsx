import './App.css'
import InfoView from './InfoView'
import ThumbnailViewer from './ThumbnailViewer'
import Toolbar from './Toolbar'
import Viewer from './Viewer'


function App() {

  return (
    <>
      <ThumbnailViewer />
      <div className="main-div">
        <Toolbar />
        <div className='viewer-div'>
          <Viewer />
          <InfoView />
        </div>
      </div>
      </>
  )
}

export default App

