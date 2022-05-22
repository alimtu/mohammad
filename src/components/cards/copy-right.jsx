import { Card, Col, Typography, Image, Avatar, Space, Row } from "antd";
import React from "react";
import { isMobile } from "react-device-detect";
import { FaCopyright } from "react-icons/fa";

const { Text, Title } = Typography;

const CopyRight = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: isMobile ? 20 : 40,
        marginBottom: isMobile ? 20 : 40,
      }}
    >
      <Space align="center">
        <FaCopyright fontSize={25} style={{ color: "#A91079" }} />
        <Title level={4}>
          {isMobile
            ? "  Made With Mohammad Javad"
            : "Copyright 2022 Mohammad Javad , All Rights Reserved"}
        </Title>
      </Space>
    </div>
  );
};

export default CopyRight;
