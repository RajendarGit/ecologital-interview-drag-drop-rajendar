import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Lists } from './Lists'
import { useDrop } from 'react-dnd'

const ListItems = [
    {
        id: 1,
        name: 'Item 1',
        desc: 'Item 1 - Lorem Ipsum',
    },
    {
        id: 2,
        name: 'Item 2',
        desc: 'Item 2 - Lorem Ipsum',
    },
    {
        id: 3,
        name: 'Item 3',
        desc: 'Item 3 - Lorem Ipsum',
    },
]

export const DragDrop = () => {

    const [board, setBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'list',
        drop: (item) => addListToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addListToBoard = (id) => {
        const listSetItems = ListItems.filter((items) => id === items.id);
        setBoard((board) => [...board, listSetItems[0]])
    }

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Card>
            {ListItems.map((items) => {
                return <Lists name={items.name} desc={items.desc} id={items.id}/>
            })}
        </Card>
        <Card sx={{padding: '2rem', width: '300px'}} ref={drop}>
            <Typography variant="h4" sx={{textAlign: 'center', marginBottom: '2rem'}}>Drop Here</Typography>
            {board.map((items) => {
                return <Lists name={items.name} desc={items.desc} id={items.id}/>
            })}
        </Card>
    </Box>
  )
}
