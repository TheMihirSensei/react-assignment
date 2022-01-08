import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import prod from "./../../svg/404.svg"
import "./style.css"


const PageNotFound = () => {
    return (
        <Container>
            <Box display='flex' height='100vh' justifyContent="center" flexDirection="column" gap={5} alignItems="center">
                <div>
                    <img src={prod} alt="" style={{ height: "100%", width: "100%" }} />
                </div>
                <div>
                    <Typography fontWeight={800} fontSize={24} color="gray">
                        No Page Found!!
                    </Typography>
                </div>
            </Box>
        </Container>
    )
}

export default PageNotFound
