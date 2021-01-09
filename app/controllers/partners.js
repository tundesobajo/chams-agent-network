exports.index = (req, res) => {
  const context = { 
    title: 'Partnership',
    pageClass: 'page'
  };
  res.render('partners/index', context);
};

exports.options = (req, res) => {
  const context = { 
    title: 'Partnership Options',
    pageClass: 'page'
  };
  res.render('partners/options', context);
};

exports.steps = (req, res) => {
  const context = { 
    title: 'Application and Participation Steps',
    pageClass: 'page'
  };
  res.render('partners/steps', context);
};

exports.obligations = (req, res) => {
  const context = { 
    title: 'Obligations of Partners',
    pageClass: 'page'
  };
  res.render('partners/obligations', context);
};
