import React, { useContext } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRouter, privateRouter } from '../router/router';
import Loader from '../UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading){
    return <Loader/>
  }

  return (
    isAuth
    ?  <Routes>
    {
      privateRouter.map(route=>
        <Route 
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.component}>

        </Route>
        )
    }
      <Route path="*" element={<Navigate to ="/posts" />}/>
    </Routes>

    : <Routes>
      {
      publicRouter.map(route=>
        <Route 
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.component}>

        </Route>
        )
    }
    <Route path="*" element={<Navigate to ="/login" />}/>
    </Routes>
  )
}

export default AppRouter