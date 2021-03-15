import React,{Suspense} from 'react'
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom'
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

// import Hello from './Hello'
// import Sample from './Sample'
import Home from './Home'
const Sample=React.lazy(()=>import("./Sample"))
const Hello=React.lazy(()=>import("./Hello"))
const NotFound=React.lazy(()=>import("./NotFound"))



export default function App(){
    return(
        <div>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact={true} path="/"><Home/></Route>
                        <Route exact={true} path="/sample" ><Sample/></Route>
                        <Route exact={true} path="/hello" ><Hello/></Route>
                        <Route component={NotFound}/>
                        {/* <Route><Redirect to="/"/></Route> */}
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}