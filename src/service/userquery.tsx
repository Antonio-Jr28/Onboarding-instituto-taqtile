import { gql } from '@apollo/client'

export const UserQuery = gql`
    query UsersList($data: PageInput){
    users(data: $data) {
        nodes{
        name
        email
      }
      pageInfo{
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
      }
    `