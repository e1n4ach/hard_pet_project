import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../api/userApi'
import styled from 'styled-components'

const Title = styled.div`
  margin: 16px;
  color: white;
`

export const UserInfo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user-info'],
    queryFn: getUserInfo,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <Title>Login: {data.login}</Title>
      <Title>ID: {data.id}</Title>
    </div>
  )
}