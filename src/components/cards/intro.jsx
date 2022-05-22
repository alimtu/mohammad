import { Card, Col, Typography, Image, Avatar, Space } from "antd";
import React from "react";
import myPhoto from "../../assest/images/me.jpg";
import { isMobile } from "react-device-detect";

const { Text, Title } = Typography;

const IntroCard = () => {
  return (
    <Card
      style={{ justifyContent: "center", display: "flex", borderRadius: 5 }}
      hoverable
      className="myCard"
    >
      <Space direction="vertical" align="center">
        <Col style={{ border: "3px solid #4D96FF", borderRadius: "50%" }}>
          <Avatar
            src={myPhoto}
            size={200}
            className="avatar"
            style={{ border: "3px solid white" }}
          />
        </Col>
        <Title style={{ textAlign: "center", display: "flex" }} level={3}>
          Mohammad Javad
        </Title>
        {!isMobile ? (
          <Text
            className="textFonts"
            style={{ textAlign: "center", display: "flex" }}
          >
            Software Engineer • Open Source Enthusiast
          </Text>
        ) : (
          <Space direction="vertical" align="center">
            <Text
              className="textFonts"
              style={{ textAlign: "center", display: "flex" }}
            >
              Software Engineer
            </Text>
            <Text
              className="textFonts"
              style={{ textAlign: "center", display: "flex" }}
            >
              Open Source Enthusiast
            </Text>
          </Space>
        )}
      </Space>
    </Card>
  );
};

export default IntroCard;
