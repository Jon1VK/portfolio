import Navigation from '../navigation';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navigation></Navigation>
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
}
