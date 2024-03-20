import Home from "@/pages/home/Home";
import Layout from "@/widgets/Layout/Layout";

export default function Main() {
  return (
    <Layout type="login">
      <main className="container">
        <Home />
      </main>
    </Layout>
  );
}
