import { choosePortfolioVariant } from "./portfolioVariant";

beforeEach(() => localStorage.clear());

const choose = (options = {}) =>
  choosePortfolioVariant({
    storage: localStorage,
    random: () => 0.25,
    skyPercent: 50,
    search: "",
    ...options,
  });

test("assigns both sides of the split and remembers returning visitors", () => {
  expect(choose()).toBe("sky");
  expect(choose({ random: () => 0.9 })).toBe("sky");
  localStorage.clear();
  expect(choose({ random: () => 0.9 })).toBe("old");
});

test("preview overrides do not replace the visitor's assignment", () => {
  expect(choose()).toBe("sky");
  expect(choose({ search: "?variant=old" })).toBe("old");
  expect(choose()).toBe("sky");
});

test("zero and full rollout override previously stored assignments", () => {
  choose();
  expect(choose({ skyPercent: 0 })).toBe("old");
  expect(choose({ skyPercent: 100 })).toBe("sky");
});

test("blocked storage does not prevent a visitor from opening the site", () => {
  const storage = {
    getItem() {
      throw new Error("Blocked");
    },
    setItem() {
      throw new Error("Blocked");
    },
  };
  expect(choose({ storage })).toBe("sky");
});

test("invalid overrides and stale stored values are ignored", () => {
  localStorage.setItem("portfolio-design-v1", "invalid");
  expect(choose({ search: "?variant=invalid", random: () => 0.9 })).toBe("old");
});
