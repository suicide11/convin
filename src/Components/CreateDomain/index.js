import React, { Component } from 'react';
import 'antd/dist/antd.css';
import URL from '../../api/rootURL'
import Create from './CreateDomainForm'
import CreateDomain from '../../api/CreateDomain/index'
import {
    Icon,
    Col,
    Row,
    Card
} from 'antd';
class CreateDomainIndex extends Component {
    handleCreate = (data)=>{
        const fullURL=URL+'domains/'
        console.log(data)
        CreateDomain(fullURL,data)
        .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
          })
    }
    render() {
        return (
            <Row>
                <Col offset={8} span={8}>
                    <br></br>
                    <Card title="Create your subdomain" style={{ width: "100%" }}>
                        <Create CreateDomain={(data) => this.handleCreate(data)} abc="bcd" />
                    </Card>
                </Col>
            </Row>

        )
    }
}
export default CreateDomainIndex