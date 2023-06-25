import React, { useState, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";
import './css/MTableHeader.css';

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
import Modal from 'react-modal';

  



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

  const [isPhotoView, setIsPhotoView] = React.useState(false);
  const [Photo, setPhoto] = useState('./images/Wallpaper.jpg');

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
                
                //console.log('success');
                
                response.json().then(respData => {
                  //console.log(respData);
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
      <button onClick={() => {openPhotoModal(rowData.photo.photo1)}} style={{border : 'none', backgroundColor: 'white', color:'blue', textDecorationLine:'underline' }}>View</button>
    )
  }
  ];

  const [data, setData] = useState([]);

  const openPhotoModal = (data) => {
    //setPhoto("../ProjectsRepository/Images/" + data);
    setPhoto(() => {
      const modifiedValue = "../Images/" + data;
      console.log(modifiedValue);
      return modifiedValue;
  });
    setIsPhotoView(true);
    console.log("Photo" + Photo);

    console.log("Photo" + Photo);

  }

  const closePhotoModal = () => {
    setIsPhotoView(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      width: '60%'
      },
  };

  return (
    <div>
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
      
      <Modal
        isOpen={isPhotoView}
        onRequestClose={closePhotoModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <h2>Image:</h2>
        <img style={{position:'relativeTimeRounding', width:'700px', height:'500px'}} src={require("./images/Wallpaper.jpg")}></img>
        <button style={{marginTop:'5px',display: 'inline', float:'right'}} onClick={closePhotoModal}>close</button>

      </Modal>
  );
    </div>

  );
};

export default App;
