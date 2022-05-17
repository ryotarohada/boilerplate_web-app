import useSWR from 'swr'
import { API_ENDPOINT } from '@/lib/constants/env'
import axios from 'axios'

export const useFetchUsers = () =>
  useSWR<{ id: number; name: string }[]>(`${API_ENDPOINT}/user/list`)
export const addUser = (data: { name: string }) => {
  return axios.post('http://localhost:8080/api/user/add', data)
}
