import React, { Component } from 'react';
import data from '../token.json';

class Salestime extends Component {

	render() {
		return (
			<div className="salesTime">
				<div className="salestime__container">
					<h4 className="salestime__title">Tiempo de venta</h4>
					<div className="salestime__all-data">
						<div className="salestime__data">
							<h6 className="salestime__data--title">Barrio</h6>
							<p className="salestime__data--number">	<span className="salestime_value">{this.props.salesTimeNeighbourhood.toLocaleString()}  sem </span></p>
						</div>
						<div className="salestime__data">
							<h6 className="salestime__data--title">Ciudad</h6>
							<p className="salestime__data--number">	<span className="salestime_value">{this.props.salesTimeDistrict.toLocaleString()}  sem </span></p>
						</div>
					</div>
					<p className="salestime__text">*Semanas estimadas para la venta de un inmueble en un trimestre dado.</p>
				</div>
			</div>
		);
	}
}
export default Salestime;
