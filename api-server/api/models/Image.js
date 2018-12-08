/**
* Created by Quyen Nguyen Huu on 2/12/2018.
* Email: nghuuquyen@gmail.com
* @name Image Model.
*
* @description
* Used to store image upload data of user.
*
*/
module.exports = {
  schema: true,
  attributes: {
    host: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    originalname: {
      type: 'string'
    },
    encoding: {
      type: 'string'
    },
    mimetype: {
      type: 'string'
    },
    fileName: {
      type: 'string'
    },
    size: {
      type: 'number'
    },
    large: {
      type: 'json'
    },
    medium: {
      type: 'json'
    },
    small: {
      type: 'json'
    },
    thumb: {
      type: 'json'
    }
  }
};
