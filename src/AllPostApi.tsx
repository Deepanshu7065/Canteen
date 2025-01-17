import axios from "axios"
import { baseUrl } from "./ApiEndPoint"
import { CanteenUserType, CreateOrderType, LoginType,  } from "./AllTypes"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const PostCanteenUserApi = () => {
    const queryClient = useQueryClient();
    const canteenUser = async ({ data }: { data: CanteenUserType }) => {

        const response = await axios.post(`${baseUrl}/canteen/create`, data)

        return response

    }
    return useMutation({
        mutationFn: canteenUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['canteen'] })

        }

    })

}


export const PostMenuItemApi = () => {
    const queryClient = useQueryClient();
    const menuItem = async ({ data }: { data: any }) => {

        const response = await axios.post(`${baseUrl}/menu/create`, data)

        return response

    }
    return useMutation({
        mutationFn: menuItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['menuitem'] })
        }

    })

}


export const PostOrderCreateApi = () => {
    const queryClient = useQueryClient();
    const orderCreate = async ({ data }: { data: CreateOrderType }) => {

        const response = await axios.post(`${baseUrl}/order/create`, data)

        return response
    }
    return useMutation({
        mutationFn: orderCreate,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['create-order'] })
        }
    })
}



export const LoginCanteenUser = () => {
    const queryClient = useQueryClient();
    const LoginUser = async ({ data }: { data: LoginType }) => {

        const response = await axios.post(`${baseUrl}/canteen/login`, data)

        return response
    }
    return useMutation({
        mutationFn: LoginUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['login-user'] })
        }
    })
}

export const UpdateProductItem = () => {
    const queryClient = useQueryClient();
    const updateProduct = async ({ data, id }: { data: any, id: string }) => {
        console.log(data)
        const response = await axios.put(`${baseUrl}/menu/${id}`, data)
        return response
    }
    return useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['menuitem'] })
        }
    })
}


export const DeleteProductItem = () => {
    const queryClient = useQueryClient();
    const deleteProduct = async ({ id }: { id: string }) => {
        const response = await axios.delete(`${baseUrl}/menu/${id}`)
        return response
    }
    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['menuitem'] })
        }
    })
}
