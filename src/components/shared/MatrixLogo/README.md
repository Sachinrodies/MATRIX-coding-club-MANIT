# MatrixLogo Component

A reusable React component that displays the Matrix logo.

## Usage

```tsx
import MatrixLogo from './MatrixLogo';

// Basic usage
<MatrixLogo />

// With custom className
<MatrixLogo className="w-12 h-12" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | "w-10 h-10" | Custom CSS classes to apply to the logo image |

## Features

- Displays the Matrix logo from the assets directory
- Accepts custom className for styling
- Default size is 10x10 (w-10 h-10) using Tailwind CSS classes

## Dependencies

- React
- Tailwind CSS (for default styling) 