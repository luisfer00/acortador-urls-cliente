import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosClient from "../config/axios";
import Error from "./Error";

const Form = ({ serverUrl, slug, setSlug }) => {
  const [cargando, setCargando] = useState(false);
  const validationSchema = Yup.object().shape({
    url: Yup.string().url("Url invalida").required("La url es obligatoria"),
  });

  const formik = useFormik({
    initialValues: {
      url: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ url }) => {
      try {
        setCargando(true);
        const data = (
          await axiosClient(serverUrl).post("/api/url", {
            url,
          })
        ).data;
        setSlug(data.slug);
      } catch (e) {
      } finally {
        setCargando(false);
      }
    },
  });

  return (
    <>
      {!slug ? (
        <>
          {formik.errors.url && <Error errorMsg={formik.errors.url} />}
          <form className="pt-7" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="text-lg font-semibold text-left" htmlFor="url">
                Url:{" "}
              </label>
              <input
                className="mb-4 p-1 text-xl w-full sm:mx-4 sm:mb-0"
                type="url"
                name="url"
                id="url"
                placeholder="Escribe una url válida"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.url}
              />
              <input
                className={`text-white cursor-pointer bg-blue-800 rounded py-2 ${
                  cargando && "opacity-60 cursor-not-allowed"
                } sm:px-4`}
                type="submit"
                value={cargando ? "Cargando..." : "Crear Url"}
                disabled={cargando}
              />
            </div>
          </form>
        </>
      ) : (
        <p className="text-base pt-5 sm:text-lg">
          Tu url acortada es:{" "}
          <a
            href={`${window.location.origin}/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >{`${window.location.origin}/${slug}`}</a>
        </p>
      )}
    </>
  );
};

export default Form;
