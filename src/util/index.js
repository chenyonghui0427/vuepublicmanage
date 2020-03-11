/**
 * 处理面包屑导航
 */
let list = [];
export const handleBreadCrumb = (allBread, currentBread) => {
    list.push(currentBread)
    return list
}