export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      {/* <Navigation></Navigation> */}
      {/* <Header></Header> */}
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
}
