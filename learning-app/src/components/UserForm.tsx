import { useState } from "react"

interface IUserForm {
    name: string,
    age: number
}

const defaultFormValue = {
    name: '',
    age: 0
}

export function UserForm() {
    const [form, setForm] = useState<IUserForm>(defaultFormValue);

    const onChangeName = (event: any) => {
        setForm(
            {
                ...form,
                name: event.target.value
            }
        )
    }

    const onChangeAge = (event: any) => {
        setForm(
            {
                ...form,
                age: event.target.value
            }
        )
    }

    const onSubmitForm = () => {
        console.log("form", form);
        // call api here 
    }

    return (
        <div>
            User Name:<input type='text'
                name="username"
                value={form.name}
                onChange={onChangeName}>
            </input>
            <br></br>
            User Age:<input type='text'
                name="age"
                value={form.age}
                onChange={onChangeAge}>
            </input>
            <button onClick={onSubmitForm}>Submit</button>

        </div>
    )
}
