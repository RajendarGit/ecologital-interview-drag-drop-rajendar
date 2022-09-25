import React from 'react'
import { Card, Typography } from '@mui/material'
import { useDrag } from 'react-dnd'


export const Lists = ({id, name, desc}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'list',
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
  return (
    <Card ref={drag} sx={{padding: '2rem', margin: '1rem'}} style={{border: isDragging ? '4px dashed red' : '0px'}}>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='body-2'>{desc}</Typography>
    </Card>
  )
}
