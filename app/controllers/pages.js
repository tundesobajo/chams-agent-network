exports.index = (req, res) => {
  const context = {
    title: 'Chams Agent Network',
    pageClass: 'index',
    layout: 'layoutHome'
  };
  res.render('pages/index', context);
};

exports.about = (req, res) => {
  const context = {
    title: 'About Us',
    pageClass: 'page'
  };
  res.render('pages/about', context);
};
