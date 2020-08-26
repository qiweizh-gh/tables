import React, {PureComponent} from 'react';
import '../styles/TableDetail.css'

class TableDetail extends PureComponent {

    handleTableInfo = (isCancel) => {
        if (isCancel) {
            this.props.onSelectTableInfo({
                isCancel: isCancel,
                chartType:  'tables',
            });
        } else {
            this.props.onSelectTableInfo({
                isCancel: isCancel,
                tableId: this.props.theTableId,
                chartType: 'tableSettings',
            });
        }
    }

    onClickListenerCancel = () => {
        this.handleTableInfo(true);
    }

    onClickListenerSetTable = () => {
        this.handleTableInfo(false);
    }

    render() {
        return (
            <div className={"tables"}>
                <div className={"status-bar"}>
                    <h3 >Table: A{this.props.theTableId}</h3>
                    <p >Open</p>
                </div>
                <div className={"detail-container"}>
                    <div className={"text-detail"}>
                        <h4>Order Detail: </h4>
                        <div className={"order-detail"}>
                            <p>Pork Feet Noodles</p>
                            <p>Twice Cooked Pork blablablabla</p>
                            <p>Fish in Chili Sauce</p>
                        </div>
                        <div className={"order-detail"}>
                            <h4>Subtotal: </h4>
                            <p>Discount: </p>
                            <p>Tax: </p>
                            <p>Order Total: </p>
                        </div>
                    </div>
                    <div className={"detail-settings"}>
                        <button >Print Order</button>
                        <button >Print Invoice</button>
                        <button >Add Item</button>
                        <button >End Order</button>
                        <button >Switch Table</button>
                        <button
                            onClick={this.onClickListenerSetTable}>Table Setting</button>
                    </div>
                </div>

                <div className={"table-info"}>
                    <button onClick={this.onClickListenerCancel} className={"button-ok"}>OK</button>
                    <button onClick={this.onClickListenerCancel} className={"button-cancel"}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default TableDetail;