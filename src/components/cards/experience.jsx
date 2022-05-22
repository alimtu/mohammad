import { Card, Col, Space, Timeline, Typography } from "antd";
import React from "react";
import TitleComponent from "./title-component";

const { Text, Title } = Typography;

const experienceData = [
  {
    date: "OnlineTest | 2020 - 2021",
    details: "Full Stack Programmer",
    location: "Mazandaran",
    color: "green",
  },
  {
    date: "Profile | 2021 - 2022",
    details: "Full Stack Programmer",
    location: "Mazandaran",
    color: "red",
  },
  {
    date: "Seentra | 2019 - 2022",
    details: "Full Stack Programmer",
    location: "Mazandaran - Shirgah",
    color: "blue",
  },
  {
    date: "Certification | 2020 - 2021",
    details: "Full Stack Programmer",
    location: "Mazandaran",
    color: "green",
  },
  {
    date: "Seentra | 2019 - 2022",
    details: "Full Stack Programmer",
    location: "Mazandaran",
    color: "red",
  },
  {
    date: "Accounting | 2021 - 2022",
    details: "Full Stack Programmer",
    location: "Mazandaran",
    color: "blue",
  },
  {
    date: ". . .",
    details: "",
    location: "",
    color: "green",
  },
];

const ExperienceCard = () => {
  return (
    <Card
      title={
        <TitleComponent title={"Experience"} color="black" bgColor={"orange"} />
      }
      style={{ borderRadius: 5 }}
      hoverable
      className="myCard"
    >
      <Timeline mode="alternate">
        {experienceData.map((t, inx) => (
          <Timeline.Item color={t.color}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text className="textFonts">{t.date}</Text>
              <Text className="textFonts" strong>
                {t.details}
              </Text>
              <Text className="textFonts">{t.location}</Text>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default ExperienceCard;
