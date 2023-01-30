import { gql } from "@apollo/client";

export const createUser = gql`
    mutation createUser($data: UserInputType!) {
        createUser(data: $data) {
            name
            phone
            birthDate
            email
            role
        }
    }
`;