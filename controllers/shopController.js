
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

  exports.customise = (req, res) => {
    res.render('customise', {
      title: 'customise',
      stylesheet: 'customise', 
      script: 'customise'
    });
  };