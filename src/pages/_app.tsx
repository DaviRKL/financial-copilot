import MainLayout from "@/components/layouts/MainLayout";
import { FinanceProvider } from "@/contexts/FinanceContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FinanceProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </FinanceProvider>
  );
}
