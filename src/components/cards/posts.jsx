import { Button, Card, Col, Space, Image, Typography, Row, Tag } from "antd";
import React from "react";
import seentra from "../../assest/images/seentra.PNG";
import profile from "../../assest/images/profile.jpg";
import reactImage from "../../assest/images/react.png";
import nodeImage from "../../assest/images/nodejs.png";
import { isMobile } from "react-device-detect";
import TitleComponent from "./title-component";

const { Text, Title } = Typography;

const postData = [
  {
    title: "React 18 is now available on npm!",
    time: "3 month ago",
    text: "In our last post, we shared step-by-step instructions for upgrading your app to React 18. In this post, we’ll give an overview of what’s new in React 18, and what it means for the future.",
    tags: ["React JS", " React Native", "Next JS"],
    image: reactImage,
    link: "https://reactjs.org/blog/2022/03/29/react-v18.html",
  },
  {
    title: "Build a cryptocurrency with Node.js",
    time: "about 1 years ago",
    text: "A blockchain is a digital record of transactions that is shared among nodes of a computer network, powering cryptocurrencies and many decentralized applications. The blockchain is an innovative, decentralized, and distributed public ledger that keeps a record of a growing list of transactions known as blocks",
    tags: ["Node JS", "SQL", "SQL Server"],
    image: nodeImage,
    link: "https://blog.logrocket.com/build-cryptocurrency-node-js-blockchain/",
  },
];

const PostProject = ({ title, text, image, tags, time }) => {
  console.log(tags);
  return (
    <Card
      style={{
        display: "flex",
        borderRadius: 5,
      }}
      hoverable
      className="projectCard"
    >
      <Row justify="center">
        <Col xs={24} md={24}>
          <Space direction={isMobile ? "vertical" : "horizontal"} size="large">
            <Image
              src={image}
              style={{
                minHeight: 150,
                maxWidth: 250,
                borderRadius: 5,
                minWidth: 250,
              }}
            />
            <Space direction="vertical">
              <Row style={{ display: "flex", flexDirection: "column" }}>
                <Col
                  xs={24}
                  md={24}
                  style={
                    isMobile && { display: "flex", justifyContent: "center" }
                  }
                >
                  <Title
                    level={5}
                    style={{
                      marign: 0,
                      padding: 0,
                      fontSize: "25px",
                    }}
                  >
                    {title}
                  </Title>
                </Col>
                <Col
                  xs={24}
                  md={24}
                  style={
                    isMobile && { display: "flex", justifyContent: "center" }
                  }
                >
                  <Text className="textFonts">{time}</Text>
                </Col>
              </Row>
              <Text
                className="textFonts"
                style={isMobile && { display: "flex", textAlign: "center" }}
              >
                {text}
              </Text>
              <Space
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: isMobile && "center",
                }}
              >
                {tags.map((t, inx) => (
                  <Tag
                    color={
                      inx === 1 ? "#55acee" : inx === 0 ? "green" : "yellow"
                    }
                    key={inx}
                  >
                    {t}
                  </Tag>
                ))}
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

const PostsCard = () => {
  return (
    <Card
      title={
        <TitleComponent
          title={"Recent Posts"}
          color="black"
          bgColor={"orange"}
        />
      }
      style={{ borderRadius: 5, marginTop: 25 }}
      hoverable
      className="myCard"
    >
      <Row gutter={[25, 25]}>
        {postData.map((t, inx) => (
          <Col md={24} xs={24} key={inx} onClick={() => window.open(t.link)}>
            <PostProject
              title={t.title}
              time={t.time}
              text={t.text}
              image={t.image}
              tags={t.tags}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default PostsCard;
