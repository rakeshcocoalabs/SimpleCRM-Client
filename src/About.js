import Select from 'react-select'
// import Pagination from '@material-ui/lab/Pagination';

import { Typography, TextField } from "@material-ui/core";

// import CssBaseline from '@material-ui/core/CssBaseline'
import React ,{useState} from 'react'

import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';

import TableContainer from '@material-ui/core/TableContainer';

import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from "react-router-dom";


const List = () => {


	const history = useHistory();
	// Use the state and functions returned from useTable to build your UI


	const options = [
		{ value: 'active', label: 'active' },
		{ value: 'potential', label: 'potential' },
		{ value: 'dropped', label: 'dropped' },
		{ value: 'all', label: 'all' }
	]


	var data = [
		{ id: 1, name: "John Doe", project: "Coal Mine Project madhya pradesh", status: "active" },
		{ id: 2, name: "Victor Wayne", project: "Shipping project from mumbai 2020", status: "active" },
		{ id: 3, name: "Jane Doe", project: "Bakery App for dubai and abu dhabi", status: "dropped" },
		{ id: 1, name: "Adam mc arthy", project: "Coal Mine Project madhya pradesh", status: "active" },
		{ id: 2, name: "Gabriel Angelo", project: "Shipping project from mumbai 2020", status: "active" },
		{ id: 3, name: "Silvester Doe", project: "Bakery App for dubai and abu dhabi", status: "dropped" },
	];


 	const [dataState,setDataState] = useState(data);

	 const newClient = () => {
		history.push("/contact", { from: "About" })
		
	}



	const onOptionChange = (e) => {
		
		var temp = [];

		if(e.value === "all"){

			setDataState(data)
		}
		else {

			for(var x = 0; x < data.length; x++){
				var item = data[x]
					if(item.status === e.value){
						temp.push(item)
					}
			}
			setDataState(temp)
		}

	
		
		
	}

	const onTextChange = (e) => {
		
		var temp = [];

		if(e.target.value === ""){

			setDataState(data)
		}
		else {

			for(var x = 0; x < data.length; x++){
				var item = data[x]
				console.log(item.name,e.target.value)
					if(item.name.includes(e.target.value)){
						temp.push(item)
					}
			}
			setDataState(temp)
		}

	
		
		
	}

	// useEffect(() => {
	// 	fetch('https://randomuser.me/api/')
	// 	  .then(results => results.json())
	// 	  .then(data => {
	// 		const {name} = data.results[0];
	// 		console.log(name)
			
	// 	  });
	//   }, []); 
	


	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		}}>

			<div style={{ width: "80%" }}>
				<br />
				<br />
				<Button style={{
					position: "absolute",
					right: "25.65%",
					width: "110px",
					height: "35px",
					backgroundColor: "green",
					
				}} onClick={newClient} value="New Client"> New Client</Button>
				<br />
				<br />
			</div>

			<div style={{
				width: "80%", height: "80%", paddingTop: "40px", display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<Typography style={{ paddingRight: "60px" }}>
					Search Clients
				</Typography>

				<TextField id="outlined-basic-email" type="email" label="Search"
					rows={1} variant="outlined" name="email" size="small" style={{ paddingRight: "60px" }} onChange={onTextChange} />

				<Typography style={{ paddingRight: "100px" }}>
					Select Status
				</Typography>

				<Select options={options} onChange={onOptionChange}/>

			</div>

			<div>
				<br />
				<br />
				<TableContainer component={Paper}>

					<Table stickyHeader aria-label="sticky table" >

						<TableHead>

							<TableRow>



								<TableCell align="center">Name</TableCell>

								<TableCell align="center">Project</TableCell>

								<TableCell align="center">Status</TableCell>



							</TableRow>

						</TableHead>

						<TableBody>

							{

								dataState.map((p, index) => {
									return <TableRow key={index}>


										<TableCell align="center">{p.name}</TableCell>

										<TableCell align="center">{p.project}</TableCell>
										<TableCell align="center">{p.status}</TableCell>





									</TableRow>

								})

							}

						</TableBody>

					</Table>

				</TableContainer>
			</div>
			<br />
			<br />
			<div style={{ textAlign: "center" }} align="center">

				<Pagination style={{ display: "inline-block" }} count={10} />
			</div>

		</div>
	)

}

export default List