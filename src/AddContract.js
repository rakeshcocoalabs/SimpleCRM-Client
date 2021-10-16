import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import Select from 'react-select'


import { TextField, Button } from "@material-ui/core";



// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';

import TableContainer from '@material-ui/core/TableContainer';

import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';


import DatePicker from "react-datepicker";

const options = [
    { value: 'India', label: 'India' },
    { value: 'UAE', label: 'UAE' },
    { value: 'KSA', label: 'KSA' }
]

const optionsState = [
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Maharashtra', label: 'Maharashtra' }
]

const data = [
    { name: "advance", percent: "25%", amount: "25000" },
    { name: "procurement", percent: "50%", amount: "50000" },
    { name: "machinery procurement", percent: "70%", amount: "70000" }
]

// const optionsExtension = [
//     { value: '   +91', label: '  +91' },
//     { value: '   +971', label: '  +971' },
//     { value: '   +965', label: '  +965' }
// ]






const AddContract = () => {

    const [startDate, setStartDate] = useState(new Date());



    return (

        <div style={{ width: "100%" }}>

            <br />
            <br />




            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Client Name</div>
                <div style={{ width: "25%" }}> <TextField id="outlined-basic-email" type="email" label="Name"
                    rows={1} variant="outlined" name="email" size="small" style={{ paddingRight: "60px" }} /></div>
                <div style={{ width: "25%" }}> Client Country </div>
                <div style={{ width: "25%", height: "20px" }}> <Select options={options} /></div>

            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Client Contact Name</div>
                <div style={{ width: "25%" }}> <TextField id="outlined-basic-email" type="email" label="Client name"
                    rows={1} variant="outlined" name="email" size="small" style={{ paddingRight: "60px" }} /></div>
                <div style={{ width: "25%" }}> Client State </div>
                <div style={{ width: "25%", height: "20px" }}> <Select options={optionsState} /></div>

            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Client Email</div>
                <div style={{ width: "25%" }}> <TextField id="outlined-basic-email" type="email" label="email"
                    rows={1} variant="outlined" name="email" size="small" style={{ paddingRight: "60px" }} /></div>
                <div style={{ width: "25%" }}> Client Contact number </div>


                <div style={{ width: "20%", height: "20px" }}> <TextField id="outlined-basic-email" type="email" label="Contact Number"
                    rows={1} variant="outlined" name="email" size="small" style={{ paddingRight: "60px" }} /></div>

            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Billing address</div>
                <div style={{ width: "25%" }}> <TextField id="outlined-basic-email" type="email" label="Addres"
                    multiline rows={2} variant="outlined" name="Address " size="small" style={{ paddingRight: "60px", height: '60px' }}
                    rowsMax={4} /></div>
                <div style={{ width: "25%" }}> Place of supply </div>
                <div style={{ width: "20%", height: "20px" }}> <TextField id="outlined-basic-email" type="email" label="Place"
                    rows={1} variant="outlined" name="email" size="small" style={{ paddingRight: "60px" }} /></div>

            </div>

            <br />
            <br />

            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}> PO Number </div>
                <div style={{ width: "25%" }}> <TextField id="outlined-basic-email" type="email" label="PO Number"
                    multiline rows={2} variant="outlined" name="Address " size="small" style={{ paddingRight: "60px", height: '60px' }}
                    rowsMax={4} /></div>
                <div style={{ width: "25%" }}> PO Date </div>

                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

            </div>
            <br />


            <br />
            <br />
            

            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  PO Details</div>
                <div style={{ width: "25%" }}> <TextField id="outlined-basic-email" type="email" label="Addres"
                    multiline rows={2} variant="outlined" name="PO Data " size="small" style={{ paddingRight: "60px", height: '60px' }}
                    rowsMax={4} /></div>
                <div style={{ width: "25%" }}> Contract value </div>
                <div style={{ width: "20%", height: "20px" }}> <TextField id="outlined-basic-email" type="email" label="50000"
                    rows={1} variant="outlined" name="email" size="small" style={{ paddingRight: "60px" }} /></div>

            </div>

            <br />
            <br/>

            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "100%" }}> <Button variant="contained" style={{ marginRight: "10px", backgroundColor: '#CE3311', color: '#FFFFFF' }} >Submit </Button></div>


            </div>
            <br />
            <br />
            <br />

            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%" }}>

                <TableContainer component={Paper} style={{ width: '70%', marginLeft: '15%' }}>

                    <Table stickyHeader aria-label="sticky table" >

                        <TableHead>

                            <TableRow>



                                <TableCell align="center">Stage</TableCell>

                                <TableCell align="center">Percentage</TableCell>

                                <TableCell align="center">Amount</TableCell>



                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {

                                data.map((p, index) => {
                                    return <TableRow key={index}>


                                        <TableCell align="center"><TextField id="outlined-basic-email" type="email" label={p.name}
                                            rows={1} variant="outlined" name="email" size="small" /></TableCell>

                                        <TableCell align="center"><TextField id="outlined-basic-email" type="email" label={p.percent}
                                            rows={1} variant="outlined" name="email" size="small" /></TableCell>
                                        <TableCell align="center"><TextField id="outlined-basic-email" type="email" label={p.amount}
                                            rows={1} variant="outlined" name="email" size="small" /></TableCell>





                                    </TableRow>

                                })

                            }

                        </TableBody>

                    </Table>

                </TableContainer>

                <br />
                <br />

                <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                    <div style={{ width: "100%" }}> <Button variant="contained" style={{ marginRight: "10px", backgroundColor: '#CE3311', color: '#FFFFFF' }} > Add new </Button></div>


                </div>


            </div>




            <br />
            <br />


            <div >

            </div>

            <br />
            <br />

        </div>
    );
}

export default AddContract;