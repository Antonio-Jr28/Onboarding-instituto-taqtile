import { gql } from "@apollo/client";
export const createUser = gql`
    mutation createUser($data: UserInput!) {
        createUser(data: $data) {
            name
            phone
            birthDate
            email
            role
        }
    }
`;