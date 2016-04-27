import * as React from 'react';


export class CalculatorBoard extends React.Component<any, any > {
    private _board: string[][] = [
        [null, '7', '8', '9', '/'],
        [null, '4', '5', '6', '*'],
        ['c', '1', '2', '3', '+'],
        ['ac', '0', '.', '=', '-'],
    ]
    boardElement: JSX.Element[];
    componentWillMount(){
        const { actions } = this.props;
        this.boardElement = this._board.map(function(row: string[]) {
            let cellElements = row.map(function(cell: string) {
                let event;
                if (cell === null) { return <span/> }
                console.log(cell, cell in ['+', '-', '*', '/'])
                if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].indexOf(cell) !== -1) {
                    event = actions.inputNumber;
                } else if (['+', '-', '*', '/', '='].indexOf(cell) !== -1) {
                    event = actions.inputOperator;
                } else if (cell === 'c') {
                    event = actions.clickClean;
                } else if (cell === 'ac') {
                    event = actions.clickAllClean;
                }
                return <button onClick={() => event(cell)}>{cell}</button>
            })
            return <div>{cellElements}</div>;
        });
    }
    render() {
        const { children, actions } = this.props;
        return (
            <div>
                { children }
                { this.boardElement }
            </div>
        )
    }
}


export class CalculatorMonitor extends React.Component<any, any> {
    render() {
        return <div>{this.props.textNum}</div>
    }
}


export class CalculatorButton extends React.Component<any, any> {
    constructor(props){
        super(props);

    }
}