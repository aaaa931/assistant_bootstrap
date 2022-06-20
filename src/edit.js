import React, { useState, useEffect } from "react";
import Btn, { web_style } from "./component/btn";
import Task from "./component/task";

const NoteInput = (props) => {
    const [name, setName] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        props.addRow(name);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    useEffect(() => {
        web_style();
    }, []);

    return (
        <form className="form row" onSubmit={handelSubmit}>
            <section className="col-lg-2 col-12 ms-2">
                <label htmlFor="inputNote theme-text">輸入待辦事項：</label>
            </section>
            <section className="col-lg-10 col-12 ms-2">
                <input
                    id="inputNote"
                    className="form-control theme-section theme-text"
                    value={name}
                    onChange={handleChange}
                ></input>
            </section>
        </form>
    );
};
/*
const noteData = [
    { id: 0, name: "test1", completed: true },
    { id: 1, name: "test2", completed: true },
    { id: 2, name: "test3", completed: true },
];
localStorage.setItem("noteData", JSON.stringify(noteData));
*/
const FilterBtn = (props) => {
    useEffect(() => {
        web_style();
    }, []);

    return (
        <button
            className="btn w-90-3 theme-section theme-text mx-lg-3 mx-1"
            onClick={() => props.setFilter(props.name)}
        >
            {props.name}
        </button>
    );
};

const filterType = {
    all: () => true,
    active: (note) => !note.completed,
    completed: (note) => note.completed,
};

const filterName = Object.keys(filterType);

const Edit = (props) => {
    const [note, setNote] = useState(props.data);
    const [filter, setFilter] = useState("all");

    const addRow = (name) => {
        const newNote = {
            id: note[note.length - 1].id + 1,
            name: name,
            completed: false,
        };
        setNote([...note, newNote]);
        note.push(newNote);
        localStorage.setItem("noteData", JSON.stringify(note));
    };

    const toggleCompleted = (id) => {
        const newNote = note.map((note) => {
            if (id === note.id) {
                console.log("true");
                return { ...note, completed: !note.completed };
            }
            return note;
        });
        setNote(newNote);
        localStorage.setItem("noteData", JSON.stringify(newNote));
    };

    const deleteNote = (id) => {
        const newNote = note.filter((note) => id !== note.id);
        setNote(newNote);
        localStorage.setItem("noteData", JSON.stringify(newNote));
    };

    const editNote = (id, name) => {
        const newNote = note.map((note) => {
            if (id === note.id) {
                return { ...note, name };
            }
            return note;
        });
        setNote(newNote);
        localStorage.setItem("noteData", JSON.stringify(newNote));
    };

    const filterList = filterName.map((name) => (
        <FilterBtn
            key={name}
            name={name}
            Press={name === filter}
            setFilter={setFilter}
        />
    ));

    const noteList = note
        .filter(filterType[filter])
        .map((note) => (
            <Task
                id={note.id}
                name={note.name}
                completed={note.completed}
                key={note.id}
                toggleCompleted={toggleCompleted}
                deleteNote={deleteNote}
                editNote={editNote}
            />
        ));

    useEffect(() => {
        web_style();
    }, []);

    return (
        <section className="container theme-bg theme-text my-5">
            <section className="row mb-5">
                <NoteInput data={note} addRow={addRow} />
            </section>
            <section className="row mb-5">
                <section className="col">{filterList}</section>
            </section>
            <section className="row mb-5">
                <ul className="my-0 none-list">{noteList}</ul>
            </section>
        </section>
    );
};

export default Edit;
