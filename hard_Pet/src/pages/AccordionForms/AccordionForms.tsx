import { Accordion } from './components/Accordion'
import { FormProvider, useForm } from 'react-hook-form'
import Form1 from './UI/Form1/Form1'
import Form2 from './UI/Form2/Form2'


export const AccordionForms = () => {
    const form1Methods = useForm({
        shouldUnregister: false,
    })
    const form2Methods = useForm({
        shouldUnregister: false,
    })
    return (
        <div>
            <FormProvider {...form1Methods}>
                <Accordion title="Form 1">
                    <Form1 />
                </Accordion>
            </FormProvider>

            <FormProvider {...form2Methods}>
                <Accordion title="Form 2">
                    <Form2 />
                </Accordion>
            </FormProvider>
        </div>
    )
}

