import React from "react";
import axiosClient from "../config/axios";
import Layout from "../components/Layout";
import Countdown from "react-countdown";
import { useRouter } from "next/router";

const Slug = ({ url }) => {
  const router = useRouter();
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      router.push(url);
      return <p className="text-xl">Redirigiendo...</p>;
    } else {
      return <p className="text-xl">Redirigiendo en: {seconds}</p>;
    }
  };

  return (
    <Layout>
      <div className="mt-6 bg-blue-300 mx-5 text-center p-4 rounded shadow">
        <Countdown date={Date.now() + 5000} renderer={renderer} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const SERVER_URL = process.env.SERVER_URL || "";
    const { url } = (
      await axiosClient(SERVER_URL).get(`/api/url/${params.slug}`)
    ).data;

    return {
      props: {
        url,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Slug;
