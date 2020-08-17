import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
    componentDidMount(){
        console.log("Dishdetail Component componentDidMount invoked.");
    }

    componentDidUpdate(){
        console.log("Dishdetail Component componentDidUpdate invoked.");
    }
    

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        let singleComment = comments.map(comment => {
            return (
                <li key={comment.id}>
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
            )
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {singleComment}
                </ul>
            </div>
        )
    }

    render() {
        console.log("Dishdetail Component render invoked.");
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row" >
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DishDetail;