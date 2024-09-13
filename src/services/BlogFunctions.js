var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { format } from 'date-fns';
import BlogService from './BlogService';
// Валидация заголовка статьи
function formatTitle(title) {
    if (!title || title.trim() === '')
        return 'Untitled';
    let arr = title.split('').map((el, i) => {
        if (i < 54)
            return el;
        if (i === 54)
            return '...';
        return '';
    });
    const checkUpperCaseAndNums = arr.every((word) => word === word.toUpperCase());
    if (checkUpperCaseAndNums) {
        arr = arr.map((word, i) => (i >= 22 ? '' : word));
    }
    return arr.join('').trim();
}
// Преобразование даты
function transformDate(wrongDate) {
    const arr = wrongDate
        .replaceAll(/[A-T-/:/.]+/g, ', ')
        .replace('Z', '')
        .split(',')
        .map((el) => +el);
    return format(new Date(arr[0], arr[1] - 1, arr[2]), 'PP');
}
// Форматирование описания статьи
function formatDescription(description) {
    if (!description || description === ' ')
        return 'No data.';
    const newDescription = description
        .split(' ')
        .map((word, i) => {
        if (word.length > 14 && i < 24)
            return word.slice(0, 14);
        if (i < 24)
            return word;
        if (i === 24)
            return '...';
        return '';
    })
        .join(' ');
    if (newDescription === '')
        return 'No data';
    return newDescription;
}
// Валидация текста статьи
function bodyToValid(body) {
    if (body === undefined || null)
        return 'No data.';
    const newBody = body.split(' ').map((word) => (word.length > 44 ? word.slice(0, 44) : word));
    return newBody.join(' ');
}
// Валидация аватара
function isValidUrl(url) {
    const objRE = /(^https?:\/\/)?[a-z0-9~_\-.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    return objRE.test(url);
}
// Валидация тэгов
function isTagsValid(tagList) {
    const newTagsArray = tagList.map((tag, i) => {
        if (i >= 5)
            return '';
        if (tag === null || undefined)
            return '';
        if (tag.length > 14)
            return tag.slice(0, 14);
        return tag.trim();
    });
    return newTagsArray.filter((el) => el !== null && el !== '');
}
// Готовый класс BlogService
const blogService = new BlogService();
// Получение данных пользователя и ошибок
function getDataFromResponses(response, storeObj, url) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response.status === 422) {
            yield response.json().then((obj) => {
                storeObj.errors = obj.errors;
            });
            return storeObj;
        }
        yield response.json().then((obj) => {
            storeObj.user = Object.assign({}, obj.user);
            storeObj.errors = {};
        });
        setCookie('kataBlogToken', `${storeObj.user.token}`);
        const responseGetUser = yield fetch(`${url}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Token ${getCookie('kataBlogToken')}`,
            },
        });
        yield responseGetUser.json().then((obj) => {
            storeObj.user = Object.assign({}, obj.user);
        });
        localStorage.setItem('blogKataUsername', storeObj.user.username);
        localStorage.setItem('blogKataImage', storeObj.user.image);
        return storeObj;
    });
}
// Получить Cookie
function getCookie(name) {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// Установить Cookie
function setCookie(name, value, options = {}) {
    options = Object.assign({ path: '/', 'max-age': 360000 }, options);
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    for (const optionKey in options) {
        updatedCookie += '; ' + optionKey;
        const optionValue = options[`${optionKey}`];
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function deleteCookie(name) {
    setCookie(name, '', {
        'max-age': -1,
    });
}
export { transformDate, formatDescription, isTagsValid, isValidUrl, bodyToValid, formatTitle, blogService, getCookie, setCookie, deleteCookie, getDataFromResponses, };
