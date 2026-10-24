import './globals.css';

export const metadata = {
  title: 'Hope For Kids | Transparent Child Welfare NGO',
  description: 'Emergency shelter, nutritious meals, and education for children in need.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}