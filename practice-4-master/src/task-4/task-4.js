
export default function showDialog(dialogEl) {
    $(dialogEl).modal("show");
    return new Promise((resolve, reject) => {
        dialogEl.querySelector("button.no").onclick = reject;
        dialogEl.querySelector("button.yes").onclick = resolve;
    });
}
