import React, { Component } from 'react';
import data from '../token.json';

class Salestime extends Component {

	render() {
		return (
			<div className="salesTime">
				<div className="salestime__container">
					<h3 className="graphic__title">Tiempo de venta</h3>

					<div className="salestime__all-data">
						<div className="salestime__data">
							<h6 className="salestime__data--title">Barrio</h6>
							{/* <div className="salestime__data--numbers"> */}
							<p className="salestime__data--number">	<span className="salestime_value">{this.props.salesTimeNeighbourhood.toLocaleString()}  semanas </span></p>
							{/* </div> */}
						</div>
						<div className="salestime__data">
							<h6 className="salestime__data--title">Ciudad</h6>
							{/* <div className="salestime__data--numbers"> */}
							<p className="salestime__data--number">	<span className="salestime_value">{this.props.salesTimeDistrict.toLocaleString()}  semanas </span></p>
							{/* </div> */}
						</div>
					</div>

					<p className="salestime__text">*Semanas estimadas para la venta de un inmueble en el último trimestre.</p>
					{/* </div> */}
				</div>
			</div>
		);
	}
}
export default Salestime;
