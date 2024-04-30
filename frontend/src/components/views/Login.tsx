import { Field, Formik, FormikHelpers, Form } from "formik";
import * as Yup from "yup";

import logo from "assets/logo.svg";
import { ILoginData } from "types";

interface LoginProps {
  onSubmit: (value: ILoginData, actions: FormikHelpers<ILoginData>) => void;
}

export const LoginView: React.FC<LoginProps> = ({ onSubmit }) => {
  const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .matches(/^0/, "PhoneNumber must be start with 0"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /.*[A-Z].*/,
        "Password must contain at least one uppercase letter"
      ),
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Formik
        initialValues={{
          phoneNumber: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col items-center gap-4 p-10 desktop:w-1/3 tablet:w-2/3 mobile:w-full">
            <img src={logo} alt="logo" className="w-1/2 mb-8" />
            <div className="flex flex-col items-start w-full gap-2">
              <label className="text-gray-400">Phone Number</label>
              <Field
                className={`w-full focus:outline-none p-2 border rounded-md bg-gray-200 focus:bg-white ${
                  errors.phoneNumber && touched.phoneNumber
                    ? "border-pink-500"
                    : "border-gray-200"
                }`}
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <p className="text-pink-500 text-xs">{errors.phoneNumber}</p>
              ) : (
                <p className="text-transparent text-xs">_</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-gray-400">Password</label>
              <Field
                className={`w-full focus:outline-none p-2 border rounded-md bg-gray-200 focus:bg-white ${
                  errors.password && touched.password
                    ? "border-pink-500"
                    : "border-gray-200"
                }`}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {errors.password && touched.password ? (
                <p className="text-pink-500 text-xs">{errors.password}</p>
              ) : (
                <p className="text-transparent text-xs">_</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 transition-all py-2 rounded-md text-white text-2xl font-bold"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
