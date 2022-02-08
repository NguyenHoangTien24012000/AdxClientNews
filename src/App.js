import './style/App.scss';
import { BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import { createBrowserHistory } from 'history'
import PageNotFound from './pages/PageNotFound';
import { Route, Switch } from "react-router";
import { AdminTemplate } from './templates/AdminTemplate';
import AdminPage from './pages/AdminPage';
import AdminAdxType from './pages/AdminAdxType';
import AdminEditAdx from './pages/AdminEditAdx';
import AdminEditAdxDemo from './pages/AdminEditAdxDemo';
import AdminAddAdx from './pages/AdminAddAdx';
import AdxHomePageTamplate from './templates/AdxHomePageTamplate';
import ContentAdxHomePage from './components/ContentAdxHomePage';
import ContentAdxHomePageLeft from './components/ContentAdxHomePageLeft';
import AdminAdxContact from './pages/AdminAdxContact';


export const history = createBrowserHistory();


function App() {
    return (
        <BrowserRouter>
            <Switch  history = {history}>
                <Route exact path="/login" component={Login}></Route>
                <AdminTemplate exact path="/admin" Component = {AdminPage} />
                <AdminTemplate exact path= "/admin/adxContact" Component={AdminAdxContact} />
                <AdminTemplate exact path="/admin/:ADXType" Component = {AdminAdxType} />
                <AdminTemplate exact path="/admin/edit/:idADX" Component = {AdminEditAdx} />
                <AdminTemplate exact path="/admin/editAdxDemo/:idADXDemo" Component = {AdminEditAdxDemo} />
                <AdminTemplate exact path= "/admin/addAdx/:typeAdx" Component={AdminAddAdx} />
                <AdxHomePageTamplate exact path="/:typeAdx" Component={ContentAdxHomePage} />
                <AdxHomePageTamplate  path="*" Component={ContentAdxHomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;