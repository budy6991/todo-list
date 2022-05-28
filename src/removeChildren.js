export default function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}