import { BadgesContainer, BadgeCard } from "./styles";

const CertificationBadges = () => (
  <BadgesContainer className="certification-badges">
    {[
      {
        id: "f9b5446a-2e90-4ba8-8e0e-dd3a85708873",
        name: "AWS Certified Developer – Associate",
        image:
          "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      },
      {
        id: "46e5ca9a-57c4-41df-a261-fdca75abfe4e",
        name: "AWS Certified Cloud Practitioner",
        image:
          "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      },
    ].map((badge) => (
      <BadgeCard
        key={badge.id}
        href={`https://www.credly.com/badges/${badge.id}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`${badge.name} — view on Credly (opens in a new tab)`}
      >
        <img src={badge.image} alt="" width="105" height="105" />
        <span>{badge.name}</span>
        <small>Issuer: Amazon Web Services Training and Certification</small>
      </BadgeCard>
    ))}
  </BadgesContainer>
);

export default CertificationBadges;
