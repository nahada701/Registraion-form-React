import React, { useState } from 'react'
import './Regform.css'
import { useNavigate } from 'react-router-dom'

function Regform() {
  const [selectedGender, setSelectedGender] = useState("");
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phone: "",
    DOB: "",
    gender: "",
    photo: null,
    course: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    DOB: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "name" || name === "email" || name === "phone" || name === "DOB" || name === "password" || name === "confirmPassword") {
      setStudentData({ ...studentData, [name]: value });
    }

    if (name === "gender") {
      setSelectedGender(value);
      setStudentData({ ...studentData, gender: value });
    }
    if (name === "course") {
      setSelectedGender(value);
      setStudentData({ ...studentData, course: value });
    }

    if (name in studentData.skills) {
      setStudentData({
        ...studentData,
        skills: { ...studentData.skills, [name]: checked },
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!studentData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!studentData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(studentData.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Phone validation
    if (!studentData.phone) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    }

    // Date of Birth validation
    if (!studentData.DOB) {
      newErrors.DOB = "Date of birth is required.";
      isValid = false;
    }

    // Gender validation
    if (!studentData.gender) {
      newErrors.gender = "Gender is required.";
      isValid = false;
    }

    // Password validation
    if (!studentData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (studentData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    // Confirm password validation
    if (!studentData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
      isValid = false;
    } else if (studentData.password !== studentData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", studentData);
      // Perform the registration logic here
      navigate('/login',{ state: { studentData } });
    }
  };

  return (
    <div>
      <div className="box m-auto mt-4 mb-4 pb-4 py-3 px-5" style={{ minHeight: '91vh' }}>
        <h3 className='text-center p-3'>Please fill your information</h3>

        <div className="row">
          <div className="col-md-12 mb-2 d-flex flex-column align-items-start">
            <label htmlFor="name" className='me-2 mt-1'>Name:</label>
            <input type="text" className='inp' name='name' onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}

            <label htmlFor="email" className='me-2 mt-1'>Email:</label>
            <input type="email" className='inp' name='email' onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="phone" className='me-2 mt-1'>Phone:</label>
            <input type="number" className='inp' name='phone' onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <label htmlFor="DOB" className='me-2 mt-1'>Date of Birth:</label>
            <input type="date" className='inp' name='DOB' onChange={handleChange} />
            {errors.DOB && <span className="error">{errors.DOB}</span>}

            <label htmlFor="gender" className='me-2 mt-1'>Gender:</label>
            <label htmlFor="male" className='me-2 mt-1'>
              Male
              <input type="radio" name="gender" checked={selectedGender === "male"} value="male" id="male" onChange={handleChange} />
            </label>
            <label htmlFor="female" className='me-2 mt-1'>
              Female
              <input type="radio" name="gender" checked={selectedGender === "female"} value="female" id="female" onChange={handleChange} />
            </label>
            <label htmlFor="others" className='me-2 mt-1'>
              Others
              <input type="radio" name="gender" checked={selectedGender === "others"} value="others" id="others" onChange={handleChange} />
            </label>
            {errors.gender && <span className="error">{errors.gender}</span>}

            <label htmlFor="photo" className='mt-2'>Upload photo</label>
            <input type="file" className='inp' onChange={handleChange} />

            <label htmlFor="course" className='mt-2'>Select Course:</label>
            <select name="course" id="course" className="inp" onChange={handleChange}>
              <option value="">Select</option>
              <option value="MERN">MERN Stack Development</option>
              <option value="PythonDjango">Python Django</option>
              <option value="DataScience">Data Science</option>
            </select>

            <div className='w-100 mt-1 flex-wrap d-flex align-items-center'>
              <label htmlFor="skills" className='mt-1 ms-5'>Skills:</label>
              <label className=''>
                HTML
                <input type="checkbox" name="html" onChange={handleChange} />
              </label>
              <label>
                CSS
                <input type="checkbox" name="css" onChange={handleChange} />
              </label>
              <label>
                JavaScript
                <input type="checkbox" name="javascript" onChange={handleChange} />
              </label>
            </div>

            <label htmlFor="password" className='mt-1'>Password</label>
            <input type="password" className='inp' name="password" onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}

            <label htmlFor="confirmPassword" className='mt-1'>Confirm Password</label>
            <input type="password" className='inp' name="confirmPassword" onChange={handleChange} />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

    
  <button type='submit' className='submit-btn' onClick={handleSubmit}>Register</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Regform;
