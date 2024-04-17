export const findElemntInJSONString = (
    element: string,
    list: string
): boolean => {
    let str = list.replaceAll(`\'`, '"');
    // str = list.replaceAll('\n', "");

    // const parseList = JSON.parse(str)
    const parseList: Array<string> = JSON.parse(str);
    for (let i = 0; i < parseList.length; i++) {
        if (parseList[i] === element) return true;
    }

    return false;
};

export const discontTester = (
    element: string,
    list: string | null,
    discount: number | null
): number => {

    if (list && discount && discount > 0 && findElemntInJSONString(element, list)) {
        const discountValueTransformer = (100 - discount) / 100;
        return discountValueTransformer;
    } else return 1;
};
