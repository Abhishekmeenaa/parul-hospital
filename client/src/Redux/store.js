 import  {configureStore} from "@reduxjs/toolkit"
 import appointmentReducer from "../Redux/appointment/appointmentSlice"
 import userReducer from "../Redux/users/usersSlice"



 const store = configureStore({
    reducer:{
      user: userReducer,
      appointment: appointmentReducer

    }
 })

 export default store