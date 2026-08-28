import { useForm } from 'react-hook-form'

import {Input} from '../../components/Input'
import {Select} from '../../components/Select'
import {Checkbox} from '../../components/Checkbox'

const Form2 = () => {
    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (data: unknown) => {
        console.log('Form2:', data)
    }

        return (
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Название компании" {...register('company')}/>

                <Select defaultValue="" {...register('department')}>
                    <option value="">Выберите отдел</option>
                    <option value="development">Development</option>
                    <option value="analytics">Analytics</option>
                    <option value="support">Support</option>
                </Select>

                <Checkbox label="Удалённая работа" {...register('remote')}/>

                <Input
                type="email"
                placeholder="Email компании"
                {...register('companyEmail')}
                />

                <Input
                placeholder="Контактное лицо"
                {...register('contactPerson')}
                />

                <Input
                type="tel"
                placeholder="Телефон"
                {...register('phone')}
                />

                <Input
                placeholder="Город"
                {...register('city')}
                />

                <Input
                placeholder="Страна"
                {...register('country')}
                />

                <Input
                type="number"
                placeholder="Количество сотрудников"
                {...register('employees')}
                />

                <Select
                defaultValue=""
                {...register('industry')}
                >
                <option value="">Отрасль</option>
                <option value="it">IT</option>
                <option value="retail">Retail</option>
                <option value="finance">Finance</option>
                <option value="industry">Industry</option>
                </Select>

                <Input
                placeholder="Название должности"
                {...register('position')}
                />

                <Select
                defaultValue=""
                {...register('vacancyType')}
                >
                <option value="">Тип вакансии</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
                <option value="internship">Стажировка</option>
                </Select>

                <Input
                type="number"
                placeholder="Зарплата от"
                {...register('salaryFrom')}
                />

                <Input
                type="number"
                placeholder="Зарплата до"
                {...register('salaryTo')}
                />

                <Select
                defaultValue=""
                {...register('experienceRequired')}
                >
                <option value="">Требуемый опыт</option>
                <option value="none">Без опыта</option>
                <option value="one">1+ год</option>
                <option value="three">3+ года</option>
                <option value="five">5+ лет</option>
                </Select>

                <Select
                defaultValue=""
                {...register('educationRequired')}
                >
                <option value="">Требуемое образование</option>
                <option value="none">Не важно</option>
                <option value="college">Среднее специальное</option>
                <option value="university">Высшее</option>
                </Select>

                <Input
                placeholder="Адрес офиса"
                {...register('officeAddress')}
                />

                <Checkbox
                label="Есть корпоративные льготы"
                {...register('hasBenefits')}
                />

                <Checkbox
                label="Компания помогает с переездом"
                {...register('relocationSupport')}
                />

                <Input
                placeholder="Комментарий"
                {...register('comment')}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        )
}

export default Form2