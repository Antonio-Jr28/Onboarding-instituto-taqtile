import { gql } from "@apollo/client";

export const QueryLogar = gql`
    mutation login($data: LoginInput!) {
        login(data: $data) {
            token 
            user {
                email
            }
        }
    }
`;