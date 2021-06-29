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
  blockExplorer,
}) {
    

    const listCreate = createdEvent.map((index) => 
        <div>
        <li><h3>Token Name: {index[1]}</h3></li>
        <li><h3>Token ABV: {index[2]}</h3></li>
        <li><Address 
            address={index[0]}
            ensProvider={mainnetProvider}
            blockExplorer={blockExplorer}
            fontSize={16} /></li>
        <li>Total Supply: {index[3]}</li>
        </div>
    );
    const [name, setName] = useState("Placeholder");
    const [abv, setAbv] = useState("AnotherPlaceholder");
    const [ts, setTs] = useState(100);
    function onFinish() {
        tx(writeContracts.TokenFactory.create(ts, name, abv,))
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
                        dataSource={listCreate}
      renderItem={listCreate => (
          <List.Item>
          {listCreate}
          </List.Item>
      )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    </div>

  );
}
