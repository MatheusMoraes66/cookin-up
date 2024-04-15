export function compareTheLists(mainList: unknown[], secondaryList: unknown[]){
    return mainList.every((item) => secondaryList.includes(item))
}