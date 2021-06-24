/* eslint-disable jsx-a11y/accessible-emoji */

import { SyncOutlined } from "@ant-design/icons";
import { formatEther, parseEther } from "@ethersproject/units";
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch } from "antd";
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

  return (
    <div>
      <div>
      <Button type="primary"
      onClick={async () => {

          await tx(writeContracts.TokenFactory.create(420, "Swag", "SWG"));

      }}>
      Create Sample Token
      </Button>
      </div>

    <div>
        <h1>Hello World!</h1>
    </div>
    </div>

  );
}
