import { LoginView } from "components/views";
import { PATH } from "consts";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router";
import { ILoginData } from "types";
import { useMutation, gql, ApolloError } from "@apollo/client";
import { useContext, useCallback } from "react";
import { MainContext } from "context";
import { client, updateClientToken } from "utils";
import { toast } from "react-toastify";

function useLoginMutation() {
  const LOGIN_MUTATION = gql`
    mutation LoginResolver($data: LoginInputDto!) {
      loginMutation(data: $data)
    }
  `;
  return useMutation(LOGIN_MUTATION, { client });
}

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const { updatePhoneNumber } = useContext(MainContext);
  const [login] = useLoginMutation();

  const onSubmit = useCallback(
    async (value: ILoginData, actions: FormikHelpers<ILoginData>) => {
      try {
        const { data } = await login({
          variables: {
            data: {
              ...value,
            },
          },
        });
        localStorage.setItem("token", data.loginMutation);
        updateClientToken();
        updatePhoneNumber(value.phoneNumber);
        navigate(PATH.LEAGUE);
      } catch (error) {
        if (error instanceof ApolloError) toast.error(error.message);
      } finally {
        actions.resetForm();
      }
    },
    [login, navigate, updatePhoneNumber]
  );

  return <LoginView onSubmit={onSubmit} />;
};
