import "./globals.css";

export const metadata = {
  title: "Laya Myadam - AI Engineer Portfolio",
  description: "AI Engineer specializing in Machine Learning, NLP, and Reinforcement Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}