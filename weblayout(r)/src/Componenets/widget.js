import React, { Component } from 'react';
import '../styling/widget.css';

export class Widget extends Component{
	render(){
		return(
			<div className="widget-container">
				<ul className="widget-wrapper">
					<li>
						<h4>TEXT WIDGET</h4>
						<p>Donec sed odio dui. Nulla vitae elit libero,
						a pharetra augue.
						Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
						posuere erat a ante venenatis dapibus posuere velit aliquet.
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
						eget lacinia odio sem nec elit.</p>
					</li>
					<li className="widget">
						<h4>TWITTER WIDGET</h4>
						<p>
							<span> @ericafustero </span> Why thank you. Your work looks awesome
							by the way!
							<span> @treemelody </span>
						</p>
						<p className="duration">
							19 days ago
						</p>
						<p>
							<span> @roymarvelous </span> You can seek a refund through TF if it is
							not as advertised - but it is :)
						</p>
						<p className="duration">
							21 days ago
						</p>
					</li>
					<li>
						<h4 id="flickr-widget">FLICKR WIDGET</h4>
						<img src="assets/flickr-widget.png" />
					</li>
				</ul>
			</div>
		);
	}
    
}
