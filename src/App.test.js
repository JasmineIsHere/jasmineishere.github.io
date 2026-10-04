import { fireEvent, render, screen } from "@testing-library/react";
import Router from "./Router";
import { ThemeProvider } from "./contexts/ThemeContext";
beforeEach(() => {
  window.scrollTo = jest.fn();
  window.matchMedia = () => ({ matches: false });
});

test("a star opens project details and Escape returns focus to the sky", () => {
  render(
    <ThemeProvider>
      <Router />
    </ThemeProvider>,
  );
  const star = screen.getByRole("button", { name: "Explore TGIF Screensaver" });
  fireEvent.click(star);
  expect(
    screen.getByRole("dialog", { name: "TGIF Screensaver" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Explore project" })).toHaveAttribute(
    "href",
    "#/projects/tgif-screensaver",
  );
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(star).toHaveFocus();
});

test("about and skills are available from the header instead of stars", () => {
  render(
    <ThemeProvider>
      <Router />
    </ThemeProvider>,
  );
  expect(
    screen.queryByRole("button", { name: "Explore About me" }),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: "Explore My toolkit" }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "About & skills" }));
  expect(screen.getByRole("dialog", { name: "About me" })).toHaveTextContent(
    "Singapore",
  );
  expect(
    screen.getByRole("heading", { name: "My toolkit" }),
  ).toBeInTheDocument();
});

test("Ninja Van displays its projects without linking to the old work page", () => {
  render(
    <ThemeProvider>
      <Router />
    </ThemeProvider>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Explore At Ninja Van" }));
  const panel = screen.getByRole("dialog", { name: "At Ninja Van" });
  expect(panel).toHaveTextContent("Support page revamp");
  expect(panel).toHaveTextContent("NinjaChat");
  expect(panel).toHaveTextContent("Ninja Flexi");
  expect(panel.querySelector('a[href="#/work"]')).toBeNull();
});
