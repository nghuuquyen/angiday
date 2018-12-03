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
      type: 'string',
      url: true
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
      type: 'integer'
    },
    slug: {
      type: 'string',
      unique: true
    },
    author: {
      model: 'user'
    },
    username: {
      type: 'string'
    },
    authorName: {
      type: 'string'
    },
    large: {
      type: 'object'
    },
    medium: {
      type: 'object'
    },
    small: {
      type: 'object'
    },
    thumb: {
      type: 'object'
    }
  }
};
