import { Card, Col, Space, Timeline, Typography } from "antd";
import React from "react";
import TitleComponent from "./title-component";

const { Text, Title } = Typography;

const experienceData = [
  {
    date: "September 2019 - 2022",
    details: "Teacher",
    location: "Golestan, Iran",
    color: "green",
  },
  {
    date: "September 2021 - Present",
    details: "Programmer",
    location: "Mazandaran, Iran",
    color: "red",
  },
];

const EducationCard = () => {
  return (
    <Card
      title={
        <TitleComponent title={"Education"} color="black" bgColor={"orange"} />
      }
      style={{ borderRadius: 5 }}
      hoverable
      className="myCard"
    >
      <Timeline>
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

export default EducationCard;
