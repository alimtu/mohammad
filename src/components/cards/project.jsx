import { Button, Card, Col, Space, Image, Typography, Row } from "antd";
import React from "react";
import seentra from "../../assest/images/seentra.PNG";
import profile from "../../assest/images/profile.jpg";
import certificate from "../../assest/images/certificate.PNG";
import aboutali from "../../assest/images/ali.PNG";
import onlineTest from "../../assest/images/onlineTest.jpg";
import accounting from "../../assest/images/accounting.jpg";
import TitleComponent from "./title-component";

const { Text, Title } = Typography;

const projectsData = [
  {
    title: "Seentra",
    text: "Sintra system is a comprehensive system for Shirgah steel plant.This system is a complete system and includes 13 different modules including finance, administration, accounting, warehouse, management and etc... , The accesses to this system are designed to be completely dynamic.",
    link: "https://seentra.ir",
    image: seentra,
  },
  {
    title: "OnlineTest",
    text: "The virtual test system is a system on 3 web platforms, Android and IOS. The admin panel of this system is web-based and the panel of professors and students is under Android and IOS. In this system, students are defined for professors in each semester and professors can design exams for their students. We have tried to do everything in this system dynamically. (Even the level of questions in each test and the order of the options in each question can be changed).",
    image: onlineTest,
  },
  {
    title: "Profile",
    text: "The Profile System is for the faculty members of Mazandaran University. Users can have their own personal profile and edit their profile as dynamically as LinkedIn. Users can upload their personal information, files, resumes and scientific articles to their profiles and make them visible to the public",
    link: "https://profiles.mazums.ac.ir",
    image: profile,
  },

  {
    title: "AboutAli",
    text: "The 'About Ali' WebSite is for my fellow programmer. The design of this site is great and in addition to enjoying watching this site, you can register your software projects on this site.",
    link: "https://www.aboutali.ir",
    image: aboutali,
  },
  {
    title: "Certificate",
    text: "It is a system designed for Mazandaran University of Medical Sciences that is used to design forms, certificates, verdicts, etc. in a completely dynamic and D&D manner. Users of this system no longer deal with paper letters, and everything that can be done in office paper letters can be done systematically in this system.",
    link: "https://cert.mazums.ac.ir",
    image: certificate,
  },
  {
    title: "Accounting",
    text: "The platform system is in fact a basic system and location of employee information and can provide various APIs to use this information to other systems.",
    link: "https://webacc.mazums.ac.ir",
    image: accounting,
  },
];

const CardProject = ({ title, text, image, link }) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
      hoverable
      className="projectCard"
    >
      <Space
        direction="vertical"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        size="middle"
      >
        <Image
          preview={false}
          src={image}
          style={{ borderRadius: 5, maxHeight: 140, minHeight: 140 }}
        />
        <Title level={2} style={{ margin: 0 }}>
          {title}
        </Title>
        <Text
          className="textFontsTwo"
          style={{ textAlign: "center", display: "flex", fontSize: "larger" }}
        >
          {text}
        </Text>
        <Button type="primary" size="large">
          <a target={"_blank"} href={link}>
            <Text className="textFontsTwo" style={{ color: "white" }}>
              View Work Sample
            </Text>
          </a>
        </Button>
      </Space>
    </Card>
  );
};

const ProjectsCard = () => {
  return (
    <Card
      title={
        <TitleComponent
          title={"Some of Our Team Projects"}
          color="black"
          bgColor={"orange"}
        />
      }
      style={{ borderRadius: 5 }}
      hoverable
      className="myCard"
    >
      <Row gutter={[25, 25]}>
        {projectsData.map((t, inx) => (
          <Col md={8} xs={24} key={inx}>
            <CardProject
              title={t.title}
              text={t.text}
              image={t.image}
              link={t.link}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default ProjectsCard;
