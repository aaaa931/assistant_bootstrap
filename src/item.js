import React, { useRef, useState } from "react";
import { Container, Btn } from "./component/theme";
import ReactTable from "./component/table";
import DataList from "./component/form";
import { H2 } from "./component/theme";

const Item = (props) => {
    const [type, setType] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const rawData =
        JSON.parse(localStorage.getItem("itemData")).length > 0
            ? JSON.parse(localStorage.getItem("itemData"))
            : [{ itemType: "暫無資料" }];
    const [data, setData] = useState(rawData);
    /*const [data, setData] = useState(
        JSON.parse(localStorage.getItem("itemData"))
    );*/
    const refAlert = useRef("");
    const [msg, setMsg] = useState("");

    let typeData = [Object.keys(data).length];
    typeData = data.map((item) => item.itemType);
    typeData = [...new Set(typeData)];

    const typeList =
        typeData[0] != "暫無資料"
            ? typeData.map((item) => <option value={item} key={item}></option>)
            : "";

    const idList = data.map((item) => (
        <option value={item.itemId} key={item.itemId}></option>
    ));

    const nameList = data.map((item) => (
        <option value={item.itemName} key={item.itemId}></option>
    ));

    const handleType = (e) => {
        if (refAlert.current.style.display == "block") {
            refAlert.current.style.display = "none";
        }
        setType(e.target.value);
    };

    const handleId = (e) => {
        if (refAlert.current.style.display == "block") {
            refAlert.current.style.display = "none";
        }
        setId(e.target.value);
    };

    const handleName = (e) => {
        if (refAlert.current.style.display == "block") {
            refAlert.current.style.display = "none";
        }
        setName(e.target.value);
    };

    const handleItemSubmit = (e) => {
        e.preventDefault();

        if (type === "" || id === "" || name === "") {
            setMsg("輸入項目有缺少，請確認所有欄位都輸入完畢");
            refAlert.current.style.display = "block";
            return;
        }

        if (type === "暫無資料" || id === "暫無資料" || name === "暫無資料") {
            setMsg("請不要輸入系統預設的資料");
            refAlert.current.style.display = "block";
            return;
        }

        if (data.filter((item, i) => data[i].itemId === id).length > 0) {
            refAlert.current.style.display = "block";
            setMsg("項目編碼是唯一值，請不要輸入重複的項目編碼");
            return;
        }

        const newData = {
            itemType: type,
            itemId: id,
            itemName: name,
        };

        if (data[0].itemType === "暫無資料") {
            data.splice(0, 1);
        }

        setData([...data, newData]);
        data.push(newData);
        localStorage.setItem("itemData", JSON.stringify(data));
    };

    return (
        <Container className="container">
            <form className="form row mb-5" onSubmit={handleItemSubmit}>
                <H2>新增項目</H2>
                <DataList
                    text="項目類別"
                    placeholder="請輸入 8 個字以下"
                    minLength="1"
                    maxLength="8"
                    id="itemType"
                    option={typeList}
                    onChange={handleType}
                ></DataList>
                <DataList
                    text="項目編碼"
                    placeholder="請輸入 4 個字以下，不可重複"
                    minLength="1"
                    maxLength="4"
                    id="itemId"
                    option={idList}
                    onChange={handleId}
                ></DataList>
                <DataList
                    text="項目名稱"
                    placeholder="請輸入 8 個字以下"
                    minLength="1"
                    maxLength="8"
                    id="itemName"
                    option={nameList}
                    onChange={handleName}
                ></DataList>
                <Container className="px-3">
                    <Btn className="btn w-100 w-lg-50">新增</Btn>
                </Container>
                <Container className="px-3 pt-3">
                    <section
                        className="alert alert-danger display-none"
                        id="alert"
                        ref={refAlert}
                    >
                        {msg}
                    </section>
                </Container>
            </form>
            <Container className="row">
                <H2>項目表</H2>
                <ReactTable
                    data={data}
                    col={JSON.parse(localStorage.getItem("itemCol"))}
                ></ReactTable>
            </Container>
        </Container>
    );
};

export default Item;
