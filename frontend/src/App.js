// import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import AdminRegister from './Components/Admin/AdminRegister';
import StudentRegister from './Components/Admin/Students/StudentRegister';
import TeacherRegister from './Components/Admin/Teachers/TeacherRegister';
import Connect from './Components/Teacher/Connect';
import Home from './Components/non-private-routes/Home';
import ClassRoom from './Components/Teacher/ClassRoom';
import Attendance from './Components/Student/Attendance';
import { useAuth } from './Components/store/auth';
import TAttendance from './Components/Teacher/TAttendance';
import Manage from './Components/Admin/Classrooms/Manage';
import Edit from './Components/Admin/Classrooms/Edit';
import './index.css';
import Teacher from './Components/Admin/Teachers/Teacher';
import Students from './Components/Admin/Students/Students';
import ForgetPasswordEmail from './Components/ForgetPasswordEmail';
import ForgetPasswordPass from './Components/ForgetPasswordPass';
import Student from './Components/Admin/Students/Student';
import Teachers from './Components/Admin/Teachers/Teachers';
import GiveAssignments from './Components/Teacher/GiveAssignments';
import Assignments from './Components/Teacher/Assignments';
import AboutUs from './Components/non-private-routes/AboutUs';
import OurServices from './Components/non-private-routes/OurServices';
import ClientReviews from './Components/non-private-routes/ClientReviews';
import ContactUs from './Components/non-private-routes/ContactUs';
// import StudentAssignment from './Components/StudentAssignment';
import AssignmentDetail from './Components/Student/AssignmentDetail';
import StudentAssignments from './Components/Student/StudentAssignments';
import SubmittedAssignment from './Components/Student/SubmittedAssignment';


function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const ans = localStorage.getItem('USER');
    setUser(ans ? JSON.parse(ans) : null);
  }, []);

  return (
    <>
      <Routes>
        <Route exact path='/navbar' element={<Navbar />} />
        <Route exact path='/connect' element={<Connect />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/our-services' element={<OurServices />} />
        <Route exact path='/aboutUs' element={<AboutUs />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/client-reviews' element={<ClientReviews />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/forgetPassEmail' element={<ForgetPasswordEmail />} />
        <Route exact path='/resetPassword/:USER/:token/:id' element={<ForgetPasswordPass />} />
        <Route exact path='/attendance' element={<Attendance />} />
        <Route exact path='/tattendance' element={<TAttendance />} />
        <Route exact path='/manage' element={<Manage />} />
        <Route exact path='/edit-class' element={<Edit />} />
        <Route exact path='/classroom' element={<ClassRoom />} />
        <Route exact path='/give-assignment' element={<GiveAssignments />} />
        {/* <Route exact path='/get-assignments' element={<StudentAssignment />} /> */}
        <Route exact path='/see_assignments' element={<StudentAssignments />} />
        <Route exact path='/submitted_assignments' element={<SubmittedAssignment />} />
        <Route exact path='/assignments' element={<Assignments />} />
        <Route exact path='/studentregister' element={<StudentRegister />} />
        <Route exact path='/teacherregister' element={<TeacherRegister />} />
        <Route exact path='/adminregister' element={<AdminRegister />} />
        <Route exact path='/teachers' element={<Teachers />} />
        <Route exact path='/students' element={<Students />} />
        <Route exact path='/assignment-details' element={<AssignmentDetail />} />
        <Route exact path='/get_student/:id' element={<Student />} />
        <Route exact path='/get_teacher/:id' element={<Teacher />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
