import { Container } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DragDrop } from './Components/DragDrop'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container sx={{backgroundColor: grey[200], padding: '5rem'}}>
        <DragDrop/>
      </Container>
    </DndProvider>
  )
}

export default App