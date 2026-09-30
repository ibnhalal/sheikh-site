import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SplashScreen from "@/components/SplashScreen";

export const metadata = {
  title: "موقع لفضيلة الشيخ محمد زين بن آدم",
  description:
    "المنصة العلمية الشاملة لنشر الشروحات، الدروس والمحاضرات المبنية على الكتاب والسنة بفهم سلف الأمة في شتى العلوم الشرعية واللغوية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <SplashScreen />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
