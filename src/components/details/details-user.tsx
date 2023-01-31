import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { getDetails } from '../../service/get-user-details-query';
import { ContainerUser, ListUser, SectionUser, SortedList, TitleUser } from './details-user-style';



export const DetailsUser = () => {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    
    const { data } = useQuery(getDetails, {
        context: {
            headers: {
                authorization: token,
            },
        },
        variables: {
            id,
        },
    }); 
    
    return (
       <SectionUser>
        <TitleUser>Detalhes do Usuário</TitleUser>
        <ContainerUser>
            <SortedList>
                <ListUser>Nome do Usuário: {data?.user?.name} </ListUser>
                <ListUser>E-mail do Usuário: {data?.user?.email} </ListUser>
                <ListUser>Telefone: {data?.user?.phone} </ListUser>
                <ListUser>Aniversario: {data?.user?.birthdaDate} </ListUser>
                <ListUser>id: {data?.user?.id} </ListUser>
                <ListUser>Permissão: {data?.user?.role} </ListUser>
                
            </SortedList>
        </ContainerUser>

       </SectionUser>
    );
};