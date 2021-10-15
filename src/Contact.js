import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import Select from 'react-select'
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';

import TableContainer from '@material-ui/core/TableContainer';

import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

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

// const optionsExtension = [
//     { value: '   +91', label: '  +91' },
//     { value: '   +971', label: '  +971' },
//     { value: '   +965', label: '  +965' }
// ]

const data = [
    { id: 2584111, expiry: "22/04/25", name: "project 1", doc: "record.pdf" },
    { id: 2554522, expiry: "22/08/25", name: "project 2", doc: "record.pdf" },
    { id: 7448883, expiry: "22/02/27", name: "project 3", doc: "record.pdf" },
];




const AddClient = () => {

	


    return (
        <div style={{ width: "100%" }}>

            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Client Name</div>
                <div style={{ width: "25%" }}> <input type="text" /></div>
                <div style={{ width: "25%" }}> Clent Country </div>
                <div style={{ width: "25%", height: "20px" }}> <Select options={options} /></div>

            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Client Contact Name</div>
                <div style={{ width: "25%" }}> <input type="text" /></div>
                <div style={{ width: "25%" }}> Clent State </div>
                <div style={{ width: "25%", height: "20px" }}> <Select options={optionsState} /></div>

            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Client Email</div>
                <div style={{ width: "25%" }}> <input type="email" /></div>
                <div style={{ width: "25%" }}> Clent Contact number </div>
                
				
                <div style={{ width: "20%", height: "20px" }}> <input type="text" /></div>

            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}>  Billing address</div>
                <div style={{ width: "25%" }}>  <textarea

                    rows={5}
                    cols={22}
                /></div>
                <div style={{ width: "25%" }}> Place of supply </div>

                <div style={{ width: "20%", height: "20px" }}> <input type="text" /></div>

            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "25%" }}> GST IN</div>
                <div style={{ width: "25%", height: "20px" }}> <input type="text" /></div>




            </div>

            <br />
            <br />
            <div style={{ width: "80%", margingRight: "10%", marginLeft: "10%", display: "flex", flexDirection: "row" }}>

                <div style={{ width: "50%" }}> <input type="submit" placeholder="submit" /></div>

                <div style={{ width: "50%" }}> <input type="Button" value="new contract" /></div>



            </div>

            <br />
            <br />


			<TableContainer component={Paper}>

<Table stickyHeader aria-label="sticky table" >

	<TableHead>

		<TableRow>



			<TableCell align="center">Expiry</TableCell>

			<TableCell align="center">Name</TableCell>

			<TableCell align="center">Documents</TableCell>



		</TableRow>

	</TableHead>

	<TableBody>

		{

			data.map((p, index) => {
				return <TableRow key={index}>


					<TableCell align="center">{p.expiry}</TableCell>

					<TableCell align="center">{p.name}</TableCell>
					<TableCell align="center">{p.doc}</TableCell>





				</TableRow>

			})

		}

	</TableBody>

</Table>

</TableContainer>

            <br/>
            <br/>

        </div>
    );
}

export default AddClient;