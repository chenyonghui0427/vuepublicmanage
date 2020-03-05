/**
 * 处理面包屑导航
 */
export const handleBreadCrumb = (bread) => {
    let list = [];
    let obj = {
        url: bread.url,
        title: bread.title
    };
    list.push(obj)
    bread.child.forEach(item => {
        list.push(item)
    });

    return list
}