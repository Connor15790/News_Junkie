import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsItem = (props)=> {
    let {title, description, imageUrl, newsUrl, author, publishedAt} = props;
    return (
      <div className='container'>
        <Card style={{height: 590}} className="mt-4">
            <Card.Img variant="top" src={imageUrl} style={{height: 230}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <p className='mt-3' style={{fontSize: 17, color: "grey", fontStyle: "italic", fontFamily: "Times New Roman"}}>-By {author?author:"anonymous"} on {new Date(publishedAt).toGMTString()}</p>
                <Button variant="primary" href={newsUrl}>Read More</Button>
            </Card.Body>
        </Card>
      </div>
    )
}

export default NewsItem
