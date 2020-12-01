import React, {Component} from 'react';
import axios from 'axios';
 
export default class EditStock extends Component {
 
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
 
    componentDidMount() {
        axios.get('http://localhost:4000/stocks/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    stock_name: response.data.stock_name,
                    stock_ticket: response.data.stock_ticket,
                    stock_value: response.data.stock_value
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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
        const obj = {
            stock_name: this.state.stock_name,
            stock_ticket: this.state.stock_ticket,
            stock_value: this.state.stock_value
        };
        axios.post('http://localhost:4000/stocks/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
 
        this.props.history.push('/');
    }
 
    render() {
        return (
            <div>
                <h3>Edit Stock</h3>
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
 
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Stock" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}