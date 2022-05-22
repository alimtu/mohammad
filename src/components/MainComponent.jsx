import React, { useEffect, useState } from "react";
import { Col, Row, Space } from "antd";
import IntroCard from "./cards/intro";
import ContactCard from "./cards/contact";
import TechStack from "./cards/tech-stack";
import ExperienceCard from "./cards/experience";
import EducationCard from "./cards/education";
import { isMobile } from "react-device-detect";
import ProjectsCard from "./cards/project";
import PostsCard from "./cards/posts";
import CopyRight from "./cards/copy-right";
import Gretting from "./cards/greeting";
import LoadingLottie from "../assest/lottie/loading.json";
import LottieFile from "./lottie";

const MainComponent = () => {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaiting(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return waiting ? (
    <Row
      style={{
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <LottieFile animationData={LoadingLottie} loop="false" />
    </Row>
  ) : (
    <Row style={{ padding: isMobile ? 10 : 40 }}>
      <Col md={8} xs={24} style={!isMobile && { marginRight: 40 }}>
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Gretting />
          <IntroCard />
          <ContactCard />
          <TechStack />
          <ExperienceCard />
          <EducationCard />
        </Space>
      </Col>
      <Col md={15} xs={24} style={isMobile && { marginTop: 25 }}>
        <ProjectsCard />
        <PostsCard />
        <CopyRight />
      </Col>
    </Row>
  );
};

export default MainComponent;
