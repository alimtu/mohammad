import { Col, Divider, Space, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const TitleComponent = ({ title, color, bgColor }) => {
  return (
    <Space>
      <Divider
        type="vertical"
        style={{
          backgroundColor: "#6ECB63",
          minWidth: 7,
          margin: 0,
          minHeight: 30,
          padding: 0,
        }}
      />
      <Title level={4} style={{ color: color ? color : "black", margin: 0 }}>
        {title}
      </Title>
    </Space>
  );
};

export default TitleComponent;
