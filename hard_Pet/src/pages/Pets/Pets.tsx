import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllPets, deletePet, postPet } from '../../api/petsApi'
import { useState, useEffect, useCallback, use } from 'react'
import styled from 'styled-components'
import { MemoComponent1 } from './components'
import { Counter } from './components/MemoComponent2'

const Page = styled.div`
  padding: 24px;
`

const Title = styled.h1<{isVisble: boolean, isBig: boolean}>` 
    ${props => `
        margin-bottom: 16px;
        opacity: ${props.isVisble ? 1 : 0};
        margin-top: ${props.isVisble ? '1px' : '0px'};
        ${props.isBig ? `
            height: 100px;
            width: 300px;
            ` : `
            height: 50px
            width: 100px;
            `}
    `}
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

Promise.reject().then(() =>
    {console.log(1)}, () => {console.log(2)}
).catch(() => {console.log(3)})

const arr = [1,2,3,4,5,6,7,8]

const [ _ , ...others] = arr

const user = {
    name: "123",
    age: "123"
}

const {name, age} = user;


type PetItemProps = {
  pet: {
    id: string
    name: string
  }
  onDelete: (id: string) => void
  onSave: (pet: { id: string; name: string }) => void
}

type TUseHookprops = {
    value: number
}

function useHook(props: TUseHookprops) {
    const exp = () => {console.log(props.value)}
    return {exp}
}

function useToggle(initialValue = false){
    const [value, setValue] = useState(initialValue)

    const toggle = () => {
        setValue((prev) => !prev)
    }

    const setTrue = () => {
        setValue(true)
    }

    const setFalse = () => {
        setValue(false)
    }

    return {value, toggle, setTrue, setFalse}
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

    const {value, toggle, setTrue, setFalse} = useToggle(false)

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

    const onClickHandler = useCallback(() => {
        alert(123)
    }, [])

    const {exp} = useHook({value:123})

    const showPetsCount = useCallback(() => {
        alert(`Количество питомцев: ${data?.length}`)
        exp()
    }, [data])


    
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <Page>
            <Title isVisble={true}>Pets</Title>
            <MemoComponent1 
                onClick={showPetsCount}
            />
            <Counter/>
            <div>
                <button onClick={toggle}>Переключить</button>
                <button onClick={setTrue}>Открыть</button>
                <button onClick={setFalse}>Закрыть</button>

                {value && <div>Модальное окно открыто</div>}
            </div>
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
