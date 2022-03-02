const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2/'
});

export const getTasks = () => {
  return instance.get('?developer=ValentinaD')
  .then((res) => {
    if (res.status === 200) {
      return res.data
    } else {
      console.log(`Error: ${res.status}`);
    }
  });
}

export const getAllTasks = (option) => {
  return instance.get('?developer=ValentinaD', {
    params: {
      page: option.page,
      sort_field: option.sortField,
      sort_direction: option.sortDirection
    },
  })
  .then((res) => {
    if (res.status === 200) {
      return res.data
    } else {
      console.log(`Error: ${res.status}`);
    }
  });
}

export const addTasks = (item) => {
  let form = new FormData();
  form.append('username', item.username);
  form.append('email', item.email);
  form.append('text', item.text);

  return instance.post('create?developer=ValentinaD', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
  .then((res) => {
    if (res.status === 200) {
      return res.data
    } else {
      console.log(`Error: ${res.status}`);
    }
  });
}

export const login = (data) => {
  let form = new FormData();
  form.append('password', data.password);
  form.append('username', data.username);

  return instance.post('login?developer=ValentinaD', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
  .then((res) => {
    if (res.status === 200) {
      return res.data
    } else {
      console.log(`Error: ${res.status}`);
    }
  });
}

export const taskEdit = (item) => {

  let form = new FormData();
  form.append('text', item.text);
  form.append('status', item.status);
  form.append('token', localStorage.getItem('token'));

  return instance.post(`edit/${item.id}?developer=ValentinaD`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
  .then((res) => {
    if (res.status === 200) {
      return res.data
    } else {
      console.log(`Error: ${res.status}`);
      localStorage.removeItem('token');
    }
  });
}


