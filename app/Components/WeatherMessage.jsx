var React =require('react');
var createReactClass = require('create-react-class');
var Weather = require('./Weather');

/* var WeatherMessage= createReactClass({    
    render:function(){
        var {temp, location} = this.props;
        return(
            <h3>It is {this.props.temp} deg in {this.props.location}</h3>            
        );
    }
}); */

var WeatherMessage = (props) => {
    var {temp, location} = props;
    return(
        <h3 className="text-center">It is {props.temp} deg in {props.location}</h3>            
    );
}

module.exports=WeatherMessage;