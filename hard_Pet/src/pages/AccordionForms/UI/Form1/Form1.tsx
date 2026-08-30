import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'

const Form1 = () => {
  const {
    register,
    handleSubmit,
  } = useFormContext()

  const onSubmit = (data: unknown) => {
    console.log('Form1:', data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Имя"
        placeholder="Введите имя"
        {...register('name')}
      />

      <Select
        label="Роль"
        defaultValue=""
        {...register('role')}
      >
        <option value="">Выберите роль</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </Select>

      <Checkbox
        label="Получать уведомления"
        {...register('notifications')}
      />

      <Input
        label="Фамилия"
        placeholder="Введите фамилию"
        {...register('surname')}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Введите email"
        {...register('email')}
      />

      <Input
        label="Телефон"
        type="tel"
        placeholder="Введите телефон"
        {...register('phone')}
      />

      <Input
        label="Возраст"
        type="number"
        placeholder="Введите возраст"
        {...register('age')}
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
        label="Опыт работы"
        type="number"
        placeholder="Опыт работы в годах"
        {...register('experience')}
      />

      <Select
        label="Уровень"
        defaultValue=""
        {...register('level')}
      >
        <option value="">Выберите уровень</option>
        <option value="junior">Junior</option>
        <option value="middle">Middle</option>
        <option value="senior">Senior</option>
      </Select>

      <Select
        label="Тип занятости"
        defaultValue=""
        {...register('employment')}
      >
        <option value="">Выберите тип занятости</option>
        <option value="fulltime">Full-time</option>
        <option value="parttime">Part-time</option>
      </Select>

      <Select
        label="Образование"
        defaultValue=""
        {...register('education')}
      >
        <option value="">Выберите образование</option>
        <option value="school">Среднее</option>
        <option value="college">Среднее специальное</option>
        <option value="university">Высшее</option>
      </Select>

      <Input
        label="Портфолио"
        placeholder="Ссылка на портфолио"
        {...register('portfolio')}
      />

      <Input
        label="GitHub"
        placeholder="Ссылка на GitHub"
        {...register('github')}
      />

      <Input
        label="Желаемая зарплата"
        type="number"
        placeholder="Введите желаемую зарплату"
        {...register('salary')}
      />

      <Select
        label="Формат работы"
        defaultValue=""
        {...register('workFormat')}
      >
        <option value="">Выберите формат работы</option>
        <option value="office">Офис</option>
        <option value="remote">Удалённо</option>
        <option value="hybrid">Гибрид</option>
      </Select>

      <Select
        label="Уровень английского"
        defaultValue=""
        {...register('englishLevel')}
      >
        <option value="">Выберите уровень английского</option>
        <option value="a2">A2</option>
        <option value="b1">B1</option>
        <option value="b2">B2</option>
        <option value="c1">C1</option>
      </Select>

      <Checkbox
        label="Готов к переезду"
        {...register('relocation')}
      />

      <Checkbox
        label="Получать новости"
        {...register('newsletter')}
      />

      <SubmitButton type="submit">
        Submit Form 1
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

export default Form1