import type { Metadata } from 'next';
import './globals.css';
import { AppProviders } from '@/context/AppProviders';
import { MainLayoutWrapper } from '@/components/layout/MainLayoutWrapper';

export const metadata: Metadata = {
  title: 'Bông Shop Decor | Đồ Thủ Công Mỹ Nghệ & Trang Trí Nhà Cửa Tinh Tế',
  description: 'Bông Shop Decor - Chuyên cung cấp đồ thủ công mỹ nghệ, gốm sứ mộc mạc và nội thất trang trí gia dụng thủ công tinh xảo chuẩn phong cách sống xanh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <AppProviders>
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
