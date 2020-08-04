import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'
import {ToastsStore} from 'react-toasts';
import {Button} from 'react-bootstrap';
import API from '../services'

export default class Display extends Component {

    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this);
        this.state = {
            id: '',
            name: '',
            foodtype: '',
            address: '',
            rating: '',
            contact: '',
            speciality: '',
            postList: [],
            isLoading: true,
            isEditing: false,
        }
    }

    getRestaurant() {
        API.getRestaurant().then(res => {
            this.setState({
                postList: res.data,
                isLoading: false
            });
        })
    }

    componentDidMount() {
        this.getRestaurant();
    }

    reset = () => {
        this.setState({
            id: '',
            name: '',
            foodtype: '',
            address: '',
            rating: '',
            contact: '',
            speciality: '',
        })
    };

    showEditForm = (id) => {
        this.props.history.push({
            pathname: '/edit',
            state: {detail: id}
        });
        this.setState({
            isEditing: true
        })
    };

    deleteRow = (id) => {
        API.deleteRestaurant(id)
            .then(res => {
                ToastsStore.warning('Successfully Deleted!');
                this.getRestaurant()
            });
    };

    onSort(event, sortKey){
        const data = this.state.postList;
        data.sort((a,b) =>  b.rating - a.rating)
        this.setState({data})
    }

    render() {
        const { postList} = this.state;
        return (
            <div className='restaurant_list'>
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th><strong>name</strong></th>
                            <th><strong>foodtype</strong></th>
                            <th><button onClick={e => this.onSort(e, 'ratings')}>ratings</button></th>
                            <th><strong>address</strong></th>
                            <th><strong>contact</strong></th>
                            <th><strong>speciality</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                    {(postList.map((item, i) => {
                            return [
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.foodtype}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.address}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.speciality}</td>
                                        <td>
                                            <link rel="stylesheet"
                                                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                                            <Button variant="dark" id="printPageButton"
                                                    onClick={(e) => this.showEditForm(item.id)}><i
                                                className="fa fa-pencil"></i></Button>
                                            <Button variant="light" id="printPageButton"
                                                    onClick={(e) => this.deleteRow(item.id, e)}><i
                                                className="fa fa-trash"></i></Button>

                                        </td>
                                    </tr>
                            ];

                        })
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
