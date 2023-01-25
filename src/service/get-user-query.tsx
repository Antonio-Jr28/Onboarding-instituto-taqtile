import { gql } from '@apollo/client'

export const getUsersQuery = gql`
query UsersList($data: PageInput){
  users(data: $data) {
    nodes{
      name
      email
      id
    }
    pageInfo{
      offset
      limit
      hasNextPage
      hasPreviousPage
    }
  }
}
`;
