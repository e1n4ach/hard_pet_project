import { Accordion } from './components/Accordion'
import Form1 from './forms/Form1/Form1'
import Form2 from './forms/Form2/Form2'
import './AccordionForms.css'

export const AccordionForms = () => {
    return (
        <div>
            <h1>Accordion Forms</h1>
            <Accordion title="Form 1">
                <Form1 />
            </Accordion>

            <Accordion title="Form 2">
                    <Form2 />
            </Accordion>
        </div>
    )
}

