var React =require('react');
var createReactClass = require('create-react-class');

/* var About= createReactClass({
    render: function() {
        return (
            <h3>About Component!!</h3>
        );
    }
}); */


var About= (props) =>{
    return (
        <div className="text-center page-title">
            <h3 >About Component!!</h3>
            <p> Weather App <br/>
                Address:Pao Alto <br/>
                Churchill Road ,B Wing ,United States, 10004 <br/>
            </p>
        </div>
        
    );
}
module.exports=About;