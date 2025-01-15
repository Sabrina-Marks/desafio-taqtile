import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export default LOGIN_MUTATION
