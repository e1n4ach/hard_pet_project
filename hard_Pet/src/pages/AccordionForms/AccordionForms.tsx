import { Accordion } from './components/Accordion'
import Form1 from './UI/Form1/Form1'
import Form2 from './UI/Form2/Form2'


export const AccordionForms = () => {
    return (
        <div>
            <Accordion title="Form 1">
                <Form1 />
            </Accordion>
            <Accordion title="Form 2">
                <Form2 />
            </Accordion>
        </div>
    )
}

