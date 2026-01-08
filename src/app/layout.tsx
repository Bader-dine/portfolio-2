import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/components.css';
import Layout from '@/components/Layout/Layout';
import ChatWidget from '@/components/ChatBot/ChatWidget';

export const metadata: Metadata = {
  title: 'Bader Eddine Dakhli | Electrical & Automation Engineer',
  description: 'Professional portfolio of Bader Eddine Dakhli, an Electrical & Automation Engineer specializing in Robotics, Computer Vision, AI, and Industrial Automation.',
  keywords: ['Electrical Engineer', 'Automation Engineer', 'Robotics', 'Computer Vision', 'AI', 'Video Analytics', 'Bader Eddine Dakhli'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
        <ChatWidget />
      </body>
    </html>
  );
}
