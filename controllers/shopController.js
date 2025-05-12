
exports.getShop = (req, res) => {
    res.render('shop', {
      title: 'Shop',
      stylesheet: 'shop', 
      script: 'shop'
    });
  };

  exports.getwomenGuide = (req, res) => {
    res.render('womenGuide', {
      title: 'womenGuide',
      stylesheet: 'womenGuide', 
      script: 'womenGuide'
    });
  };