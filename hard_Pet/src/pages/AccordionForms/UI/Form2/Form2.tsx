import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'

const Form2 = () => {
  const {
    register,
    handleSubmit,
  } = useFormContext()

  const onSubmit = (data: unknown) => {
    console.log('Form2:', data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Название компании"
        placeholder="Введите название компании"
        {...register('company')}
      />

      <Select
        label="Отдел"
        defaultValue=""
        {...register('department')}
      >
        <option value="">Выберите отдел</option>
        <option value="development">Development</option>
        <option value="analytics">Analytics</option>
        <option value="support">Support</option>
      </Select>

      <Checkbox
        label="Удалённая работа"
        {...register('remote')}
      />

      <Input
        label="Email компании"
        type="email"
        placeholder="Введите email компании"
        {...register('companyEmail')}
      />

      <Input
        label="Контактное лицо"
        placeholder="Введите имя контактного лица"
        {...register('contactPerson')}
      />

      <Input
        label="Телефон"
        type="tel"
        placeholder="Введите телефон"
        {...register('phone')}
      />

      <Input
        label="Город"
        placeholder="Введите город"
        {...register('city')}
      />

      <Input
        label="Страна"
        placeholder="Введите страну"
        {...register('country')}
      />

      <Input
        label="Количество сотрудников"
        type="number"
        placeholder="Введите количество сотрудников"
        {...register('employees')}
      />

      <Select
        label="Отрасль"
        defaultValue=""
        {...register('industry')}
      >
        <option value="">Выберите отрасль</option>
        <option value="it">IT</option>
        <option value="retail">Retail</option>
        <option value="finance">Finance</option>
        <option value="industry">Industry</option>
      </Select>

      <Input
        label="Название должности"
        placeholder="Введите название должности"
        {...register('position')}
      />

      <Select
        label="Тип вакансии"
        defaultValue=""
        {...register('vacancyType')}
      >
        <option value="">Выберите тип вакансии</option>
        <option value="fulltime">Full-time</option>
        <option value="parttime">Part-time</option>
        <option value="internship">Стажировка</option>
      </Select>

      <Input
        label="Зарплата от"
        type="number"
        placeholder="Введите минимальную зарплату"
        {...register('salaryFrom')}
      />

      <Input
        label="Зарплата до"
        type="number"
        placeholder="Введите максимальную зарплату"
        {...register('salaryTo')}
      />

      <Select
        label="Требуемый опыт"
        defaultValue=""
        {...register('experienceRequired')}
      >
        <option value="">Выберите требуемый опыт</option>
        <option value="none">Без опыта</option>
        <option value="one">1+ год</option>
        <option value="three">3+ года</option>
        <option value="five">5+ лет</option>
      </Select>

      <Select
        label="Требуемое образование"
        defaultValue=""
        {...register('educationRequired')}
      >
        <option value="">Выберите образование</option>
        <option value="none">Не важно</option>
        <option value="college">Среднее специальное</option>
        <option value="university">Высшее</option>
      </Select>

      <Input
        label="Адрес офиса"
        placeholder="Введите адрес офиса"
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
        label="Комментарий"
        placeholder="Введите комментарий"
        {...register('comment')}
      />

      <SubmitButton type="submit">
        Submit Form 2
      </SubmitButton>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 400px;
  padding: 16px;
`

const SubmitButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
`

export default Form2