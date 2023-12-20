import './AddEmployeePage.css'
function AddEmployeePage() {
    return (
        <form action="/employees" method="post">
            <div>
                <p>ФИО:</p>
                <input type={"text"} id={"Full_name"} name={"Full_name"} required/>
            </div>
            <div>
                <p>Отдел:</p>
                <input type={"text"} id={"Department"} name={"Department"} required/>
            </div>
            <div>
                <p>Должность:</p>
                <input type={"text"} id={"Post"} name={"Post"} required/>
            </div>
            <div>
                <p>Внутренний телефон:</p>
                <input type={"text"} id={"Internal_phone_number"} name={"Internal_phone_number"} required/>
            </div>
            <div>
                <p>Городской телефон:</p>
                <input type={"text"} id={"City_phone_number"} name={"City_phone_number"} required/>
            </div>
            <div>
                <p>Мобильный телефон:</p>
                <input type={"text"} id={"Mobile_phone_number"} name={"Mobile_phone_number"} required/>
            </div>

            <input type={"submit"}/>
        </form>
    )
}

export default AddEmployeePage