import React, { useEffect, useRef, useState } from "react";
import { web_style } from "./btn";
import { BtnDanger, BtnSuccess, Container, Input } from "./theme";

const Task = (props) => {
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState("");

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editNote(props.id, newName);
        setNewName("");
        setEdit(false);
    };

    const editor = (
        <form className="form row" onSubmit={handleSubmit}>
            <Container key={props.id}>
                <Input
                    id={props.id}
                    className="form-control mx-3 mb-3"
                    placeholder={props.name}
                    value={newName}
                    onChange={handleChange}
                />
                <section className="col mb-3">
                    <BtnDanger
                        className="btn me-lg-3 w-90-2 h-300rem mx-3"
                        onClick={() => setEdit(false)}
                    >
                        取消
                    </BtnDanger>
                    <BtnSuccess className="btn me-lg-3 w-90-2 h-300rem">
                        確認
                    </BtnSuccess>
                </section>
            </Container>
        </form>
    );

    const view = (
        <section className="row">
            <section key={props.id}>
                <input
                    type="checkbox"
                    id={props.id}
                    defaultChecked={props.completed}
                    className="form-check-input mt-0 mx-3 mb-3 theme-section-dark wh-25"
                    onChange={() => props.toggleCompleted(props.id)}
                />
                <label htmlFor={props.id}>{props.name}</label>
                <section className="col mb-3">
                    <BtnSuccess
                        className="btn me-lg-3 w-90-2 h-300rem mx-3"
                        onClick={() => setEdit(true)}
                    >
                        編輯
                    </BtnSuccess>
                    <BtnDanger
                        className="btn w-90-2 h-300rem"
                        onClick={() => props.deleteNote(props.id)}
                    >
                        刪除
                    </BtnDanger>
                </section>
            </section>
        </section>
    );

    return <li>{edit ? editor : view}</li>;
};

export default Task;
