import React from 'react';
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';
// import { render } from '@testing-library/react';

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            imgSrc: this.props.src,
            // delItem: this.props.delItem.bind(this),
            id: this.props.id
        };
    }
    
    render() {
        // if(this.state.show)
        // const { show } = this.state;
        const delItem = this.props.delItem;
        return(
            <Card style={{ width: '18rem' }}>
                
                    <Card.Img variant="top" src={this.state.imgSrc} height="250px" width="250px" />
                    <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Button onClick={() => delItem(this.state.id)} >Delete</Button>
                    </Card.Body>
                                    
            </Card>
        )
    }
}

export default Item;