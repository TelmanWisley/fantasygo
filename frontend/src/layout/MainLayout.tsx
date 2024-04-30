import { HeaderContainer } from "containers/Header";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayoutComponent: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="w-full h-full">
      <HeaderContainer />
      <div className="w-full h-[calc(100vh-80px)]">{children}</div>
    </main>
  );
};

export const withMainLayout =
  (Page: React.FC): React.FC =>
  () => {
    return (
      <MainLayoutComponent>
        <Page />
      </MainLayoutComponent>
    );
  };
