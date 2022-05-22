import React from "react";

import { Typography, Row, Col, Space } from "antd";
import { isMobile } from "react-device-detect";

const { Title } = Typography;

const Gretting = () => {
  return (
    <Col
      xs={24}
      md={24}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: isMobile && 10,
      }}
    >
      <Title
        level={isMobile ? 2 : 1}
        style={{ margin: 0, color: "#502064" }}
        className="favTitle"
      >
        Welcome to my WebSite
      </Title>
    </Col>
  );
};

export default Gretting;
