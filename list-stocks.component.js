import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
 
export default class StocksList extends Component {
 
    constructor(props) {
        super(props);
        this.state = {stocks: []};
    }
     
    componentDidMount() {
        axios.get('http://localhost:4000/stocks/')
            .then(response => {
                this.setState({stocks: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
 
    componentDidUpdate() {
        axios.get('http://localhost:4000/stocks/')
        .then(response => {
            this.setState({stocks: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }
 
    stockList() {
        return this.state.stocks.map(function(currentStock, i) {
            return <TableRow stock={currentStock} key={i} />;
        });
    }
 
    render() {
        return (
            <div>
                <h3>Stocks</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ticket</th>
                            <th>Value</th>
                            <th>Actions</th>
                            <th></th>
 
                        </tr>
                    </thead>
                    <tbody>
                        { this.stockList() }
                    </tbody>
                </table>
            </div>
        )
    }
}