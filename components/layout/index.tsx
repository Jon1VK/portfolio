import Navigation from '../navigation';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navigation></Navigation>
      <main className="container">{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
}
