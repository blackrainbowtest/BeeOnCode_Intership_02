import { Box, Typography } from '@mui/material'
import AddProcess from 'components/AddProcess'
import Process from 'components/Process/Process'
import ProcessBar from 'components/ProcessBar'
import { memo } from 'react'
import styled from 'styled-components'


function ProcessComponent() {

    return (
        <MainContainer>
            <Typography variant='h5'>Процессы</Typography>
            <ProcessesContainer>
                <Process />
                <AddProcess />
            </ProcessesContainer>
            <ProcessBar />
        </MainContainer>
    )
}

export default memo(ProcessComponent)

const MainContainer = styled(Box)(({theme}) => ({
    minWidth: "100%",
    minHeight: "100vh",
    padding: theme.spacing(5),
    color: theme.palette.primary.text,
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
}))

const ProcessesContainer = styled(Box)(({theme}) => ({
    minWidth: "100%",
    minHeight: "150px",
    display: "flex",
    flexWrap: "nowrap",
}))