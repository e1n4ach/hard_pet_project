import type {Pet} from '../types/pet';

export const getAllPets = async () => {
  const response = await fetch('/pets')

  if (!response.ok) {
    throw new Error('Failed to fetch pets')
  }

  return response.json() as Promise<Pet[]>
}

type Petload = {
  id?: string
  name: string
}

export const postPet = async (data: Petload) => {
  const response = await fetch('/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to save pet')
  }

  return response.json()
}

export const deletePet = async (id: string) => {
  const response = await fetch(`/pets/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete pet')
  }

  return response.json()
}