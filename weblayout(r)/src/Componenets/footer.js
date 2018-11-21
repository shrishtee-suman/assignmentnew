import React, { Component } from 'react';
import '../styling/footer.css';

export class  Footer  extends Component{
    render(){
        return(
            <footer className="page-foot">
                <div className="inner-container">
                    <p>Copyright &copy; Fooseshoes 2013.</p>
                    <p>Home / Support / Terms and Conditions / Faqs / Contact us</p>
                </div>
            </footer>
        );
    }
   
}
 