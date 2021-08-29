import { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";

export default function Home({ serverUrl }) {
  const [slug, setSlug] = useState("");
  return (
    <Layout setSlug={setSlug}>
      <div className="my-6 bg-blue-300 mx-5 text-center p-4 rounded shadow sm:pt-7">
        <h1 className="text-2xl sm:text-3xl">
          Acorta tus url de manera sencilla
        </h1>
        <Form serverUrl={serverUrl} slug={slug} setSlug={setSlug} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const SERVER_URL = process.env.SERVER_URL || "";

  return {
    props: {
      serverUrl: SERVER_URL,
    },
  };
}
