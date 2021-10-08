
import React from 'react';
class About extends React.Component {
    render() { 
        //const {image} = this.props
        //const{about} = this.props
        return <div>
            <aside>
            <img src={this.props.image} alt={'blog logo'}/>
            <p>{this.props.about}</p>
            <h1></h1>
            </aside>
        </div>;
    }
}
About.defaultProps = {image:"https://via.placeholder.com/215"}
export default About;