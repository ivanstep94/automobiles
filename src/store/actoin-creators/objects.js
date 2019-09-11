import { STORE_OBJECT } from '../actions/objects';

const storeObjects = (automobiles) => ({ type: STORE_OBJECT, payload: automobiles  });

const isArray = (children = []) => {
    return Array.isArray(children) && children.length;
};

const isObject = (children = {}) => {
    return Object.keys(children).length
};

const getValue = ({ value, type }) => {
    return { [type]: value };
};

const compose = (obj, item) => {
    return {...obj, ...getValue(item)}
};

const makeArray = (item, obj = {}, result = []) => {
    let newObj = {...compose(obj, item)};
    let { children } = item;
    if (children) {
        if (isArray(children)) {
            children.forEach(item => {
                return makeArray(item, newObj, result);
            });
        } else if (isObject(children)) {
            return makeArray(children, newObj, result);
        }
    } else result.push(newObj);
    return result;
};

const getData = (data = []) =>  {
    let automobiles = [];
    return (() => (dispatch) => {
        data.forEach(item => {
            automobiles = [...automobiles, ...makeArray(item)];
        });
        dispatch(storeObjects(automobiles));
    })();
};

export { getData };