import React, {Component} from 'react';


class RenderTables extends Component {

    checkTable = (tableId) => {
        this.props.onCheckTableInfo({id: tableId});
    }

    onClickListener = (event) => {
        const id = event.target.id;
        this.checkTable(id);
    }

    render() {
        console.log(this.props);
        const customizedTableStyle = (length, width) => ({
            float: `left`,
            fontFamily: `Arial, serif`,
            border: `silver thin solid`,
            borderRadius:  `10px`,
            height: `${width * 80}px`,
            width: `${length * 80}px`,
            margin: `20px`,
            lineHeight: `${width * 80}px`,
            textAlign: `center`,
        });
        return (
            <div className={"tables"}>
                    {
                        this.props.tablesToRender.map((tables, index) => {
                            if (tables.length === 0 || tables.width === 0 || tables.capacity === 0)
                                return null;
                                return (
                                    <div key={index} id={index} onClick={this.onClickListener}
                                        style={customizedTableStyle(tables.length, tables.width)}>
                                        A{index}    x{tables.capacity}
                                    </div>
                                );
                        })
                    }
            </div>
        );
    }
}

export default RenderTables;
