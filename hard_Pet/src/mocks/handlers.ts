import { http, HttpResponse } from 'msw'

let pets = [
    { id: '1', name: 'волк' },
    { id: '2', name: 'лиса' },
]

export const handlers = [
    http.get('/user/info', () => {
        return HttpResponse.json({
        login: 'TestUser',
        id: '123',
        })
    }),

    http.get('/pets', () => {
        return HttpResponse.json(pets)
    }),

    http.post('/pets', async ({ request }) => {
        const body = (await request.json()) as {
            id?: string
            name: string
        }

        if (body.id) {
        pets = pets.map((pet) =>
            pet.id === body.id ? { ...pet, name: body.name } : pet
        )

        const updatedPet = pets.find((p) => p.id === body.id)
            return HttpResponse.json(updatedPet)
        }

        const newPet = {
            id: crypto.randomUUID(),
            name: body.name,
        }

        pets.push(newPet)
        return HttpResponse.json(newPet)
    }),

    http.delete('/pets/:id', ({ params }) => {
        const { id } = params

        pets = pets.filter((pet) => pet.id !== id)

        return HttpResponse.json({ success: true })
    }),
]