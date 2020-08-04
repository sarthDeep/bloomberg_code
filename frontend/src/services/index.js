import axios from '../utils/axios'


const getRestaurant = () =>
    axios({
        url: `/restaurants/`,
        method: 'get',
    });

const getOneRestaurant = (id) =>
    axios({
        url: `/restaurants/${id}/`,
        method: 'get',
    });

const deleteRestaurant = (id) =>
    axios({
        url: `/restaurants/${id}/`,
        method: 'delete',
    });
const editRestaurant = (data) =>
    axios({
        url: `/restaurants/${data.id}/`,
        method: 'put',
        data: data
    });
const createRestaurant = data =>
    axios({
        url: '/restaurants/',
        method: 'post',
        data: data,
    });

export default {
    getRestaurant,
    getOneRestaurant,
    createRestaurant,
    editRestaurant,
    deleteRestaurant
};
