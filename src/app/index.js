import React from 'react';
import ContactPage from './pages/ContactPgae';
// tao component
class MyApp extends React.Component {
  render(){
    return(
      <React.Fragment>
        <ContactPage/>
      </React.Fragment>
    );
  }
}
export default MyApp;