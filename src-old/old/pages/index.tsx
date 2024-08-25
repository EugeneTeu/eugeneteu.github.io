import {
  ThemeContextProvider,
  useTheme,
} from "@/old/components/context/theme.context";
import HomePage from "@/components/content/HomePage.react";
import PageWrapper from "@/old/components/PageWrapper.react";

export default function Home() {
  return (
    <ThemeContextProvider>
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    </ThemeContextProvider>
  );
}
