import { useForm } from 'react-hook-form'

import {Input} from '../../components/Input'
import {Select} from '../../components/Select'
import {Checkbox} from '../../components/Checkbox'

const Form1 = () => {
    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (data: unknown) => {
        console.log(data)
    }

    return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <Input
            placeholder="Введите имя"
            {...register('name')}
        />

        <Select
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
        placeholder="Фамилия"
        {...register('surname')}
        />

        <Input
        type="email"
        placeholder="Email"
        {...register('email')}
        />

        <Input
        type="tel"
        placeholder="Телефон"
        {...register('phone')}
        />

        <Input
        type="number"
        placeholder="Возраст"
        {...register('age')}
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
        placeholder="Опыт работы"
        {...register('experience')}
        />

        <Select
        defaultValue=""
        {...register('level')}
        >
        <option value="">Уровень</option>
        <option value="junior">Junior</option>
        <option value="middle">Middle</option>
        <option value="senior">Senior</option>
        </Select>

        <Select
        defaultValue=""
        {...register('employment')}
        >
        <option value="">Тип занятости</option>
        <option value="fulltime">Full-time</option>
        <option value="parttime">Part-time</option>
        </Select>

        <Select
        defaultValue=""
        {...register('education')}
        >
        <option value="">Образование</option>
        <option value="school">Среднее</option>
        <option value="college">Среднее специальное</option>
        <option value="university">Высшее</option>
        </Select>

        <Input
        placeholder="Ссылка на портфолио"
        {...register('portfolio')}
        />

        <Input
        placeholder="GitHub"
        {...register('github')}
        />

        <Input
        type="number"
        placeholder="Желаемая зарплата"
        {...register('salary')}
        />

        <Select
        defaultValue=""
        {...register('workFormat')}
        >
        <option value="">Формат работы</option>
        <option value="office">Офис</option>
        <option value="remote">Удалённо</option>
        <option value="hybrid">Гибрид</option>
        </Select>

        <Select
        defaultValue=""
        {...register('englishLevel')}
        >
        <option value="">Уровень английского</option>
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
      <button type="submit">
        Submit
      </button>

    </form>
  )
}

export default Form1