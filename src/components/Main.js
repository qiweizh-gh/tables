import React, {Component} from 'react';
import AddTable from "./AddTable"
import RenderTables from "./RenderTables"
import TableDetail from "./TableDetail"
import TableSettings from "./TableSettings"

class Main extends Component {
    state = {
        chartType: 'tables',
        tables: [{
            capacity: 4,
            length: 1,
            width: 1,
        }, {
            capacity: 10,
            length: 4,
            width: 1,
            }],
        curTableId: 0,
    }

    addATable = () => {
        this.setState({
            chartType: 'addNew',
        });
    }

    checkTable = (info) => {
        console.log(info.id);
        this.setState({
           chartType: 'tableDetail',
            curTableId: info.id,
        });
    }

    handleTableInfo = info => {
        if (info.isCancel) {
            this.setState({
                chartType: 'tables',
            });
        } else if(info.chartType === 'addNew') {
            let prevTables = this.state.tables;
            if (!info.tableId) {
                prevTables.push({
                    capacity: info.capacity,
                    length: info.length,
                    width: info.width,
                    }, );
            } else {
                prevTables[info.tableId] = {
                    capacity: info.capacity,
                    length: info.length,
                    width: info.width,
                };
            }

            this.setState({
                chartType: 'tables',
                tables: prevTables,
            });
            console.log(this.state.tables);
        } else if (info.chartType === 'tableSettings') {
            this.setState({
                chartType: 'tableSettings',
                curTableId: info.tableId,
            });
        } else if (info.chartType === 'removeTable') {
            let prevTables = this.state.tables;
            prevTables.splice(info.tableId, 1);
            console.log(prevTables);
            this.setState({
                chartType: 'tables',
                tables: prevTables,
            });
        }
    }

    render() {
        let theView;
        if (this.state.chartType === 'tables') {
            theView = <RenderTables
                        onCheckTableInfo={this.checkTable}
                        tablesToRender={this.state.tables}/>;
        } else if (this.state.chartType === 'addNew') {
            theView =  <AddTable
                        onSelectTableInfo={this.handleTableInfo}
                        theTableId={this.state.tables.length}/>;
        } else if (this.state.chartType === 'tableDetail') {
            let curTableId = this.state.curTableId;
            theView = curTableId === -1 ? <div/>
                : <TableDetail
                    theTable={this.state.tables[curTableId]}
                    theTableId={this.state.curTableId}
                    onSelectTableInfo={this.handleTableInfo}/>;
        } else if (this.state.chartType === 'tableSettings') {
            let curTableId = this.state.curTableId;
            theView = curTableId === -1 ? <div/>
                : <TableSettings
                theTable={this.state.tables[curTableId]}
                theTableId={this.state.curTableId}
                onSelectTableInfo={this.handleTableInfo}/>
        }
        return (
            <div className={"main-container"}>

                <div className={"tabs"}>
                    <h3 className={"tab"}>Dine in</h3>
                </div>

                <div>
                    <button onClick={this.addATable}
                            className={"button"}>
                        Add Table
                    </button>
                </div>

                {theView}

            </div>
        );

    }
}

export default Main;