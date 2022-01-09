import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import Line from './Line'
import CustomizedTables from './Table'
// import { Line } from "react-chartjs-2";


const ProfileView = () => {
    const product = useSelector(state => state.profileView.products)

    console.log(product)
    let Time = new Date(product.timestamps).toLocaleDateString()
    // console.log(Time)
    // Date()
    return (
        <div>
            <Container>
                <Box display="flex" gap={3}>
                    <Box minWidth={300}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                    <Box>


                        <Box display="flex" flexWrap="wrap" gap={4} justifyContent="space-evenly">
                            <Box width="100%" height="auto" color="black" fontWeight={700} textAlign="center"
                                p={5} bgcolor="white" sx={{ boxShadow: 3 }} >
                                <Box p={3} display="flex" gap={2}>
                                    <div style={{ width: 200, color: "blue" }}>Time </div> <div>{Time}</div>
                                </Box>
                                <Box p={3} display="flex" gap={2}>
                                    <div style={{ width: 200, color: "blue" }}>action </div> <div>{product.action}</div>
                                </Box>
                                <Box p={3} display="flex" gap={2}>
                                    <div style={{ width: 200, color: "blue" }}>computer </div> <div>{product.computer}</div>
                                </Box>
                                <Box p={3} display="flex" gap={2}>
                                    <div style={{ width: 200, color: "blue" }}>description </div> <div>{product.desctiption}</div>
                                </Box>
                                <Box p={3} display="flex" gap={2}>
                                    <div style={{ width: 200, color: "blue" }}>employee </div> <div>{product.employee}</div>
                                </Box>
                                <Box p={3} display="flex" gap={2}>
                                    <div style={{ width: 200, color: "blue" }}>rule </div> <div>{product.rule}</div>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                </Box>
                <Box my={3}>
                    <Line />
                </Box>
                <Box my={2}>
                    <CustomizedTables />
                </Box>
            </Container>
        </div >
    )
}

export default ProfileView
