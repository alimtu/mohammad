import { Card, Col, Typography, Image, Avatar, Space, Tag } from "antd";
import React from "react";
import TitleComponent from "./title-component";

const { Text, Title } = Typography;

const techArray = [
  "React JS",
  "React Native",
  "JavaScript",
  "Next JS",
  "HTML 5",
  "CSS 3",
  "Node JS",
  "SQL",
  "Git",
  "SASS",
  "Xamarin",
  "PWA",
  "Android",
  "Apple",
];

const TechStack = () => {
  return (
    <Card
      title={
        <TitleComponent title={"Tech Stack"} color="black" bgColor={"orange"} />
      }
      style={{ borderRadius: 5 }}
      hoverable
      className="myCard"
    >
      <Space
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        size="middle"
        align="center"
      >
        {techArray.map((t, inx) => (
          <Tag
            color="#55acee"
            key={inx}
            style={{
              borderRadius: 5,
              height: 35,
              minWidth: 60,
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Text className="textFonts" style={{ color: "white" }}>
              {t}
            </Text>
          </Tag>
        ))}
      </Space>
    </Card>
  );
};

export default TechStack;
