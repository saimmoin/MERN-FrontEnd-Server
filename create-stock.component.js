import React, {Component} from 'react';
import axios from 'axios';
 
export default class CreateStock extends Component {
 
    constructor(props) {
        super(props);
 
        this.onChangeStockName = this.onChangeStockName.bind(this);
        this.onChangeStockTicket = this.onChangeStockTicket.bind(this);
        this.onChangeStockValue = this.onChangeStockValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
 
        this.state = {
            stock_name: '',
            stock_ticket: '',
            stock_value: ''
        }
    }
 
    onChangeStockName(e) {
        this.setState({
            stock_name: e.target.value
        });
    }
 
    onChangeStockTicket(e) {
        this.setState({
            stock_ticket: e.target.value
        });
    }
 
    onChangeStockValue(e) {
        this.setState({
            stock_value: e.target.value
        });
    }
 
    onSubmit(e) {
        e.preventDefault();
 
        console.log(`Form submitted:`);
 
        const newStock = {
            stock_name: this.state.stock_name,
            stock_ticket: this.state.stock_ticket,
            stock_value: this.state.stock_value
        }
 
        axios.post('http://localhost:4000/stocks/add', newStock)
            .then(res => console.log(res.data.stock));
 
        this.setState({
            stock_name: '',
            stock_ticket: '',
            stock_value: ''
        })
    }
 
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Stock</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.stock_name}
                                onChange={this.onChangeStockName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Ticket: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.stock_ticket}
                                onChange={this.onChangeStockTicket}
                                />
                    </div>
                    <div className="form-group">
                        <label>Value: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.stock_value}
                                onChange={this.onChangeStockValue}
                                />
                    </div>
 
                    <div className="form-group">
                        <input type="submit" value="Create Stock" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}