# 快速开始 / Quick Start

## 项目说明 / Project Description

这是一个精简的单页面 React 应用，保留了原项目的首页展示内容，已删除其他页面和复杂的路由逻辑，方便您快速开始开发自己的 React 组件。

This is a streamlined single-page React application that keeps the original home page content. Other pages and complex routing logic have been removed, making it easy for you to quickly start developing your own React components.

## 项目结构 / Project Structure

```
web/
├── src/
│   ├── App.jsx                    # 应用主入口 / Main app entry
│   ├── index.jsx                  # React 渲染入口 / React render entry
│   ├── index.css                  # 全局样式 / Global styles
│   ├── pages/
│   │   └── Home/
│   │       └── index.jsx          # 首页组件 / Home page component
│   └── components/                # 在这里添加您的组件 / Add your components here
├── public/                        # 静态资源 / Static assets
├── package.json
└── README.md
```

## 安装和运行 / Installation and Running

### 开发模式 / Development Mode

```bash
cd web
bun install
bun run dev
```

访问 http://localhost:5173

### 生产构建 / Production Build

```bash
bun run build
```

## 如何添加新组件 / How to Add New Components

### 方法一：创建独立组件 / Method 1: Create Independent Component

1. 在 `src/components/` 目录下创建新文件：

Create a new file in `src/components/` directory:

```jsx
// src/components/MyComponent.jsx
import React from 'react';
import { Card, Typography, Button } from '@douyinfe/semi-ui';

const MyComponent = () => {
  return (
    <Card className='max-w-4xl mx-auto mt-8 p-6'>
      <Typography.Title heading={3}>我的组件</Typography.Title>
      <Typography.Paragraph>
        这是我的自定义组件内容
      </Typography.Paragraph>
      <Button type='primary'>点击我</Button>
    </Card>
  );
};

export default MyComponent;
```

2. 在 `src/App.jsx` 中导入使用：

Import and use in `src/App.jsx`:

```jsx
import React from 'react';
import Home from './pages/Home';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className='w-full min-h-screen'>
      <Home />
      <MyComponent />
    </div>
  );
}

export default App;
```

### 方法二：直接修改首页 / Method 2: Modify Home Page Directly

直接编辑 `src/pages/Home/index.jsx` 文件，添加或修改内容。

Directly edit `src/pages/Home/index.jsx` file to add or modify content.

### 方法三：完全自定义 / Method 3: Complete Customization

替换 `src/pages/Home/index.jsx` 的全部内容：

Replace all content in `src/pages/Home/index.jsx`:

```jsx
import React from 'react';
import { Button, Card } from '@douyinfe/semi-ui';

const Home = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center p-8'>
      <Card className='max-w-md'>
        <h1 className='text-4xl font-bold mb-4'>欢迎使用</h1>
        <p className='text-lg mb-6'>这是您的自定义主页</p>
        <Button type='primary' size='large' block>
          开始使用
        </Button>
      </Card>
    </div>
  );
};

export default Home;
```

## 可用的 UI 组件库 / Available UI Component Library

本项目使用 [Semi Design](https://semi.design/zh-CN/) 组件库，提供丰富的 React 组件：

This project uses [Semi Design](https://semi.design/) component library with rich React components:

- **基础组件 / Basic**: Button, Icon, Typography
- **表单组件 / Form**: Input, Select, DatePicker, Form
- **数据展示 / Data Display**: Table, Card, List, Tree
- **反馈组件 / Feedback**: Modal, Toast, Notification
- **导航组件 / Navigation**: Menu, Tabs, Pagination
- 更多... / And more...

### 示例用法 / Example Usage

```jsx
import { Button, Card, Typography, Input, Space } from '@douyinfe/semi-ui';
import { IconStar, IconHeart } from '@douyinfe/semi-icons';

const Example = () => {
  return (
    <Card>
      <Typography.Title>标题 / Title</Typography.Title>
      <Space>
        <Input placeholder='输入内容 / Enter text' />
        <Button icon={<IconStar />} type='primary'>
          收藏 / Star
        </Button>
        <Button icon={<IconHeart />}>
          点赞 / Like
        </Button>
      </Space>
    </Card>
  );
};
```

## 样式方案 / Styling Solutions

### Tailwind CSS

使用 Tailwind CSS 工具类快速构建界面：

Use Tailwind CSS utility classes for rapid UI development:

```jsx
<div className='flex items-center justify-center gap-4 p-8 bg-gray-100 rounded-lg'>
  <Button className='!rounded-full px-8'>按钮</Button>
</div>
```

常用类名 / Common Classes:
- 布局 / Layout: `flex`, `grid`, `block`, `inline-block`
- 间距 / Spacing: `p-4` (padding), `m-4` (margin), `gap-4`
- 尺寸 / Size: `w-full`, `h-screen`, `max-w-md`
- 颜色 / Color: `bg-blue-500`, `text-white`
- 响应式 / Responsive: `md:flex`, `lg:text-xl`

### 自定义 CSS / Custom CSS

在 `src/index.css` 中添加全局样式：

Add global styles in `src/index.css`:

```css
.my-custom-class {
  background: linear-gradient(to right, #667eea, #764ba2);
  padding: 2rem;
  border-radius: 1rem;
}
```

## 主题支持 / Theme Support

应用支持亮色/暗色主题，使用 Semi Design 的主题变量：

The app supports light/dark themes using Semi Design theme variables:

```jsx
<div style={{ 
  background: 'var(--semi-color-bg-0)',
  color: 'var(--semi-color-text-0)' 
}}>
  这个容器会自动适应主题
</div>
```

## 常见任务示例 / Common Task Examples

### 1. 添加联系表单 / Add Contact Form

```jsx
// src/components/ContactForm.jsx
import React from 'react';
import { Card, Form, Button } from '@douyinfe/semi-ui';

const ContactForm = () => {
  const handleSubmit = (values) => {
    console.log('表单提交:', values);
  };

  return (
    <Card className='max-w-md mx-auto mt-8'>
      <Form onSubmit={handleSubmit}>
        <Form.Input field='name' label='姓名 / Name' required />
        <Form.Input field='email' label='邮箱 / Email' type='email' required />
        <Form.TextArea field='message' label='留言 / Message' required />
        <Button htmlType='submit' type='primary' block>
          提交 / Submit
        </Button>
      </Form>
    </Card>
  );
};

export default ContactForm;
```

### 2. 添加产品展示卡片 / Add Product Display Card

```jsx
// src/components/ProductCard.jsx
import React from 'react';
import { Card, Button, Space, Typography } from '@douyinfe/semi-ui';
import { IconStar } from '@douyinfe/semi-icons';

const ProductCard = ({ title, description, price, image }) => {
  return (
    <Card
      className='w-72'
      cover={
        <img 
          alt={title} 
          src={image}
          className='w-full h-48 object-cover'
        />
      }
      footerLine
      footer={
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Typography.Text strong style={{ fontSize: 18 }}>
            ¥{price}
          </Typography.Text>
          <Button type='primary' icon={<IconStar />}>
            购买 / Buy
          </Button>
        </Space>
      }
    >
      <Typography.Title heading={5}>{title}</Typography.Title>
      <Typography.Paragraph>{description}</Typography.Paragraph>
    </Card>
  );
};

export default ProductCard;
```

### 3. 创建多列布局 / Create Multi-column Layout

```jsx
// src/components/FeatureSection.jsx
import React from 'react';
import { Card, Typography } from '@douyinfe/semi-ui';

const features = [
  { title: '快速 / Fast', description: '闪电般的性能' },
  { title: '简单 / Simple', description: '易于使用' },
  { title: '强大 / Powerful', description: '功能丰富' },
];

const FeatureSection = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      <Typography.Title className='text-center mb-8'>
        特性 / Features
      </Typography.Title>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {features.map((feature, index) => (
          <Card key={index} className='text-center'>
            <Typography.Title heading={4}>
              {feature.title}
            </Typography.Title>
            <Typography.Paragraph>
              {feature.description}
            </Typography.Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
```

## 开发提示 / Development Tips

1. **从小做起 / Start Small**: 先创建简单组件，逐步增加复杂度
2. **使用现有组件 / Use Existing Components**: 充分利用 Semi Design 组件库
3. **响应式设计 / Responsive Design**: 使用 Tailwind 的 `md:`, `lg:` 等断点
4. **组件化思维 / Component Thinking**: 将复杂界面拆分成小的可复用组件
5. **查看文档 / Check Documentation**: 遇到问题时查阅 Semi Design 和 Tailwind 文档

## 常用资源 / Useful Resources

- [Semi Design 中文文档](https://semi.design/zh-CN/)
- [Semi Design English Docs](https://semi.design/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [React 文档](https://react.dev/)
- [Vite 文档](https://vitejs.dev/)

## 下一步 / Next Steps

1. 运行开发服务器：`bun run dev`
2. 在浏览器中打开 http://localhost:5173
3. 修改 `src/pages/Home/index.jsx` 或创建新组件
4. 保存文件，页面会自动刷新

祝您开发愉快！ / Happy coding!
