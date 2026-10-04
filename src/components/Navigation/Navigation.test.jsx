import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";
import Navigation from "./index";

beforeEach(() => {
  window.matchMedia = () => ({ matches: false });
});

test.each([0, 1])(
  "name link %s returns a project visitor to the homepage",
  (index) => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/projects/pkCard"]}>
          <Routes>
            <Route path="/projects/pkCard" element={<Navigation />} />
            <Route path="/" element={<h1>Starry homepage</h1>} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );
    const links = screen.getAllByLabelText("Jasmine Tan — home");
    expect(links).toHaveLength(2);
    expect(links[index]).toHaveAttribute("href", "/");
    fireEvent.click(links[index]);
    expect(
      screen.getByRole("heading", { name: "Starry homepage" }),
    ).toBeInTheDocument();
  },
);
