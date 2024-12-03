import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function Login() {
  const location = useLocation();
  const navigate=useNavigate()
  const studentData = location.state?.studentData;
const goback=()=>{
  navigate('/')
}

  return (
    <div>
       {studentData && (
        <div>
          <h1 className='text-center mt-5'>Welcome to the student portal  {studentData.name}</h1>
          <h5 className='text-center'>Please check your details</h5>
          <div className='table-responsive'>
            <table className='my-5 m-auto table w-75  m-4 table-bordered'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>

                  <th>Course</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{studentData.name}</td>
                  <td>{studentData.phone}</td>
                  <td>{studentData.email}</td>
                  <td>{studentData.course}</td>

                </tr>
              </tbody>
            </table>
          </div>
          <div className='d-flex justify-content-center flex-wrap'>
          <button className=' btn btn-warning me-5 ms-5 mt-4' onClick={goback} >Go back to Edit</button>
          <button className=' btn btn-success me-5  ms-5 mt-4' >Confirm Details</button>

         
          </div>
          
        </div>
      )}
      
      
    </div>
  );
}

export default Login;
