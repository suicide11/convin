import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Search from './SearchForm'
import {
    Icon,
    Col,
    Row,
    Card
} from 'antd';
import search from '../../api/SearchDomain/index'
import URL from '../../api/rootURL'
class SearchDomainIndex extends Component {

    handleSearch=(data)=>{
        console.log(data);
        const fullURL = URL+'domains/availability?name='+data['domain']
        search(fullURL)
        .then((response)=>{
            console.log(response)
            alert(response.data.message)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <Row>
                <Col offset={8} span={8}>
                    <br></br>
                    <Card title="Search for the availabilty of your subdomain name" style={{ width: "100%" }}>
                        <Search search={this.handleSearch}/>
                    </Card>
                </Col>
            </Row>

        )
    }
}
export default SearchDomainIndex