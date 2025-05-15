
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

  exports.getheelsW = (req, res) => {
    res.render('heelsW', {
      title: 'heelsW',
      stylesheet: 'heelsW',
      script: 'heelsW'
    });
  }

  exports.getflats = (req, res) => {
    res.render('flats', {
      title: 'flats',
      stylesheet: 'flats',
      script: 'flats'
    });
  }

  exports.getsneakers = (req, res) => {
    res.render('sneakers', {
      title: 'sneakers',
      stylesheet: 'sneakers',
      script: 'sneakers'
    });
  }


  exports.customise = (req, res) => {
    res.render('customise', {
      title: 'customise',
      stylesheet: 'customise', 
      script: 'customise'
    });
  };