
import "./globals.css";



export const metadata = {
  title: 'My awesome PWA app',
  description: 'Best PWA app in the world!',
  viewport: 'width=device-width,initial-scale=1',
  favicon: '/favicon.ico',
  themeColor: '#ffffff',
  appleTouchIcons: [
    { sizes: "180x180", href: "/icons/touch-icon-iphone.png" },
    { sizes: "152x152", href: "/icons/touch-icon-ipad.png" },
    { sizes: "167x167", href: "/icons/touch-icon-iphone-retina.png" },
    { sizes: "167x167", href: "/icons/touch-icon-ipad-retina.png" },
  ],
  manifest: "/manifest.json",
  twitterCard: "summary",
  twitterUrl: "https://yourdomain.com",
  twitterTitle: "My awesome PWA app",
  twitterDescription: "Best PWA app in the world!",
  twitterImage: "/icons/twitter.png",
  twitterCreator: "@DavidWShadow",
  ogType: "website",
  ogTitle: "My awesome PWA app",
  ogDescription: "Best PWA app in the world!",
  ogSiteName: "My awesome PWA app",
  ogUrl: "https://yourdomain.com",
  ogImage: "/icons/og.png",
  appleStartupImages: [
    { sizes: "2048x2732", href: "/images/apple_splash_2048.png" },
    { sizes: "1668x2224", href: "/images/apple_splash_1668.png" },
    { sizes: "1536x2048", href: "/images/apple_splash_1536.png" },
    { sizes: "1125x2436", href: "/images/apple_splash_1125.png" },
    { sizes: "1242x2208", href: "/images/apple_splash_1242.png" },
    { sizes: "750x1334", href: "/images/apple_splash_750.png" },
    { sizes: "640x1136", href: "/images/apple_splash_640.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
  
    <html lang="en" suppressHydrationWarning>
      <body >
        {children}
      </body>
    </html>
  
  );
}
