/* eslint-disable jsx-a11y/accessible-emoji */

import { SyncOutlined } from "@ant-design/icons";
import { formatEther, parseEther } from "@ethersproject/units";
import { Row, Col, Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Form } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";
import { EventListener } from "../hooks";

export default function ExampleUI({
  purpose,
  setPurposeEvents,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
  createdEvent,
}) {
    

    const [name, setName] = useState("Placeholder");
    const [abv, setAbv] = useState("AnotherPlaceholder");
    const [ts, setTs] = useState(100);
    const CreatedEventValues = Object.values(createdEvent);
    function onFinish() {
        tx(writeContracts.TokenFactory.create(ts, name, abv,))
        console.log(CreatedEventValues);
    }
    function onFinishFailed() {
    }

  return (
    <div style={{margin: 32}}>
        <div>
        <Row>
         <Col span={6} offset={9}>
          <Card title="Simple ERC-20">
            <Form 
                name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
                <Form.Item
                label="Name"
                name="name">
                <Input type="text" onChange={(e) => setName(e.target.value)} />
                </Form.Item>

                <Form.Item
                label="Abbreviation"
                name="Abbreviation">
                <Input type="text" onChange={(e) => setAbv(e.target.value)}/>
                </Form.Item>
                
                <Form.Item
                label="Total Supply"
                name="TotalSupply">
                <Input type="number" onChange={(e) => setTs(e.target.value)}/>
                </Form.Item>

                <Form.Item>
                <Button type="primary" onClick={onFinish} >
                Mint! 
                </Button>
                </Form.Item>
            </Form>
          </Card>
         </Col>
        </Row>
        </div>

        <Divider />
        
        <div>
            <Row>
                <Col span={6} offset={9}>
                  <Card title="Token to be minted">
                    <h3>Name: {name}</h3>
                    <h3>Abbreviation: {abv}</h3>
                    <h3>Total Supply: {ts}</h3>
                  </Card>
                </Col>
            </Row>
        </div>
        
        <Divider />

        <div>
            <Row>
                <Col span={6} offset={9}>
                    <Card title="Created Tokens">
                        <List 
                        dataSource={createdEvent}
                      renderItem={item => (
                        {createdEvents.map(token => <h1>{token.TotalSupply})}
                      )} />
                    </Card>
                </Col>
            </Row>
        </div>
    </div>

  );
}
