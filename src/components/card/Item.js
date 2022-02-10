import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import { render } from '@testing-library/react';

function Item(props)  {
    const [title, setTitle] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [id, setId] = useState(0);
    const { delItem } = props;
    useEffect(() => {
        setTitle(props.title);
        setImgSrc(props.src);
        setId(props.id);
    },[props]);
        return(
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imgSrc} height="250px" width="250px" />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button onClick={() => delItem(id)}> Delete</Button>
                    </Card.Body>              
            </Card>
        )
    }

export default Item;