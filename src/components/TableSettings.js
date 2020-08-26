import React, {PureComponent} from 'react';
import {Icon} from "antd"
import NumericInput from "react-numeric-input"

class TableSettings extends PureComponent {
    state = {
        capacity: this.props.theTable.capacity,
        length: this.props.theTable.length,
        width: this.props.theTable.width,
    }

    handleTableInfo = type => {
        if (type === 'tables') {
            this.props.onSelectTableInfo({isCancel: true});
        } else if (type === 'removeTable') {
            this.props.onSelectTableInfo({
                isCancel: false,
                chartType:  type,
                tableId: this.props.theTableId,
            });
        } else if (type === 'addNew') {
            this.props.onSelectTableInfo({
                isCancel: false,
                chartType:  type,
                tableId: this.props.theTableId,
                capacity: this.state.capacity,
                length: this.state.length,
                width: this.state.width,
            });
        }
    }

    onClickListenerCancel = () => {
        this.handleTableInfo('tables');
    }

    onClickListenerOK = () => {
        this.handleTableInfo('addNew');
    }

    onClickListenerRemove = () => {
        console.log(this.props.theTable);
        if (window.confirm("Are you sure you want to delete the table?")) {
            this.handleTableInfo('removeTable');
        }
    }

    onClickCapacityPlus = () => {
        let prevCapacity = this.state.capacity;
        if (prevCapacity + 1 > 2 * (this.state.length + this.state.width)) {
            this.setState({
                capacity: 2 * (this.state.length + this.state.width),
            });
        } else {
            this.setState({
                capacity: prevCapacity + 1,
            });
        }
    }

    onClickCapacityMinus = () => {
        let prevCapacity = this.state.capacity;
        if (prevCapacity === 4) {
            alert("The minimum capacity is 4!");
        } else {
            this.setState({
                capacity: prevCapacity - 1,
            });
        }
    }

    onChangeLength = (value) => {
        this.setState({
            length: value,
        });
    }

    onChangeWidth = (value) => {
        this.setState({
            width: value,
        });
    }

    render() {
        return (
            <div className={"tables"}>
                <div className={"sub-title"}>
                    <h3 >Edit Table</h3>
                    <button onClick={this.onClickListenerCancel}>X</button>
                </div>
                <div className={"table-info"}>
                    <div className={'text-line'}>
                        <p >Table #: A{this.props.theTableId}</p>
                    </div>

                    <div className={'text-line'}>
                        <p className={"static-text"}>Seat Capacity: </p>
                        <Icon onClick={this.onClickCapacityMinus} type="minus-circle" className={"input-icon"}/>
                        <p className={"input-icon"} type="text" id="capacity">{this.state.capacity}</p>
                        <Icon onClick={this.onClickCapacityPlus} type="plus-circle" className={"input-icon"}/>
                    </div>

                    <div className={'text-line'}>
                        <p className={"static-text"}>Table Size: </p>
                        <div className={"text-col"}>
                            <p className={"static-text"}>Length: </p>
                            <span className={'span-style'}>
                                <NumericInput id={'length'} min={1} max={10} value={this.state.length}
                                              onChange={this.onChangeLength}
                                              className={"input-box"}/>
                            </span>
                        </div>

                        <div className={"text-col"}>
                            <p className={"static-text"}>Width: </p>
                            <span className={'span-style'}>
                                <NumericInput id={'width'} min={1} max={10} value={this.state.width}
                                              onChange={this.onChangeWidth}
                                              className={"input-box"}/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={"table-info"}>
                    <button onClick={this.onClickListenerRemove} className={"button-remove"}>Remove Table</button>
                    <button onClick={this.onClickListenerOK} className={"button-ok"}>OK</button>
                    <button onClick={this.onClickListenerCancel} className={"button-cancel"}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default TableSettings;