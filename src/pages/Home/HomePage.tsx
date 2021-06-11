import React, { PureComponent } from "react";
import Banner from "../../components/Banner/Banner";
interface HomeSate {
    loading?: boolean;
}
export default class HomePage extends PureComponent<{},HomeSate> {
    state: HomeSate = {
            loading: false
    } 
    componentDidMount() {
         this.setState({loading: true})
    }
    render(){
        const {loading} = this.state;
        return(
            <React.Fragment>
                {
                    loading ?  <Banner /> : "loading....."
                }
               
            </React.Fragment>
        );
    }
}