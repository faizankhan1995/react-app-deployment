import React from 'react';
import { Switch, Route} from "react-router-dom";
import { Layout } from 'antd';
import EmployeeManager from '../employee-manager';
import NavBar from '../navbar';
import LoginForm from '../auth/login';
import RegisterForm from '../auth/register';
import './app.css';

const { Header, Footer } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
        <Layout>
          
          <Header style={{ position: 'fixed', zIndex: 500, width: '100%' }}>
            <NavBar />
          </Header>
          <Switch>

            {/* If none of the previous routes render anything,
                this route acts as a fallback.

                Important: A route with path="/" will *always* match
                the URL because all URLs begin with a /. So that's
                why we put this one last of all */}
            <Route exact path="/login">
                <LoginForm />
            </Route>
            <Route exact path="/register">
                <RegisterForm />
            </Route>
            <Route exact path="/">
              <EmployeeManager />
            </Route>

          </Switch>
            <Footer style={{ textAlign: 'center' }}>Copyrights {new Date().getFullYear()} © Bentley Systems</Footer>
        </Layout>
    </div>
  );
}

export default App;
