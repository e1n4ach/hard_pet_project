import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllPets, deletePet, postPet } from '../api/petsApi'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Page = styled.div`
  padding: 24px;
`

const Title = styled.h1`
  margin-bottom: 16px;
`

const Row = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

const Input = styled.input`
  padding: 8px;
`

const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
`

type PetItemProps = {
  pet: {
    id: string
    name: string
  }
  onDelete: (id: string) => void
  onSave: (pet: { id: string; name: string }) => void
}

const PetItem = ({ pet, onDelete, onSave }: PetItemProps) => {
    const [name, setName] = useState(pet.name)

    useEffect(() => {
        if (name === pet.name) {
        return
        }

        const timerId = setTimeout(() => {
            onSave({
                id: pet.id,
                name,
            })
        }, 500)

        return () => {
        clearTimeout(timerId)
        }
    }, [name, pet.id, pet.name, onSave])

  return (
    <Row>
        <Input
            value={name}
            onChange={(event) => {
            setName(event.target.value)
            }}
        />

        <Button onClick={() => onDelete(pet.id)}>
            Delete
        </Button>
    </Row>
  )
}

export const Pets = () => {
    const queryClient = useQueryClient()
    const [newPetName, setNewPetName] = useState('')

    const { data, isLoading, error } = useQuery({
        queryKey: ['pets'],
        queryFn: getAllPets,
    })

    const deleteMutation = useMutation({
        mutationFn: deletePet,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pets'] })
        },
    })

    const createPetMutation = useMutation({
        mutationFn: postPet,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pets'] })
            setNewPetName('')
        },
    })

    const updatePetMutation = useMutation({
        mutationFn: postPet,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pets'] })
        },
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <Page>
            <Title>Pets</Title>
            <Row>
                <Input
                    value={newPetName}
                    onChange={(event) => setNewPetName(event.target.value)}
                    placeholder="Pet name"
                />

                <Button
                    onClick={() => {
                    createPetMutation.mutate({ name: newPetName })
                    }}
                >
                    Create
                </Button>
            </Row>
            <div>    
                {data?.map((pet) => (
                    <PetItem
                        key={pet.id}
                        pet={pet}
                        onDelete={(id) => deleteMutation.mutate(id)}
                        onSave={(updatedPet) => updatePetMutation.mutate(updatedPet)}
                    />
                ))}
            </div> 
        </Page>
    )
}

