
import React from 'react';
class About extends React.Component {
    render() { 
        //const {image} = this.props
        //const{about} = this.props
        return <div>
            <aside>
            <img src={this.props.image} alt={'blog logo'}/>
            <p>{this.props.about}</p>
            </aside>
        </div>;
    }
}
About.defaultProps = {image:}
export default About;