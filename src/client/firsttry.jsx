import React from 'react';
import ReactDOM from 'react-dom';

class Something extends React.Component {
	constructor(props)
	{
		super(props);
		this._changeColorClass = this._changeColorClass.bind(this);
	}
	_changeColorClass()
	{
		return "deepskyblueColor";
	}
    render(){
        return(
            <h1 className={this._changeColorClass()} changeColorClass={this._changeColorClass}>{this.props.children}</h1>
        )
    }
}

export default Something