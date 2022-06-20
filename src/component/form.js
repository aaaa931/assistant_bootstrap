import React from "react";
import {
    Label,
    Input,
    Span,
    Text,
    Btn,
    BtnSuccess,
    BtnDanger,
    Container,
} from "./theme";

const DataList = (props) => (
    <Label className="col-lg-6 mb-3">
        {props.text}
        <Input
            list={props.id}
            id={props.inputId}
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
            className="form-control"
            onChange={props.onChange}
        ></Input>
        <datalist id={props.id}>{props.option}</datalist>
    </Label>
);

const InputN = (props) => (
    <Label className="col-lg-6 mb-3">
        {props.text}
        <Input
            type="number"
            id={props.id}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            className="form-control"
            onChange={props.onChange}
        ></Input>
    </Label>
);

const InputT = (props) => (
    <Label className="col-lg-6 mb-3">
        {props.text}
        <Input
            className="form-control"
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={props.onChange}
        ></Input>
    </Label>
);

const Username = (props) => (
    <Label className="mb-3">
        {props.text}
        <Input
            name={props.name}
            className="form-control"
            pattern="^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$"
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={props.onChange}
            required
        ></Input>
    </Label>
);

const Password = (props) => (
    <Label className="mb-3">
        {props.text}
        <Input
            name={props.name}
            type="password"
            className="form-control"
            pattern="^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$"
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={props.onChange}
            required
        ></Input>
    </Label>
);

const Alert = (props) => (
    <section
        className="alert alert-danger display-none"
        id="alert"
        ref={props.ref}
    >
        {props.msg}
    </section>
);

const VerticalForm = (props) => (
    <Container className="container col-lg-4 vh-90 d-flex align-items-center">
        {props.text}
    </Container>
);

const Title = (props) => (
    <h2 className="text-center mb-3">
        <Text>{props.text}</Text>
    </h2>
);

const Modal = (props) => (
    <div className="modal fade" id="modal" tabindex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalLabel">
                        {props.title}
                    </h5>
                    <Btn
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></Btn>
                </div>
                <div className="modal-body">{props.text}</div>
                <div className="modal-footer">
                    <BtnDanger
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        關閉
                    </BtnDanger>
                    <BtnSuccess className="btn btn-primary">確定</BtnSuccess>
                </div>
            </div>
        </div>
    </div>
);

export default DataList;
export {
    InputN,
    InputT,
    Username,
    Password,
    Alert,
    VerticalForm,
    Title,
    Modal,
};
