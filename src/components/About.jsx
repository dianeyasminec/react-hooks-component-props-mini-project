
import React from 'react';

function About(props){
        //const {image} = this.props
        //const{about} = this.props
        return (<div>
            <aside>
            <img src={props.image} alt={'blog logo'}/>
            <p>{props.about}</p>
            
            </aside>
        </div>);
    }

About.defaultProps = {image:"https://via.placeholder.com/215"}
export default About;