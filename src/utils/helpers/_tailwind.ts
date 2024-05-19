export const tl = (condition: boolean, trueClass: string = "", falseClass: string = "") => {
    return condition ? trueClass: falseClass;
}