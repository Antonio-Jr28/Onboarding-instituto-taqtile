import { gql } from '@apollo/client';

export const getDetails = gql`
    query user($id: ID!) {
        user(id: $id) {
            id
            name
            phone
            birthDate
            email
            role
        }
    }
`;