# Excel Clone

A modern, feature-rich spreadsheet application built with Next.js and React, offering a familiar Excel-like experience in the browser.

## Features

- 📊 Grid-based spreadsheet interface
- 🎨 Modern, responsive UI with dark/light mode support
- ⚡ Virtualized rendering for optimal performance
- 🎯 Cell selection and editing
- 🎨 Styling and formatting options
- ⌨️ Keyboard navigation support

## Tech Stack

- **Framework**: Next.js 15.1.0
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Virtualization**: TanStack Virtual
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/stringsaeed/excel-clone.git
cd excel-clone
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm knip` - Run dependency analysis

## Project Structure

```
excel-clone/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and shared logic
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
