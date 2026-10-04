const STORAGE_KEY = "portfolio-design-v1";

export function choosePortfolioVariant({
  search,
  storage,
  random = Math.random,
  skyPercent = 50,
}) {
  const override = new URLSearchParams(search).get("variant");
  if (override === "old" || override === "sky") return override;

  // Rollout endpoints also move visitors who already have an assignment.
  if (skyPercent === 0) return "old";
  if (skyPercent === 100) return "sky";

  try {
    const saved = storage?.getItem(STORAGE_KEY);
    if (saved === "old" || saved === "sky") return saved;
  } catch {
    // Browsers may deny storage; the current visit can still participate.
  }

  const variant = random() < skyPercent / 100 ? "sky" : "old";
  try {
    storage?.setItem(STORAGE_KEY, variant);
  } catch {
    // Without storage, the assignment lasts until the next page load.
  }
  return variant;
}

export function getPortfolioVariant() {
  let storage;
  try {
    storage = window.localStorage;
  } catch {
    storage = null;
  }
  const configured = process.env.REACT_APP_SKY_PERCENT;
  const parsed =
    configured === undefined || configured.trim() === ""
      ? 50
      : Number(configured);
  const skyPercent =
    Number.isFinite(parsed) && parsed >= 0 && parsed <= 100 ? parsed : 50;
  return choosePortfolioVariant({
    search: window.location.search,
    storage,
    skyPercent,
  });
}
