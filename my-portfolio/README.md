# My Portfolio

This is a portfolio website built with React and TypeScript.

## Project Structure

```
my-portfolio
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PortfolioItem.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Components

### Header.tsx

```tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      {/* Header content */}
    </header>
  );
};

export default Header;
```

### Footer.tsx

```tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Footer content */}
    </footer>
  );
};

export default Footer;
```

### PortfolioItem.tsx

```tsx
import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default PortfolioItem;
```

## Pages

### Home.tsx

```tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Home page content */}
    </div>
  );
};

export default Home;
```

### About.tsx

```tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      {/* About page content */}
    </div>
  );
};

export default About;
```

### Contact.tsx

```tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Contact page content */}
    </div>
  );
};

export default Contact;
```

## App.tsx

```tsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
```

## index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src"
  ]
}
```

## package.json

```json
{
  "name": "my-portfolio",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0"
  },
  "devDependencies": {
    "@types/react": "^17.0.38",
    "@types/react-dom": "^17.0.11",
    "@types/react-router-dom": "^5.1.9",
    "typescript": "^4.4.3"
  }
}
```

## README.md

This is the documentation for the My Portfolio project. It contains information about the project structure, components, pages, and configuration files.

To run the project, follow these steps:

1. Install the dependencies by running `npm install`.
2. Start the development server by running `npm start`.
3. Open your browser and navigate to `http://localhost:3000` to view the portfolio website.

Feel free to customize the components, pages, and styles to fit your needs. Happy coding!