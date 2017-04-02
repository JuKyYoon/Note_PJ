import React from 'react';
import Neditor from '../components/neditor'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <body className="HomePage">
                <div className="SideMenu">
                    
                </div>
                <div className="editspace">
                    <Neditor/>
                </div>
            </body>

        );
    }
}
export default Home;
