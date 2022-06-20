import { nanoid } from "nanoid";

const noteData = JSON.parse(localStorage.getItem("noteData"));
const itemData = JSON.parse(localStorage.getItem("itemData"));
const itemCol = JSON.parse(localStorage.getItem("itemCol"));
const accountingCol = JSON.parse(localStorage.getItem("accountingCol"));
const accountingData = JSON.parse(localStorage.getItem("accountingData"));

const init = () => {
    if (!localStorage.getItem("webStyle")) {
        localStorage.setItem("webStyle", "light");
    }

    if (!localStorage.getItem("noteData")) {
        const noteData = [
            {
                id: "note" + nanoid(),
                name: "從這一筆資料開始",
                completed: false,
            },
        ];
        localStorage.setItem("noteData", JSON.stringify(noteData));
    }

    if (!localStorage.getItem("itemCol")) {
        const itemCol = [
            { Header: "項目類別", accessor: "itemType" },
            { Header: "項目編碼", accessor: "itemId" },
            { Header: "項目名稱", accessor: "itemName" },
        ];
        localStorage.setItem("itemCol", JSON.stringify(itemCol));
    }

    if (!localStorage.getItem("itemData")) {
        /*const itemData = [
            {
                itemType: "暫無資料",
                itemId: "暫無資料",
                itemName: "暫無資料",
            },
        ];
        localStorage.setItem("itemData", JSON.stringify(itemData));*/
        localStorage.setItem("itemData", JSON.stringify(""));
    }

    if (!localStorage.getItem("accountingCol")) {
        const accountingCol = [
            { Header: "項目編號", accessor: "accountingId" },
            { Header: "項目名稱", accessor: "accountingName" },
            { Header: "項目金額", accessor: "accountingPrice" },
            { Header: "記帳日期", accessor: "accountingDate" },
        ];
        localStorage.setItem("accountingCol", JSON.stringify(accountingCol));
    }

    if (!localStorage.getItem("accountingData")) {
        localStorage.setItem("accountingData", JSON.stringify(""));
    }
};

export default init;
export { noteData, itemData, itemCol, accountingCol, accountingData };
