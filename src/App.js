import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Channel from './Links/Channel'
import Groups from './Links/Groups'
import Message from './Links/Message'
import Tops from './Links/Tops'

function App() {
  return (
    <Routes>
        <Route path="/Tops" element={<Tops />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Channel" element={<Channel />} />
    </Routes>
  );
}

export default App