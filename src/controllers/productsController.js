module.exports = {
  productDetail: (req, res) => {
    return res.render('productDetail');
  },
  productAdd: (req, res) => {
    return res.render('ProductAdd');
  },
  productEdit: (req, res) => {
    return res.render('productEdit');
  }
};