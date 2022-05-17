import type { NextPage } from 'next'
import { useCallback } from 'react'
import { Heading, Button, useToast, chakra, Input } from '@chakra-ui/react'
import { Template } from '@/components/templates'
import { useFetchUsers } from '@/services'
import { useSeo } from '@/lib/seo'
import { UserList } from '@/components/parts/UserList'
import { SubmitHandler, useForm } from 'react-hook-form'
import { addUser } from '@/services/user'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  const { data, error, mutate } = useFetchUsers()
  const onMutate = useCallback(() => mutate(data), [data, mutate])

  const toast = useToast()

  const { register, handleSubmit } = useForm<{ name: string }>()
  const onSubmit: SubmitHandler<{ name: string }> = useCallback(
    (submitData) => {
      addUser(submitData).then(() => {
        onMutate()
      })
    },
    [onMutate],
  )

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <Heading as='h1'>Welcome, Boilerplate_Web-Full-Stack!</Heading>
      <UserList users={data} />
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name')} />
        <Button type='submit'>Add User</Button>
      </chakra.form>
      {error &&
        toast({
          title: 'Error!',
          description: '通信エラーが発生しました',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })}
      <Button variant='contained' onClick={onMutate}>
        update
      </Button>
    </Template>
  )
}

export default Index
