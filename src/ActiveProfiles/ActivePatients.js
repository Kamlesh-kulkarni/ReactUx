import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    flexGrow: {
      flex: '1',
    },
    card: {
backgroundColor: "white",
'&:hover': {
    backgroundColor:"#c1e2f3  "
}
    },

    })

const Component = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`
const List1 = styled.div`
display: flex;
`
const List2 = styled.div`
display: flex;

`
const List3 = styled.div`
display: flex;

`
const Field = styled.div`
width:80px;
`
const Field2 = styled.div`
width:200px;
`
const Details = styled.div`
font-weight: bold;
`
const FinalDiv = styled.div`
display: flex;
`

const LeftBar = styled.div`
min-width:300px;
margin-top:30px;
height: 150vh;
background-color: #e8f5fe;


`


export default function ActivePatients() {
    const classes = useStyles();
    return (
        <>
            <FinalDiv >
                <LeftBar >
                    <Typography style={{ fontSize: "20px", marginLeft:"15px", marginTop:"15px" }}>Patients</Typography>
                    <div>
                        <input style={{ marginTop:"10px",position: "relative", border: "none", outline: "none", height: "30px", width: "273px", marginLeft: "15px" }} type="text"
                        placeholder="Search patients"
                        />

                        <img style={{ position: "absolute" ,
                        position: "absolute",
                        width: "28px",
                        left: "258px",
                        height: "28px"}} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"/>
                    </div>

                    <Card className={classes.card} style={{
                        height: "60px",
                        marginTop: "10px",
                        marginLeft: "15px",
                        cursor:"pointer",
                    }} variant="outlined">
                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                            <div>
                                <Typography>
                                    Sara Smith
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        11 August 2020
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#0CF000", fontSize: "15px" }} />
                        </div>

                    </Card>
                    <Card className={classes.card} style={{
                        cursor:"pointer",
                        height: "60px",
                        marginTop: "10px",
                        marginLeft: "15px"
                    }} variant="outlined">
                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration-.jpg" alt="" />
                            <div>
                                <Typography>
                                    James Johnson
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        No Clearance
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#ff1100", fontSize: "15px" }} />
                        </div>
                    </Card>
                    <Card className={classes.card} style={{
                        height: "60px",
                        cursor:"pointer",
                        marginTop: "10px",
                        marginLeft: "15px"
                    }} variant="outlined">

                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                            <div>
                                <Typography>
                                    Patrice page    
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        19 September 2020
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#0CF000", fontSize: "15px" }} />
                        </div>
                    </Card>
                    <Card className={classes.card} style={{
                        height: "60px",
                        cursor:"pointer",
                        marginTop: "10px",
                        marginLeft: "15px",
                        
                    }} variant="outlined">

                        <div style={{ marginTop: "5px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img style={{ width: "50px", position: "r" }} src="https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration-.jpg" alt="" />
                            <div>
                                <Typography>
                                    Derek Diamon
                                </Typography>
                                <div>
                                    <Typography style={{ fontSize: "10px" }}>
                                        21 Aug 2020
                                    </Typography>
                                </div>
                            </div>
                            <CircleIcon style={{ color: "#0CF000", fontSize: "15px" }} />
                        </div>
                    </Card>
                </LeftBar>


                <Card style={{
                    marginLeft:"10px",
                    marginTop:"30px",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#F9F9F9"
                }} variant="outlined">
                    <Typography style={{marginTop:"20px",marginLeft:"30px", display:"flex", justifyContent:"left", alignItems:"center" ,}}><b>Patient Information</b></Typography>
                   <div style={{marginTop:"20px",marginLeft:"5px", width:"250px",display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

                    <div>
                        <img style={{ width: "70px", position: "r" }} src="https://www.pngfind.com/pngs/m/69-692697_paige-face-circle-face-in-a-circle-hd.png" alt="" />
                        </div>
                        <div>
                    <Typography style={{ fontSize: "20px" }} variant="h1"><b>Sara Smith</b></Typography>

                        </div>
                   </div>
                    <Component >
                        < List1>
                            <Field  >
                                <p>Phone</p>
                                <p>Email</p>
                                <p>Gender</p>
                                <p>Age</p>
                            </Field>
                            <Details >
                                <p>302-887-9685</p>
                                <p>sarasmith@gmail.com</p>
                                <p>Female</p>
                                <p>45</p>
                            </Details>
                        </ List1>
                        < List2 >
                        
                            <Field2 >
                                <p>Surgery Type :</p>
                                <p>Surgery Date :</p>
                                <p>Height(cm)   :</p>
                                <p>Weight       :</p>
                                <p>BMI          :</p>
                            </Field2>
                            <Details >
                                <p>Rotater cutt Repair</p>
                                <p>15 August 2020</p>
                                <p>163(ib)</p>
                                <p>110</p>
                                <p>19</p>
                            </Details>
                        </ List2>
                        < List3 >
                            <Field2 >
                                <p>Anesthesiologist</p>
                                <p>Anesthesiologist Phone </p>
                                <p>Anesthesiologist Email</p>
                            </Field2>
                            <Details >
                                <p>Dr. Christina Hardway</p>
                                <p>301-896-8745</p>
                                <p>Christina@h3a.com</p>
                            </Details>
                        </ List3>

                        <p> Surgery Clearence </p>


                        <img  src="https://www.pngfind.com/pngs/m/536-5366504_check-mark-clip-art-yes-clipart-hd-png.png" style={{ width:"60px", height:"50px"}} />

                    </Component>
                    <div style={{ flexWrap:"wrap",marginTop: "25px", display: 'flex', justifyContent: "space-evenly" }}>
                        <Button className={classes.button} style={{  fontSize: "12px",fontWeight:"bolder", color: "#008CCF", width: "180px" }}
                            variant="text">List of prior Surgeries</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">List of Medical Diagnosis</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">List of Medications</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">Airway Evaluation</Button>
                        <Button style={{ backgroundColor: "white", fontSize: "12px", color: "Black" }}
                            variant="text">Anesthesia Clearance and Recommandations</Button>
                    </div>
                    <Card style={{ height: "100vh" }}>
                        <Card style={{ display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"30px", marginTop: "40px", width: "400px", height: "40px", backgroundColor: "#c1e2f3" }}>
                            First Time Surgery</Card>
                        <Card style={{ display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"30px", width: "400px", height: "40px", backgroundColor: "#F9F9F9" }}>
                            No</Card>
                        <Card style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"30px", marginTop: "40px", width: "400px", height: "40px", backgroundColor: "#c1e2f3" }}>
                            Family History of Surgical Complications</Card>
                        <Card style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"30px", width: "400px", height: "40px", backgroundColor: "#F9F9F9" }}>
                            Yes</Card>
                        <Card style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"30px", marginTop: "40px", width: "400px", height: "40px", backgroundColor: "#c1e2f3" }}>
                            If Yes, please provide more details    </Card>
                        <Card style={{ display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"30px", width: "400px", height: "40px", backgroundColor: "#F9F9F9" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. </Card>

                        <TableContainer style={{ marginLeft:"30px", marginTop: "40px", width:"1100px" }} component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead style={{ backgroundColor: "#c1e2f3" }} >
                                    <TableRow>
                                        <TableCell>Surgery Type</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Anesthesia</TableCell>
                                        <TableCell align="right">Surgical Complications</TableCell>
                                        <TableCell align="right">Anethestic Complications (nausea,vominting,difficult intubation)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow style={{ backgroundColor: "#F9F9F9" }} >
                                        <TableCell component="th" scope="row">
                                            Shoulder reconstructuion</TableCell>
                                        <TableCell align="right">January 2008</TableCell>
                                        <TableCell align="right">General "Breathing Tube"</TableCell>
                                        <TableCell align="right">No</TableCell>
                                        <TableCell align="right">No</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Card>



            </FinalDiv>

        </>
    )
}
