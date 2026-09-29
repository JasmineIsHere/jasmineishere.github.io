import { useState } from "react";
import styled from "styled-components";
import HeadingText from "../HeadingText";
import { colors } from "../../utils/colors";

const credentials = [
  {
    title: "Claude Code 101",
    issuer: "Claude Academy",
    date: "2026-09-28",
    dateLabel: "September 28, 2026",
    image: "/credentials/claude-code-101.png",
    url: "https://academy.claude.com/verify/05e8ff86c5ec308bd2167b6349779b77",
  },
];

const Section = styled.section`
  padding: 0 4rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 290px));
  gap: 1.5rem;
  margin-top: 1rem;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 290px));
  }
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 360px);
    justify-content: center;
  }
`;
const Card = styled.article`
  border: 1px solid currentColor;
  border-color: color-mix(in srgb, currentColor 25%, transparent);
  border-radius: 18px;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
  min-width: 0;
`;
const Badge = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
`;
const Details = styled.div`
  margin: 12px 0;
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 6px;
  }
  p {
    font-size: 14px;
    margin: 4px 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  padding: 8px 16px;
  border-radius: 10px;
  background: ${colors.btn_bg_grey};
  color: ${colors.text_black};
  font-size: 14px;
  text-decoration: none;
  &:hover {
    background: ${colors.btn_bg_grey_hover};
    color: ${colors.text_black};
  }
  &:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 4px;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-top: 10px;
  }
`;
const Expand = styled.button`
  margin-top: 1rem;
  border: 1px solid currentColor;
  border-radius: 10px;
  padding: 10px 16px;
  background: transparent;
  color: inherit;
  font-family: "Open Sans", sans-serif;
  &:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 4px;
  }
`;

export default function AiCredentials() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? credentials : credentials.slice(0, 3);
  return (
    <Section aria-label="AI Credentials">
      <HeadingText>AI Credentials</HeadingText>
      <Grid id="ai-credentials">
        {visible.map((credential) => (
          <Card key={credential.url}>
            <Badge
              src={credential.image}
              width="1474"
              height="998"
              alt={`${credential.title}, ${credential.issuer}. Course completed by Jasmine, issued ${credential.dateLabel}.`}
            />
            <Details>
              <h3>{credential.title}</h3>
              <p>{credential.issuer}</p>
              <p>Course completed</p>
              <p>
                <time dateTime={credential.date}>{credential.dateLabel}</time>
              </p>
            </Details>
            <Link
              href={credential.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${credential.title} credential (opens in a new tab)`}
            >
              View credential&nbsp; ↗
            </Link>
          </Card>
        ))}
      </Grid>
      {credentials.length > 3 && (
        <Expand
          aria-expanded={expanded}
          aria-controls="ai-credentials"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Show fewer credentials"
            : `View all credentials (${credentials.length})`}
        </Expand>
      )}
    </Section>
  );
}
