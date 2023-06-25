import React, { useState, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { MDBBadge} from 'mdb-react-ui-kit';
import Header from './testContent/Header'
  
const [isPhotoView, setIsPhotoView] = useState(false);
const [Photo, setPhoto] = useState(false);


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const App = () => {
  useEffect(() => {
    // Function to be called on page load
    myFunction();
  }, []);
  const myFunction = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Target", {
              method: "GET",
              headers: {
                      'Accept': 'application/json',
                  },
            }).then(response => {
              if (response.ok) {
                
                console.log('success');
                
                response.json().then(respData => {
                  console.log(respData);
                  console.log(JSON.stringify(respData));
                  //console.log(respData.firstName);
                  setData(respData);
                     
                });
              
              }
              else {
                console.log('failure');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };


  const columns = [
    { title: "FullName", field: "profile.fullName" },
    { title: "MotherName", field: "profile.motherName"},
    { title: "DateOfBirth", field: "profile.dateOfBirth"},
    { title: "Gender", field: "profile.gender.gender1"},
    { title: "Nationality", field: "profile.nationality.nationality1"},
    { title: "Photos",  render: (rowData) =>
    rowData && (
      <button onClick={openPhotoModal} style={{border : 'none', backgroundColor: 'white', color:'blue', textDecorationLine:'underline' }}>View</button>
    )
  },
    { title: "WarrantStatus", field: ""}
  ];


  const [data, setData] = useState([]);

  const openPhotoModal = () => {
    setIsPhotoView(true);
  }

  return (
    <>
      <Header/>
      <MaterialTable
        title="Targets"
        icons={tableIcons}
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
            
        }}
      />
      
    </>
  );
};

export default App;
