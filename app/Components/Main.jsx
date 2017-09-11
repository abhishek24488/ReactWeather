var React =require('react');
var createReactClass = require('create-react-class');
var Nav = require('./Nav');
var Weather = require('./Weather');
//var ErrorModal = require('./ErrorModal');

var Main=createReactClass({
    
    render: function() { 
        return( 
            <div>
            <Nav/>            
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">                
                {this.props.children}                 
                </div>
            </div>            
        </div>          
        );
    }
}); 

/* var Main= (props) => {
    return( 
        <div>
            <Nav/>            
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">                
                {props.children}                 
                </div>
            </div>            
        </div>          
    );
} */

module.exports=Main;