# Single Page React Application

This is a simplified single-page React application showcasing the New API LLMs Gateway.

## Project Structure

```
web/
├── src/
│   ├── App.jsx                    # Main application entry point
│   ├── index.jsx                  # React DOM render
│   ├── index.css                  # Global styles
│   ├── pages/
│   │   └── Home/
│   │       └── index.jsx          # Home page component
│   └── components/                # Place your custom components here
├── public/                        # Static assets
└── package.json
```

## Getting Started

### Installation

```bash
cd web
bun install
```

### Development

```bash
bun run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
bun run build
```

## Adding New Components

This project is structured to make it easy to add new React components.

### Method 1: Add Component to Home Page

1. Create your component in `src/components/` directory:

```jsx
// src/components/MyComponent.jsx
import React from 'react';
import { Card, Typography } from '@douyinfe/semi-ui';

const MyComponent = () => {
  return (
    <Card className='w-full max-w-2xl mx-auto mt-8 p-6'>
      <Typography.Title heading={3}>My Component</Typography.Title>
      <Typography.Paragraph>
        Your component content here
      </Typography.Paragraph>
    </Card>
  );
};

export default MyComponent;
```

2. Import and use it in `src/pages/Home/index.jsx`:

```jsx
import MyComponent from '../../components/MyComponent';

// Inside the Home component's return statement:
return (
  <div className='w-full overflow-x-hidden'>
    {/* Existing home content */}
    <MyComponent />
  </div>
);
```

### Method 2: Replace the Entire Home Page

Simply modify `src/pages/Home/index.jsx` with your own content:

```jsx
import React from 'react';

const Home = () => {
  return (
    <div className='w-full min-h-screen p-8'>
      {/* Your custom page content */}
    </div>
  );
};

export default Home;
```

### Method 3: Create Multiple Sections

You can organize multiple components in `src/pages/Home/index.jsx`:

```jsx
import React from 'react';
import Header from '../../components/Header';
import Features from '../../components/Features';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Header />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
```

## Available UI Components

This project uses [Semi Design](https://semi.design/), which provides a rich set of React components:

- Button, Card, Typography
- Input, Select, Form controls
- Modal, Drawer, Notification
- Table, List, Tree
- And many more...

### Example Usage

```jsx
import { Button, Card, Typography, Input } from '@douyinfe/semi-ui';
import { IconGithubLogo } from '@douyinfe/semi-icons';

const MyComponent = () => {
  return (
    <Card>
      <Typography.Title>Hello World</Typography.Title>
      <Input placeholder="Enter text" />
      <Button icon={<IconGithubLogo />} type="primary">
        Click Me
      </Button>
    </Card>
  );
};
```

## Styling

### Tailwind CSS

The project includes Tailwind CSS for utility-first styling:

```jsx
<div className='flex items-center justify-center gap-4 p-8'>
  <Button className='!rounded-full px-8'>Click Me</Button>
</div>
```

### Custom CSS

Global styles are in `src/index.css`. You can:
- Add custom CSS classes
- Override Semi Design styles
- Use CSS variables for theming

### Dark Mode

The application supports dark mode through Semi Design's theme system. CSS variables like `var(--semi-color-bg-0)` automatically adapt to the theme.

## Language Support

The current implementation includes built-in Chinese/English language toggle. You can extend this or simplify it based on your needs.

## Tips

1. **Keep it Simple**: Start with small components and gradually build up
2. **Use Semi Design**: Leverage the built-in components for faster development
3. **Responsive Design**: Use Tailwind's responsive classes (`md:`, `lg:`, etc.)
4. **Component Organization**: Create folders for complex components with multiple files

## Example: Adding a Contact Form

```jsx
// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { Card, Form, Button } from '@douyinfe/semi-ui';

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <Card className='max-w-md mx-auto mt-8'>
      <Form onSubmit={handleSubmit}>
        <Form.Input field='name' label='Name' required />
        <Form.Input field='email' label='Email' type='email' required />
        <Form.TextArea field='message' label='Message' required />
        <Button htmlType='submit' type='primary' block>
          Send Message
        </Button>
      </Form>
    </Card>
  );
};

export default ContactForm;
```

## Resources

- [Semi Design Documentation](https://semi.design/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## License

AGPL-3.0 License - see the license headers in source files for details.
