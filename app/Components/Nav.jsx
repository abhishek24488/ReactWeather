 var React =require('react');
var createReactClass = require('create-react-class');
var {Link,NavLink, withRouter} =require('react-router-dom');
var  queryString  =require('query-string');

 var Nav= createReactClass({    
    onSearch:function(e){
        e.preventDefault();
        var location = this.refs.search.value;
        //alert(location);
        //var encodedLocation = queryString.stringify(location);
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
           //this.props.history.push('/?location=${encodedLocation}');

          }
    },
    render: function() {
       return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Weather App</li>
                    <li>
                        <NavLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Example</NavLink>
                    </li>
                </ul>
            </div>   
            <div className="top-bar-right" >
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li>
                            <input type="search" placeholder="search weather by city" ref="search"/>
                        </li>
                        <li>
                        <button className="button expanded hollow "value="Get Weather">Get Weather</button>
                            {/* <input type="button" className="button" value="Get Weather"/> */}
                        </li>
                    </ul>
                </form>
            </div>      
        </div>            
    );
    }
}); 


//module.exports= withRouter(Nav);
module.exports=Nav;

/* var old =()=>{
            <div>
                {/* <Link to="/">Get Weather</Link>
            <Link to="/about">About</Link>
            <Link to="/example">Example</Link> 
            <br></br>
            <a href="#/about">Go to about</a>  
            </div>              
}; */ 


