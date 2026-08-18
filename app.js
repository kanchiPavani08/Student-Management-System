import { useState } from "react";

function App() {

    const [students, setStudents] = useState([]);

    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
        age: "",
        phone: "",
        city: ""
    });

    function handleChange(event) {

        setStudent({
            ...student,
            [event.target.name]: event.target.value
        });
    }

    function addStudent(event) {

        event.preventDefault();

        setStudents([
            ...students,
            {
                ...student,
                id: students.length + 1
            }
        ]);

        setStudent({
            name: "",
            email: "",
            course: "",
            age: "",
            phone: "",
            city: ""
        });
    }

    return (
        <div>

            <h1>Student Management System</h1>

            <form onSubmit={addStudent}>

                <input
                    name="name"
                    placeholder="Student Name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />

                <input
                    name="course"
                    placeholder="Course"
                    value={student.course}
                    onChange={handleChange}
                    required
                />

                <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={student.age}
                    onChange={handleChange}
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    value={student.phone}
                    onChange={handleChange}
                />

                <input
                    name="city"
                    placeholder="City"
                    value={student.city}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Student
                </button>

            </form>

            <h2>Students</h2>

            {students.map((s) => (

                <div key={s.id}>

                    <h3>{s.name}</h3>

                    <p>{s.email}</p>

                    <p>{s.course}</p>

                    <p>{s.city}</p>

                </div>

            ))}

        </div>
    );
}

export default App;
