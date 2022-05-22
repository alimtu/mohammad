import { Card, Col, Typography, Image, Avatar, Space, Row } from "antd";
import React from "react";
import myPhoto from "../../assest/images/me.jpg";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { RiEarthFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";

const { Text, Title } = Typography;

const cardData = [
  {
    Icon: <AiOutlineWhatsApp fontSize={30} style={{ color: "#6BCB77" }} />,
    key: "WhatsApp",
    value: "+989010811996",
    color: "#6BCB77",
    link: "http://wasap.my/9010811996",
  },
  {
    Icon: <AiOutlineInstagram fontSize={30} style={{ color: "#FD5D5D" }} />,
    key: "Instagram",
    value: "m.jvds",
    color: "#FD5D5D",
    link: "https://www.instagram.com/m.jvds/",
  },
  {
    Icon: (
      <HiOutlineLocationMarker fontSize={30} style={{ color: "#F10086" }} />
    ),
    key: "Location",
    value: "Iran, Gorgan",
    color: "#F10086",
    link: "",
  },
  {
    Icon: <HiOutlineMail fontSize={30} style={{ color: "#F0A500" }} />,
    key: "Email",
    value: "m.jvds20@gmail.com",
    color: "#F0A500",
    link: `mailto:${"m.jvds20@gmail.com"}`,
  },
  {
    Icon: <RiEarthFill fontSize={30} style={{ color: "#4D77FF" }} />,
    key: "WebSite",
    value: "MohammadJavad.ir",
    color: "#4D77FF",
    link: "",
  },
  {
    Icon: <IoCallSharp fontSize={30} style={{ color: "#3DB2FF" }} />,
    key: "Call",
    value: "09010811996",
    color: "#4D77FF",
    link: `tel:${"+989010811996"}`,
  },
];

const ContactCard = () => {
  return (
    <Card style={{ borderRadius: 5 }} hoverable className="myCard">
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        {cardData.map((t, inx) => (
          <Col xs={24} md={24} key={inx} onClick={() => window.open(t.link)}>
            <Row justify="space-between">
              <Col>
                <Space>
                  {t.Icon}
                  <Text className="textFonts"> {t.key}</Text>
                </Space>
              </Col>
              <Col>
                <Text className="textFonts" style={{ color: "#D96098" }}>
                  {t.value}
                </Text>
              </Col>
            </Row>
          </Col>
        ))}
      </Space>
    </Card>
  );
};

export default ContactCard;
